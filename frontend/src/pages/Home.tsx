import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ReactComponent as Logo } from "../assets/wat_ai_logo.svg";
import { useTheme } from "@mui/material/styles";
import TechSlideshow from "../components/TechSlideshow";
import { Link as RouterLink } from "react-router-dom";

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
            <Box
              component={RouterLink}
              to="/apply"
              sx={{
                color: theme.palette.primary.main,
                textDecoration: "none",
                fontWeight: "bold",
                "&:hover": {
                  color: "#fff", // Change text color to white on hover
                },
              }}
            >
              Get Involved <b>❱</b>
            </Box>
          </Typography>
        </Box>

        {/* Section 2: About Us */}
        <Box sx={{ textAlign: "center", px: { xs: 3, md: 10 }, mb: 4, mt: 5 }}>
          <Typography variant="h4" sx={{ mb: 2, color: "grey" }}>
            About Us
          </Typography>
        </Box>
        <Box
          component="section"
          sx={{
            pt: 3,
            pb: 5,
            px: { xs: 3, md: 10 }, // Responsive padding for left and right spacing
            textAlign: "left",
            border: `2px solid ${theme.palette.primary.main}`, // Yellow border
            borderRadius: "20px", // Rounded corners
            marginX: "auto",
            maxWidth: "70vw", // Max width to control the content width
            mb: 10, // Margin bottom to add space between sections
            backgroundColor: "#8c8c8c2d",
          }}
        >
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
          <Typography variant="body2">
            WAT.ai is a student-run Artificial Intelligence (AI) Organization at
            the University of Waterloo and the undergraduate student body of the{" "}
            <Box
              component="a"
              href="https://uwaterloo.ca/artificial-intelligence-institute/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: theme.palette.primary.main,
                textDecoration: "none",
                "&:hover": {
                  color: "#fff", // Change text color to white on hover
                },
              }}
            >
              Waterloo AI Institute
            </Box>{" "}
            and member of the{" "}
            <Box
              component="a"
              href="https://uwaterloo.ca/sedra-student-design-centre/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: theme.palette.primary.main,
                textDecoration: "none",
                "&:hover": {
                  color: "#fff", // Change text color to white on hover
                },
              }}
            >
              Sedra Student Design Centre (SSDC)
            </Box>
            . Our goal is to establish an environment to enable the continued
            growth of AI talent and suitable access to opportunities within the
            Waterloo community. We provide opportunities for undergraduate and
            graduate students to engage in impactful projects through
            collaboration with companies and internal research.
          </Typography>
          <Typography sx={{ mt: 4 }}>
            <Box
              component={RouterLink}
              to="/team"
              sx={{
                color: theme.palette.primary.main,
                textDecoration: "none",
                fontWeight: "bold",
                "&:hover": {
                  color: "#fff", // Change text color to white on hover
                },
              }}
            >
              Meet The Team <b>❱</b>
            </Box>
          </Typography>
        </Box>

        {/* Section 3: Our Partners */}
        <Box
          component="section"
          sx={{
            textAlign: "center",
            py: 5,
            mt: 5, // Add margin-top to create space above Section 3
          }}
        >
          <Typography variant="h4" sx={{ mb: 2, color: "grey" }}>
            Our Partners
          </Typography>
          <TechSlideshow />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
