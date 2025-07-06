import React, { memo } from "react";
import Box from "@mui/material/Box";
import { ReactComponent as Logo } from "../assets/wat_ai_logo.svg";
import TechSlideshow from "../components/TechSlideshow";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { HeroTitle, SectionTitle, SubsectionTitle, BodyLarge, BodyText } from "../components/Typography";

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
            py: 0,
            px: { xs: 2, sm: 3, md: 4 },
            minHeight: "100vh",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: theme.palette.primary.contrastText,
            clipPath: { 
              xs: "polygon(0 0, 100% 0, 100% 92%, 0 100%)", 
              md: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" 
            },
            zIndex: -2,
            // Pull content up to center it better
            marginTop: { xs: "-60px", md: "-80px" },
          }}
        >
          <Logo
            style={{
              display: "block",
              margin: "0 auto",
              width: "min(80vw, 300px)",
              maxWidth: "300px",
              minWidth: "200px",
              height: "auto",
              filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.2))",
            }}
          />
          <Box sx={{ mt: { xs: 3, md: 4 }, px: { xs: 2, sm: 3 } }}>
            <HeroTitle sx={{ 
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem", lg: "3.5rem" },
              lineHeight: { xs: 1.2, md: 1.1 },
              px: { xs: 1, sm: 2 }
            }}>
              Fostering the Future of AI at Waterloo
            </HeroTitle>
          </Box>
          <Box sx={{ mt: { xs: 3, md: 4 }, px: { xs: 2, sm: 3 } }}>
            <Box
              component={RouterLink}
              to="/students"
              sx={{
                display: "inline-block",
                color: theme.palette.primary.contrastText,
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: { xs: "16px", sm: "17px", md: "18px" },
                padding: { xs: "8px 16px", sm: "10px 20px", md: "12px 24px" },
                backgroundColor: theme.palette.secondary.main,
                borderRadius: theme.shape.borderRadius,
                border: `2px solid ${theme.palette.primary.main}`,
                transition: theme.transitions.create(["background-color", "border-color", "transform"], {
                  duration: theme.transitions.duration.short,
                }),
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                  borderColor: theme.palette.primary.contrastText,
                  color: theme.palette.secondary.main,
                  transform: "translateY(-2px)",
                },
                "&:active": {
                  transform: "translateY(0px)",
                },
              }}
            >
              Get Involved <Box component="span" sx={{ ml: 0.5 }}>❱</Box>
            </Box>
          </Box>
        </Box>

        {/* Section 2: About Us */}
        <Box 
          component="section"
          sx={{ 
            py: { xs: 6, sm: 7, md: 8 }, 
            px: { xs: 2, sm: 3, md: 4, lg: 6 }, 
            backgroundColor: theme.palette.background.default,
          }}
        >
          <Box sx={{ 
            maxWidth: { xs: "100%", sm: "90%", md: "1200px" }, 
            margin: "0 auto",
            width: "100%"
          }}>
            <SectionTitle sx={{ 
              textAlign: "center", 
              mb: { xs: 4, sm: 5, md: 6 },
              fontSize: { xs: "2rem", sm: "2.2rem", md: "2.75rem" },
              px: { xs: 1, sm: 2 }
            }}>
              About Us
            </SectionTitle>
            
            <Box
              sx={{
                backgroundColor: theme.palette.background.paper,
                borderRadius: { xs: "12px", md: "16px" },
                padding: { xs: 3, sm: 4, md: 5, lg: 6 },
                border: `2px solid ${theme.palette.primary.main}`,
                boxShadow: `0 8px 32px rgba(255, 206, 26, 0.1)`,
                position: "relative",
                overflow: "hidden",
                width: "100%",
                mx: "auto",
              }}
            >
              <SubsectionTitle sx={{ 
                textAlign: "center", 
                mb: { xs: 3, md: 4 },
                color: theme.palette.text.primary,
                fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.8rem", lg: "2rem" },
                lineHeight: { xs: 1.3, md: 1.2 },
                px: { xs: 1, sm: 2 }
              }}>
                Fostering The Future Of AI Talent At The University of Waterloo
              </SubsectionTitle>
              
              <BodyLarge sx={{ 
                textAlign: "center", 
                mb: { xs: 3, md: 4 }, 
                maxWidth: { xs: "100%", md: "800px" }, 
                margin: { xs: "0 auto 1.5rem auto", md: "0 auto 2rem auto" },
                color: theme.palette.text.primary,
                fontSize: { xs: "1rem", sm: "1.05rem", md: "1.125rem" },
                lineHeight: { xs: 1.6, md: 1.7 },
                px: { xs: 0, sm: 1 }
              }}>
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
                    fontWeight: 500,
                    borderBottom: `1px solid ${theme.palette.primary.main}40`,
                    transition: "all 0.2s ease",
                    wordBreak: { xs: "break-word", sm: "normal" },
                    "&:hover": {
                      color: theme.palette.primary.light || theme.palette.primary.main,
                      borderBottomColor: theme.palette.primary.main,
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
                    fontWeight: 500,
                    borderBottom: `1px solid ${theme.palette.primary.main}40`,
                    transition: "all 0.2s ease",
                    wordBreak: { xs: "break-word", sm: "normal" },
                    "&:hover": {
                      color: theme.palette.primary.light || theme.palette.primary.main,
                      borderBottomColor: theme.palette.primary.main,
                    },
                  }}
                >
                  Sedra Student Design Centre (SSDC)
                </Box>.
              </BodyLarge>

              <BodyText sx={{ 
                textAlign: "center", 
                mb: { xs: 4, md: 5 }, 
                maxWidth: { xs: "100%", md: "700px" }, 
                margin: { xs: "0 auto 2rem auto", md: "0 auto 3rem auto" },
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                color: theme.palette.text.secondary,
                lineHeight: { xs: 1.6, md: 1.7 },
                px: { xs: 0, sm: 1 }
              }}>
                Our goal is to establish an environment to enable the continued
                growth of AI talent and suitable access to opportunities within the
                Waterloo community. We provide opportunities for undergraduate and
                graduate students to engage in impactful projects through
                collaboration with companies and internal research.
              </BodyText>

              <Box sx={{ 
                textAlign: "center",
                px: { xs: 1, sm: 2 }
              }}>
                <Box
                  component={RouterLink}
                  to="/team"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: { xs: 0.5, md: 1 },
                    color: theme.palette.primary.main,
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                    padding: { xs: "10px 18px", sm: "11px 20px", md: "12px 24px" },
                    border: `2px solid ${theme.palette.primary.main}`,
                    borderRadius: { xs: "6px", md: "8px" },
                    transition: "all 0.3s ease",
                    minWidth: "fit-content",
                    "&:hover": {
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.secondary.main,
                      transform: "translateY(-2px)",
                      boxShadow: `0 4px 16px ${theme.palette.primary.main}40`,
                    },
                    "&:active": {
                      transform: "translateY(0px)",
                    },
                  }}
                >
                  Meet The Team
                  <Box component="span" sx={{ fontSize: { xs: "1.1rem", md: "1.2rem" } }}>❱</Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Section 3: Our Partners */}
        <Box
          component="section"
          sx={{
            textAlign: "center",
            py: { xs: 5, sm: 6, md: 8 },
            px: { xs: 2, sm: 3, md: 4 },
            backgroundColor: theme.palette.background.default,
            borderTop: `2px solid ${theme.palette.primary.main}`,
          }}
        >
          <Box sx={{ 
            maxWidth: { xs: "100%", md: "1200px" }, 
            margin: "0 auto",
            width: "100%"
          }}>
            <SectionTitle sx={{ 
              color: theme.palette.text.secondary,
              mb: { xs: 3, md: 4 },
              fontSize: { xs: "2rem", sm: "2.2rem", md: "2.75rem" },
              px: { xs: 1, sm: 2 }
            }}>
              Our Partners
            </SectionTitle>
            <Box sx={{ 
              width: "100%",
              overflow: "hidden",
              px: { xs: 0, sm: 1, md: 2 }
            }}>
              <TechSlideshow />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
});

export default HomePage;
