import React from "react";
import Box from "@mui/material/Box";
import { keyframes, styled } from "@mui/system";

const moveSlideshow = keyframes`
  100% {
    transform: translateX(-49.23333%);
  }
`;

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

const Slideshow = styled(Box)(({ theme }) => ({
  height: "200px",
  width: "100%",
  position: "relative",
  overflow: "hidden",
}));

const TechSlideshow: React.FC = () => (
  <Slideshow>
    <Mover />
  </Slideshow>
);

export default TechSlideshow;
