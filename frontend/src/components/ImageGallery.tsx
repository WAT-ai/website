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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        "& .slick-slide": {
          px: 2,
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
          <Box key={index} sx={{ p: 1 }}>
            <Box
              component="img"
              src={image.src}
              alt={image.alt}
              sx={{
                width: "100%",
                height: 250,
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