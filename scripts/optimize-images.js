/**
 * Image optimization script for WAT.ai website
 * Compresses images to <200KB using ImageMagick with quality/resize fallbacks
 * Usage: node optimize-images.js [--clean| --help]
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Command line argument parsing
const args = process.argv.slice(2);
const shouldClean = args.includes('--clean');
const shouldShowHelp = args.includes('--help') || args.includes('-h');

// Display usage information
function showHelp() {
  console.log('Image Optimization Script');
  console.log('');
  console.log('Optimizes images to under 200KB by adjusting quality and resizing if needed.');
  console.log('');
  console.log('Usage:');
  console.log('  node optimize-images.js           - Optimize all images in src/assets');
  console.log('  node optimize-images.js --clean   - Remove all optimized images');
  console.log('  node optimize-images.js --help    - Show this help message');
  console.log('');
  console.log('npm scripts:');
  console.log('  npm run optimize:images           - Optimize all images');
  console.log('  npm run optimize:images:clean     - Clean up optimized images');
  console.log('  npm run optimize:images:help      - Show this help message');
  console.log('');
  console.log('Note: Requires ImageMagick');
  console.log('');
}

/**
 * Remove all optimized images (_opt suffix files)
 * Useful for clean rebuilds and removing outdated versions
 */
async function cleanOptimizedImages() {
  console.log('Starting cleanup of optimized images...');
  
  const srcAssetsDir = path.join(__dirname, '../src/assets');
  
  // Recursively find optimized image files
  function findOptimizedImages(dir) {
    let optimizedImages = [];
    if (!fs.existsSync(dir)) return optimizedImages;
    
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Recursively search subdirectories
        optimizedImages = optimizedImages.concat(findOptimizedImages(filePath));
      } else if (/_opt\.(jpg|jpeg|png)$/i.test(file)) {
        // Match files with _opt suffix
        optimizedImages.push(filePath);
      }
    }
    return optimizedImages;
  }
  
  const optimizedImages = findOptimizedImages(srcAssetsDir);
  console.log(`Found ${optimizedImages.length} optimized images to remove`);
  
  for (const imagePath of optimizedImages) {
    try {
      fs.unlinkSync(imagePath);
      console.log(`Removed ${path.basename(imagePath)}`);
    } catch (error) {
      console.log(`Failed to remove ${path.basename(imagePath)}: ${error.message}`);
    }
  }
  
  console.log('Cleanup completed!');
}

// Main optimization function using ImageMagick
async function optimizeImages() {
  console.log('Starting image optimization...');
  
  // Verify ImageMagick installation
  try {
    execSync('which magick', { stdio: 'ignore' });
  } catch (error) {
    console.log('ImageMagick not found. Please install it first:');
    console.log('   brew install imagemagick');
    return;
  }
  
  const srcAssetsDir = path.join(__dirname, '../src/assets');
  
  // Recursively find all unoptimized image files
  function findImages(dir) {
    let images = [];
    if (!fs.existsSync(dir)) return images;
    
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        images = images.concat(findImages(filePath));
      } else if (/\.(jpg|jpeg|png)$/i.test(file) && !/_opt\.(jpg|jpeg|png)$/i.test(file)) {
        // Only include original images, skip optimized ones
        images.push(filePath);
      }
    }
    return images;
  }
  
  const images = findImages(srcAssetsDir);
  console.log(`Found ${images.length} images to optimize`);
  
  for (const imagePath of images) {
    const ext = path.extname(imagePath).toLowerCase();
    const baseName = path.basename(imagePath, ext);
    const dir = path.dirname(imagePath);
    const optimizedPath = path.join(dir, `${baseName}_opt${ext}`);
    
    // Skip if optimized version exists (or overwrite)
    if (fs.existsSync(optimizedPath)) {
      console.log(`Overwriting existing optimized file: ${path.basename(optimizedPath)}`);
    }
    
    try {
      let quality = 85;
      let optimizedSize = 0;
      const targetSize = 200 * 1024; // 200KB target
      
      // Iteratively reduce quality/size to meet target
      for (let attempt = 0; attempt < 15; attempt++) {
        if (ext === '.jpg' || ext === '.jpeg') {
          // JPEG: Progressive encoding for faster loading
          execSync(`magick "${imagePath}" -quality ${quality} -interlace Plane "${optimizedPath}"`);
        } else if (ext === '.png') {
          // PNG: Compress while maintaining transparency
          execSync(`magick "${imagePath}" -quality ${quality} "${optimizedPath}"`);
        }
        
        optimizedSize = fs.statSync(optimizedPath).size;
        
        if (optimizedSize <= targetSize) {
          break; // Target achieved
        }
        
        // Progressive compression strategy
        if (attempt < 8) {
          // First 8 attempts: reduce quality
          quality = Math.max(20, quality - 10);
        } else {
          // After attempt 8: aggressive resizing
          const targetReduction = targetSize / optimizedSize;
          const scaleFactor = Math.sqrt(targetReduction * 0.85); // 85% safety margin
          const scalePercent = Math.max(20, Math.floor(scaleFactor * 100)); // Min 20%
          
          if (ext === '.jpg' || ext === '.jpeg') {
            execSync(`magick "${imagePath}" -resize ${scalePercent}% -quality ${Math.max(30, quality)} -interlace Plane "${optimizedPath}"`);
          } else if (ext === '.png') {
            execSync(`magick "${imagePath}" -resize ${scalePercent}% -quality ${Math.max(30, quality)} "${optimizedPath}"`);
          }
          
          optimizedSize = fs.statSync(optimizedPath).size;
          
          if (optimizedSize <= targetSize) {
            break;
          }
          
          // Further reduce scale for next attempt
          quality = Math.max(20, quality - 5);
        }
        
        if (quality <= 15 && attempt > 12) {
          console.log(`  ⚠️  Reached minimum quality threshold for ${path.basename(imagePath)}`);
          break;
        }
      }
      
      // Display optimization results
      const originalSize = fs.statSync(imagePath).size;
      const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
      const sizeInKB = (optimizedSize / 1024).toFixed(1);
      
      if (optimizedSize <= targetSize) {
        console.log(`✅ Optimized ${path.basename(imagePath)} - ${savings}% smaller (${sizeInKB}KB)`);
      } else {
        console.log(`⚠️  ${path.basename(imagePath)} - ${savings}% smaller (${sizeInKB}KB) - Could not reach 200KB target`);
      }
    } catch (error) {
      console.log(`Failed to optimize ${path.basename(imagePath)}: ${error.message}`);
    }
  }
  
  console.log('Image optimization completed!');
}

// Execute based on command line arguments
async function main() {
  if (shouldShowHelp) {
    showHelp();
  } else if (shouldClean) {
    await cleanOptimizedImages();
  } else {
    await optimizeImages();
  }
}

main().catch(console.error);
