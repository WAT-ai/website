import React, { memo } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ReactComponent as Logo } from "../assets/wat_ai_logo.svg";
import TechSlideshow from "../components/TechSlideshow";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

// Memoized component to prevent unnecessary re-renders
const HomePage: React.FC = memo(() => {
  const theme = useTheme();

  return (
    <Box component="div">
      <Box component="main">
        <Box
          component="section"
          sx={{
            textAlign: "center",
            py: { xs: 8, md: 10 },
            minHeight: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.customColors.transparentSecondary})`,
            color: theme.palette.primary.contrastText,
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
            zIndex: -2,
          }}
        >
          <Logo
            style={{
              display: "block",
              margin: "0 auto",
              width: "20%",
              minWidth: "250px",
              filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.2))",
            }}
          />
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mt: 4,
              letterSpacing: "2px",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            Fostering the Future of AI at Waterloo
          </Typography>
          <Typography sx={{ mt: 4 }}>
            <Box
              component={RouterLink}
              to="/students"
              sx={{
                color: theme.palette.primary.contrastText,
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "18px",
                padding: "10px 20px",
                backgroundColor: theme.palette.secondary.main,
                borderRadius: theme.shape.borderRadius,
                transition: theme.transitions.create(["background-color"], {
                  duration: theme.transitions.duration.short,
                }),
                "&:hover": {
                  backgroundColor: theme.palette.primary.light,
                },
              }}
            >
              Get Involved <b>❱</b>
            </Box>
          </Typography>
        </Box>

        {/* Section 2: About Us */}
        <Box sx={{ textAlign: "center", px: { xs: 3, md: 10 }, mb: 4, mt: 5 }}>
          <Typography
            variant="h4"
            sx={{ mb: 2, color: theme.palette.text.secondary }}
          >
            About Us
          </Typography>
        </Box>
        <Box
          component="section"
          sx={{
            pt: 3,
            pb: 5,
            px: { xs: 3, md: 10 },
            textAlign: "left",
            border: `2px solid ${theme.palette.primary.main}`,
            borderRadius: theme.shape.borderRadius,
            marginX: "auto",
            maxWidth: "70vw",
            mb: 10,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[3],
            color: theme.palette.text.primary,
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
                  color: theme.palette.secondary.contrastText,
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
                  color: theme.palette.secondary.contrastText,
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
                  color: theme.palette.secondary.contrastText,
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
            mt: 5,
            backgroundColor: theme.palette.background.default,
            borderTop: `2px solid ${theme.palette.primary.main}`,
          }}
        >
          <Typography
            variant="h4"
            sx={{ mb: 2, color: theme.palette.text.secondary }}
          >
            Our Partners
          </Typography>
          <TechSlideshow />
        </Box>
      </Box>
    </Box>
  );
});

export default HomePage;
