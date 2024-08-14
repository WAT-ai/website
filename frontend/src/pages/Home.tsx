import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ReactComponent as Logo } from "../assets/wat_ai_logo.svg";
import { useTheme } from "@mui/material/styles";

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
              width: "22%",
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
          <Typography variant="body1" sx={{ textAlign: "center", mt: -1.5 }}>
            <a
              href="https://forms.gle/7bxf6ijXSGTZ8gyu9"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: theme.palette.primary.main }}
            >
              Get Involved <b style={{ color: "#fff" }}>❱</b>
            </a>
          </Typography>
        </Box>

        {/* Section 2: About Us */}
        <Box
          component="section"
          sx={{
            py: 5,
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
              style={{ fontSize: "13px" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Waterloo AI Institute
            </a>{" "}
            and member of the{" "}
            <a
              href="https://uwaterloo.ca/sedra-student-design-centre/"
              style={{ fontSize: "13px" }}
              target="_blank"
              rel="noopener noreferrer"
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
            <a
              href="team.html"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Meet The Team <b style={{ color: "#fff" }}>❱</b>
            </a>
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
          <Box className="tech-slideshow">
            <Box className="mover-1"></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
