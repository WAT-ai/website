/**
 * TechSlideshow - Infinite scrolling logo slideshow
 * Displays technology/company logos with seamless continuous animation
 */
import React from "react";
import Box from "@mui/material/Box";
import { keyframes, styled } from "@mui/system";

// Animation keyframes for infinite horizontal movement
const moveSlideshow = keyframes`
  100% {
    transform: translateX(-49.23333%);
  }
`;

// Moving background sprite container
const Mover = styled(Box)(({ theme }) => ({
  marginTop: "-50px",
  height: "100%",
  width: "3184px",
  backgroundImage: `url(${require("../assets/slider3_opt.png")})`,
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 0,
  transform: "translate3d(0, 0, 0)",
  animation: `${moveSlideshow} 22s linear infinite`,
}));

// Container with fade edge masks for seamless scrolling
const Slideshow = styled(Box)(({ theme }) => ({
  height: "200px",
  width: "100%",
  position: "relative",
  overflow: "hidden",
  "&::before, &::after": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "15%",
    zIndex: 1,
  },
  "&::before": {
    left: 0,
    background: "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))",
  },
  "&::after": {
    right: 0,
    background: "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))",
  },
}));

const TechSlideshow: React.FC = () => (
  <Slideshow>
    <Mover />
  </Slideshow>
);

export default TechSlideshow;
