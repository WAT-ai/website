/**
 * Compresses images to <200KB using Sharp.
 *
 * Usage: node scripts/optimize-images.js [--clean|--help]
 *
 * Prerequisites:
 *   npm install sharp glob
 */

const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');
const glob = require('glob');

const TARGET_SIZE_KB = 200;
const SRC_DIR = path.join(__dirname, '../src/assets');
const IMG_PATTERN = '**/*.{jpg,jpeg,png}';
const OPT_SUFFIX = '_opt';


async function optimizeImages() {
  console.log('Starting image optimization...');
  const imagePaths = glob.sync(IMG_PATTERN, { cwd: SRC_DIR, nodir: true });
  const imagesToProcess = imagePaths.filter(p => !p.includes(OPT_SUFFIX));

  if (imagesToProcess.length === 0) {
    console.log('No images found to optimize.');
    return;
  }

  console.log(`Found ${imagesToProcess.length} images to optimize.`);

  for (const imagePath of imagesToProcess) {
    const fullPath = path.join(SRC_DIR, imagePath);
    const optimizedPath = getOptimizedPath(fullPath);

    try {
      const originalSize = (await fs.stat(fullPath)).size;
      let quality = 80; // Start with good quality
      let currentWidth = (await sharp(fullPath).metadata()).width;
      let optimizedBuffer;

      // Iteratively reduce quality and size until the image is under the target size
      while (quality >= 30) {
        optimizedBuffer = await sharp(fullPath)
          .resize({ width: currentWidth })
          .jpeg({ quality, progressive: true, mozjpeg: true })
          .toBuffer();

        if (optimizedBuffer.length < TARGET_SIZE_KB * 1024) {
          break; // Success!
        }

        // If still too large, reduce quality or width
        if (quality > 40) {
          quality -= 10; // Reduce quality first
        } else {
          currentWidth = Math.floor(currentWidth * 0.9); // Then reduce size
        }
      }

      await fs.writeFile(optimizedPath, optimizedBuffer);

      const optimizedSize = optimizedBuffer.length;
      const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);

      console.log(
        `✅ Optimized ${imagePath} | ${toKB(originalSize)}KB -> ${toKB(optimizedSize)}KB (Saved ${savings}%)`
      );

    } catch (error) {
      console.error(`❌ Failed to optimize ${imagePath}: ${error.message}`);
    }
  }

  console.log('\nImage optimization completed!');
}


async function cleanOptimizedImages() {
  console.log('Cleaning up optimized images...');
  const imagePaths = glob.sync(`**/*${OPT_SUFFIX}.{jpg,jpeg,png}`, { cwd: SRC_DIR, nodir: true });

  if (imagePaths.length === 0) {
    console.log('No optimized images found to clean.');
    return;
  }

  for (const imagePath of imagePaths) {
    const fullPath = path.join(SRC_DIR, imagePath);
    await fs.unlink(fullPath);
    console.log(`Removed ${imagePath}`);
  }

  console.log('\nCleanup complete!');
}


function showHelp() {
  console.log(`
  Image Optimization Script

  Optimizes images in '${SRC_DIR}' to be under ${TARGET_SIZE_KB}KB.

  Usage:
    node scripts/optimize-images.js          - Optimize all images
    node scripts/optimize-images.js --clean  - Remove all optimized images
    node scripts/optimize-images.js --help   - Show this help message

  Prerequisites:
    Run 'npm install sharp glob'
  `);
}

// --- Helpers ---

const getOptimizedPath = (p) => {
  const ext = path.extname(p);
  const base = p.slice(0, -ext.length);
  return `${base}${OPT_SUFFIX}${ext}`;
};

const toKB = (bytes) => (bytes / 1024).toFixed(1);



async function main() {
  const args = process.argv.slice(2);
  if (args.includes('--help')) {
    showHelp();
  } else if (args.includes('--clean')) {
    await cleanOptimizedImages();
  } else {
    await optimizeImages();
  }
}

main().catch(console.error);