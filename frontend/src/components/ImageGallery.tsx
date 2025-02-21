import React from "react";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const theme = useTheme();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "0", // No extra padding for side images
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      }
    ]
  };

  return (
    <Box
      sx={{
        width: "100%",
        margin: "0 auto",
        "& .slick-slide": {
          transition: "transform 0.5s ease, opacity 0.5s ease",
          opacity: 0.4, // Stronger fade for non-centered slides
          transform: "scale(0.8)", // Smaller size for non-centered slides
        },
        "& .slick-center": {
          opacity: 1,
          transform: "scale(1)", // Default size for centered slide
        },
        "& .slick-list": {
          padding: "0 !important", // Remove padding to bring side images closer
          overflow: "visible", // Prevent cutoff
        },
        "& .slick-prev": {
          left: "10px", // Move previous button closer to the left image
          zIndex: 1,
        },
        "& .slick-next": {
          right: "10px", // Move next button closer to the right image
          zIndex: 1,
        },
        "& .slick-dots": {
          bottom: -40,
        },
        "& .slick-dots li button:before": {
          color: theme.palette.primary.main,
        },
      }}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} sx={{ p: 2 }}>
            <Box
              component="img"
              src={image.src}
              alt={image.alt}
              sx={{
                width: "100%",
                height: 400, // Increase image height
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: theme.shadows[4],
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageGallery;