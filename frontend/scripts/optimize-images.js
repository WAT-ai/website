// Image optimization script for all images in src/assets.
// Uses ImageMagick. Run with `node optimize-images.js`.
// Adds _opt to output files. Edit quality or formats as needed.
// Use --clean flag to remove all optimized images: `node optimize-images.js --clean`

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check command line arguments
const args = process.argv.slice(2);
const shouldClean = args.includes('--clean');
const shouldShowHelp = args.includes('--help') || args.includes('-h');

// Function to show usage information
function showHelp() {
  console.log('Image Optimization Script');
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

// Function to clean up all optimized images
async function cleanOptimizedImages() {
  console.log('Starting cleanup of optimized images...');
  
  const srcAssetsDir = path.join(__dirname, '../src/assets');
  
  // Recursively find all optimized image files
  function findOptimizedImages(dir) {
    let optimizedImages = [];
    if (!fs.existsSync(dir)) return optimizedImages;
    
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        optimizedImages = optimizedImages.concat(findOptimizedImages(filePath));
      } else if (/_opt\.(jpg|jpeg|png)$/i.test(file)) {
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

// Script to optimize images using ImageMagick for better web performance
async function optimizeImages() {
  console.log('Starting image optimization...');
  
  // Verify ImageMagick installation before proceeding
  try {
    execSync('which magick', { stdio: 'ignore' });
  } catch (error) {
    console.log('ImageMagick not found. Please install it first:');
    console.log('   brew install imagemagick');
    return;
  }
  
  const srcAssetsDir = path.join(__dirname, '../src/assets');
  
  // Recursively find all image files in the assets directory
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
        // Only include original images, not already optimized ones
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
    
    // Check if optimized version already exists and skip or overwrite
    if (fs.existsSync(optimizedPath)) {
      console.log(`Overwriting existing optimized file: ${path.basename(optimizedPath)}`);
    }
    
    try {
      if (ext === '.jpg' || ext === '.jpeg') {
        // JPEG: 80% quality with progressive encoding for faster loading
        execSync(`magick "${imagePath}" -quality 80 -interlace Plane "${optimizedPath}"`);
      } else if (ext === '.png') {
        // PNG: Compress while maintaining transparency
        execSync(`magick "${imagePath}" -quality 80 "${optimizedPath}"`);
      }
      
      // Calculate and display file size reduction
      const originalSize = fs.statSync(imagePath).size;
      const optimizedSize = fs.statSync(optimizedPath).size;
      const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
      
      console.log(`Optimized ${path.basename(imagePath)} - ${savings}% smaller`);
    } catch (error) {
      console.log(`Failed to optimize ${path.basename(imagePath)}: ${error.message}`);
    }
  }
  
  console.log('Image optimization completed!');
}

// Main execution logic
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
