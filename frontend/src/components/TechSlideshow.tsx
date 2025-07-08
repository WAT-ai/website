// Animated slideshow of logos. Edit background image or animation speed.
// Used for partner/tech sections. To add logos, update the sprite image.
import React from "react";
import Box from "@mui/material/Box";
import { keyframes, styled } from "@mui/system";

/**
 * Continuous horizontal slideshow of technology/company logos
 * Creates infinite scrolling effect with fade edges for seamless appearance
 */

// Animation keyframes for infinite horizontal movement
const moveSlideshow = keyframes`
  100% {
    transform: translateX(-49.23333%); /* Move half the sprite width for seamless loop */
  }
`;

// Moving background sprite container
const Mover = styled(Box)(({ theme }) => ({
  marginTop: "-50px",
  height: "100%",
  width: "3184px",
  backgroundImage: `url(${require("../assets/slider3.png")})`,
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 0,
  transform: "translate3d(0, 0, 0)",
  animation: `${moveSlideshow} 22s linear infinite`,
}));

// Container with fade edge masks for seamless scrolling appearance
const Slideshow = styled(Box)(({ theme }) => ({
  height: "200px",
  width: "100%",
  position: "relative",
  overflow: "hidden",
  // Create fade masks on both edges to hide the loop transition
  "&::before, &::after": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "15%", // Fade zone width
    zIndex: 1,
  },
  "&::before": {
    left: 0,
    background: "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))", // Fading from black to transparent
  },
  "&::after": {
    right: 0,
    background: "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))", // Fading from black to transparent
  },
}));

const TechSlideshow: React.FC = () => (
  <Slideshow>
    <Mover />
  </Slideshow>
);

export default TechSlideshow;
