// ImageGallery.tsx - Responsive image gallery with navigation
// ----------------------------------------------------------
// This component displays a gallery of images with arrows, dots, and smooth transitions.
// Edit this file to customize gallery layout, navigation, or image handling.

// Image gallery with slider. Pass images array as props.
// Edit settings for slidesToShow, autoplay, or style.
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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    centerMode: false,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          centerMode: false,
          centerPadding: "0",
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          centerPadding: "0",
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: "0",
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20px",
        }
      }
    ]
  };

  return (
    <Box
      sx={{
        width: "100%",
        margin: "0 auto",
        maxWidth: "none",
        px: 0,
        "& .slick-slide": {
          transition: "transform 0.5s ease, opacity 0.5s ease",
          opacity: 1,
          transform: "scale(1)",
          "&:focus": {
            outline: "none",
          },
        },
        "& .slick-center": {
          opacity: 1,
          transform: "scale(1)",
        },
        "& .slick-list": {
          padding: { xs: "0 20px !important", sm: "0 30px !important", md: "0 40px !important", lg: "0 50px !important" },
          overflow: "visible",
          margin: "0",
        },
        "& .slick-track": {
          display: "flex",
          alignItems: "center",
        },
        "& .slick-prev, & .slick-next": {
          width: { xs: 28, sm: 32, md: 36 },
          height: { xs: 28, sm: 32, md: 36 },
          zIndex: 2,
          borderRadius: { xs: "8px", sm: "10px", md: "12px" },
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
          border: `1px solid ${theme.palette.grey[200]}`,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
          "&:before": {
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            color: theme.palette.grey[700],
            opacity: 1,
            fontWeight: "bold",
          },
          "&:hover": {
            background: "rgba(255, 255, 255, 1)",
            boxShadow: "0 6px 25px rgba(0, 0, 0, 0.15)",
            "&:before": {
              color: theme.palette.primary.main,
            },
          },
        },
        "& .slick-prev": {
          left: { xs: -12, sm: -20, md: -25, lg: -30 },
        },
        "& .slick-next": {
          right: { xs: -12, sm: -20, md: -25, lg: -30 },
        },
        "& .slick-dots": {
          bottom: { xs: -40, sm: -45, md: -50 },
          display: "flex !important",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: "6px", sm: "8px", md: "10px" },
          "& li": {
            width: "auto",
            height: "auto",
            margin: "0",
          },
          "& li button": {
            width: { xs: "5px", sm: "6px", md: "7px" },
            height: { xs: "5px", sm: "6px", md: "7px" },
            padding: 0,
            border: "none",
            borderRadius: "50%",
            background: theme.palette.grey[300],
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            opacity: 0.4,
            "&:before": {
              display: "none",
            },
            "&:hover": {
              background: theme.palette.grey[400],
              opacity: 0.6,
            },
          },
          "& li.slick-active button": {
            background: theme.palette.primary.main,
            transform: "scale(1.2)",
            opacity: 0.8,
            boxShadow: `0 0 0 2px ${theme.palette.primary.main}10`,
          },
        },
      }}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} sx={{ 
            p: { xs: 0.5, sm: 1, md: 1.5, lg: 2 },
            "&:focus": {
              outline: "none",
            },
          }}>
            <Box
              component="img"
              src={image.src}
              alt={image.alt}
              sx={{
                width: "100%",
                height: { xs: 250, sm: 280, md: 320, lg: 380, xl: 420 },
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: { xs: 2, sm: 2.5, md: 3 },
                boxShadow: theme.shadows[8],
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: theme.shadows[16],
                },
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageGallery;