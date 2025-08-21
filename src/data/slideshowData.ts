/**
 * Slideshow Images Data
 * 
 * This file manages slideshow images for the Students page.
 * To add new slideshow images:
 * 1. Add your image to /assets/studentLandingPage/slideshow/
 * 2. Add an entry to the slideshowImages array below
 * 
 * Image naming convention: use descriptive names with underscores
 * Alt text should be descriptive for accessibility
 */

// Helper function to require images from slideshow folder
const requireSlideshowImage = (filename: string) => {
  try {
    return require(`../assets/studentLandingPage/slideshow/${filename}`);
  } catch (error) {
    console.warn(`Slideshow image not found: ${filename}`);
    return null;
  }
};

// Slideshow images configuration
export const slideshowImages = [
  {
    filename: "team_dinner_opt.jpg",
    alt: "WAT.ai Team Dinner",
    description: "Team building dinner event"
  },
  {
    filename: "cucai24-team_opt.jpg",
    alt: "CUCAI 24",
    description: "Team participating in CUCAI 2024"
  },
  {
    filename: "cucai25-working_opt.jpg",
    alt: "CUCAI 25",
    description: "Team working during CUCAI 2025"
  },
  {
    filename: "cucai25-showcase_opt.jpg",
    alt: "CUCAI 25",
    description: "Team showcasing their work during CUCAI 2025"
  },
  {
    filename: "cucai24_table_opt.jpg",
    alt: "CUCAI 24",
    description: "Team at CUCAI 2024"
  },
  {
    filename: "cucai25_convo_opt.jpg",
    alt: "CUCAI 25",
    description: "Team at CUCAI 25"
  }

];

// Export processed images array ready for ImageGallery component
export const processedSlideshowImages = slideshowImages
  .map(({ filename, alt }) => {
    const src = requireSlideshowImage(filename);
    return src ? { src, alt } : null;
  })
  .filter((item): item is { src: string; alt: string } => item !== null); // Type-safe filter

// Helper function to add new image programmatically
export const addSlideshowImage = (filename: string, alt: string, description?: string) => {
  const src = requireSlideshowImage(filename);
  if (src) {
    return { src, alt };
  }
  return null;
};

// Statistics about slideshow
export const slideshowStats = {
  totalImages: processedSlideshowImages.length,
  availableImages: slideshowImages.length,
  missingImages: slideshowImages.length - processedSlideshowImages.length
};
