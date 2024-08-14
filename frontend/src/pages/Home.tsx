import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ReactComponent as Logo } from "../assets/wat_ai_logo.svg";
import { useTheme } from "@mui/material/styles";
import { keyframes } from "@mui/system";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

const moveSlideshow = keyframes`
  100% {
    transform: translateX(-49.23333%);
  }
`;

const TechSlideshow = styled(Box)(({ theme }) => ({
  height: "200px",
  width: "100%",
  position: "relative",
  overflow: "hidden",
}));

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

const HomePage: React.FC = () => {
  const theme = useTheme(); // Access the MUI theme

  return (
    <Box component="div">
      {/* Main Content */}
      <Box component="main">
        {/* Section 1 */}
        <Box
          component="section"
          sx={{
            textAlign: "center",
            py: 5,
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Logo
            style={{
              display: "block",
              margin: "0 auto",
              width: "18%",
              minWidth: "300px",
            }}
          />
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              fontSize: "17px",
              mt: -2,
              fontWeight: 200,
              letterSpacing: "2px",
            }}
          >
            Fostering the future of artificial intelligence at Waterloo
          </Typography>
          <Typography sx={{ mt: 1 }}>
            <RouterLink
              to="/apply"
              style={{
                color: theme.palette.primary.main,
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Get Involved <b>❱</b>
            </RouterLink>
          </Typography>
        </Box>

        {/* Section 2: About Us */}
        <Box
          component="section"
          sx={{
            pt: 5,
            pb: 20,
            px: 4,
            backgroundColor: "transparent",
            textAlign: "left",
          }}
        >
          <Typography variant="h4" sx={{ mb: 2, color: "grey" }}>
            About Us
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              lineHeight: "40px",
              mb: 2,
            }}
          >
            Fostering The Future Of AI Talent <br />
            At The University of Waterloo
          </Typography>
          <Typography variant="body1">
            WAT.ai is a student-run Artificial Intelligence (AI) Organization at
            the University of Waterloo and the undergraduate student body of the{" "}
            <a
              href="https://uwaterloo.ca/artificial-intelligence-institute/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: theme.palette.primary.main }}
            >
              Waterloo AI Institute
            </a>{" "}
            and member of the{" "}
            <a
              href="https://uwaterloo.ca/sedra-student-design-centre/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: theme.palette.primary.main }}
            >
              Sedra Student Design Centre (SSDC)
            </a>
            . Our goal is to establish an environment to enable the continued
            growth of AI talent and suitable access to opportunities within the
            Waterloo community. We provide opportunities for undergraduate and
            graduate students to engage in impactful projects through
            collaboration with companies and internal research.
          </Typography>
          <Typography sx={{ mt: 4 }}>
            <RouterLink
              to="/team"
              style={{
                color: theme.palette.primary.main,
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Meet The Team <b>❱</b>
            </RouterLink>
          </Typography>
        </Box>

        {/* Section 3: Our Partners */}
        <Box
          component="section"
          sx={{
            mt: -12,
            textAlign: "center",
            py: 5,
          }}
        >
          <Typography variant="h4" sx={{ mb: 2, color: "grey" }}>
            Our Partners
          </Typography>
          <TechSlideshow>
            <Mover className="mover-1"></Mover>
          </TechSlideshow>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
