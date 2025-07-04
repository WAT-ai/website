const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Script to optimize images using ImageMagick for better web performance
async function optimizeImages() {
  console.log('Starting image optimization...');
  
  // Verify ImageMagick installation before proceeding
  try {
    execSync('which convert', { stdio: 'ignore' });
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
      } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
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
    const optimizedPath = path.join(dir, `${baseName}_optimized${ext}`);
    
    try {
      if (ext === '.jpg' || ext === '.jpeg') {
        // JPEG: 80% quality with progressive encoding for faster loading
        execSync(`convert "${imagePath}" -quality 80 -interlace Plane "${optimizedPath}"`);
      } else if (ext === '.png') {
        // PNG: Compress while maintaining transparency
        execSync(`convert "${imagePath}" -quality 80 "${optimizedPath}"`);
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

optimizeImages().catch(console.error);
