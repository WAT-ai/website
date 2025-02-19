import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import { keyframes } from "@mui/system";
import StarryBackground from "../components/StarryBackground";
import StyledBulletPoints from "../components/StyledBulletPoints";
import ImageGallery from "../components/ImageGallery";

// Enhanced star animation with multiple layers and brightness variations
const moveStars = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

const Students: React.FC = () => {
  const theme = useTheme();

  const coreMemberPoints = {
    title: "By becoming a Core Member, you will:",
    points: [
      "Lead cutting-edge AI projects and collaborate with industry partners",
      "Gain hands-on experience with advanced machine learning technologies",
      "Build a strong professional network in the AI community"
    ]
  };

  const tpmPoints = {
    title: "As a Technical Project Manager, you will:",
    points: [
      "Develop leadership skills managing cross-functional AI teams",
      "Bridge technical development with project management expertise",
      "Drive innovation and project success in AI initiatives"
    ]
  };

  const galleryImages = [
    { src: "/gallery/event1.jpg", alt: "WAT.ai Team Event" },
    { src: "/gallery/event2.jpg", alt: "AI Workshop" },
    { src: "/gallery/event3.jpg", alt: "Hackathon" },
    // Add more images as needed
  ];

  return (
    <Box 
      sx={{
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <StarryBackground />

      {/* Why Join Section at Top */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Box
          sx={{
            py: 12,
            px: 3,
            position: "relative",
            background: `linear-gradient(135deg, 
              ${theme.palette.background.paper}, 
              ${theme.customColors.transparentPrimary})`,
            borderBottom: `1px solid ${theme.palette.divider}`,
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: "1000px",
              margin: "0 auto",
              textAlign: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Typography 
              variant="h2" 
              sx={{ 
                mb: 4,
                color: theme.palette.primary.main,
              }}
            >
              Why Join WAT.ai?
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: "1.3rem",
                lineHeight: 1.8,
                color: theme.palette.text.primary,
              }}
            >
              At WAT.ai, you'll have unprecedented access to cutting-edge AI projects and research
              opportunities. Our strong connections with faculty members often lead to research
              assistant positions for our members. Work alongside industry partners, develop
              practical skills, and be part of groundbreaking AI initiatives.
            </Typography>
          </Box>
        </Box>
      </motion.div>

      {/* Core Member Section */}
      <motion.div>
        <Box
          sx={{
            py: 12,
            px: 3,
            position: "relative",
            background: `linear-gradient(135deg, 
              ${theme.palette.primary.main}20, 
              ${theme.palette.background.default}CC)`,
            borderBottom: `1px solid ${theme.palette.divider}`,
            minHeight: "80vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: "1200px",
              margin: "0 auto",
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "flex-start",
              gap: 6,
            }}
          >
            <Box sx={{ 
              flex: 1,
              textAlign: "left",
            }}>
              <Typography variant="h3" sx={{ mb: 4 }}>
                Core Member
              </Typography>
              <StyledBulletPoints {...coreMemberPoints} align="left" />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" }
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", md: "flex-start" } }}>
                  <Box
                    component={RouterLink}
                    to="/apply/core"
                    sx={{
                      display: "inline-block",
                      textAlign: "center",
                      p: 2,
                      px: 4,
                      mt: 8,
                      backgroundColor: "transparent",
                      color: theme.palette.primary.main,
                      borderRadius: 2,
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      border: `2px solid ${theme.palette.primary.main}`,
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: `0 0 20px ${theme.palette.primary.main}40`,
                        backgroundColor: `${theme.palette.primary.main}10`,
                      },
                    }}
                  >
                    Apply as Core Member
                  </Box>
                  <Typography
                    sx={{
                      color: "red",
                      fontSize: "0.8rem",
                      mt: 1,
                      textAlign: "center",
                    }}
                  >
                    (Currently Closed)
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              component="img"
              src="/default-core.jpg"
              alt="Core Member"
              sx={{
                width: { xs: "100%", md: "45%" },
                borderRadius: 2,
                boxShadow: theme.shadows[4],
              }}
            />
          </Box>
        </Box>
      </motion.div>

      {/* TPM Section */}
      <motion.div>
        <Box
          sx={{
            py: 12,
            px: 3,
            position: "relative",
            background: `linear-gradient(to bottom, 
              ${theme.palette.background.default}, 
              ${theme.palette.primary.main}20)`,
            borderBottom: `1px solid ${theme.palette.divider}`,
            minHeight: "80vh",
          }}
        >
          <Box
            sx={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              flexDirection: { xs: "column", md: "row-reverse" },
              alignItems: "center",
              gap: 6,
            }}
          >
            <Box 
              sx={{ 
                flex: 1,
                textAlign: { xs: "left", md: "right" }
              }}
            >
              <Typography 
                variant="h3" 
                sx={{ 
                  mb: 4,
                  color: theme.palette.primary.main,
                }}
              >
                Technical Project Manager
              </Typography>
              <StyledBulletPoints {...tpmPoints} align="right" />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "flex-start", md: "flex-end" }
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", md: "flex-end" } }}>
                  <Box
                    component={RouterLink}
                    to="/apply/tpm"
                    sx={{
                      display: "inline-block",
                      textAlign: "center",
                      p: 2,
                      px: 4,
                      mt: 8,
                      backgroundColor: "transparent",
                      color: theme.palette.primary.main,
                      borderRadius: 2,
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      border: `2px solid ${theme.palette.primary.main}`,
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: `0 0 20px ${theme.palette.primary.main}40`,
                        backgroundColor: `${theme.palette.primary.main}10`,
                      },
                    }}
                  >
                    Apply as TPM
                  </Box>
                  <Typography
                    sx={{
                      color: "red",
                      fontSize: "0.8rem",
                      mt: 1,
                      textAlign: "center",
                    }}
                  >
                    (Currently Closed)
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              component="img"
              src="/default-tpm.jpg"
              alt="Technical Project Manager"
              sx={{
                width: { xs: "100%", md: "45%" },
                borderRadius: 2,
                boxShadow: theme.shadows[4],
              }}
            />
          </Box>
        </Box>
      </motion.div>

      {/* Gallery Section - Gold to Black */}
      <motion.div>
        <Box
          sx={{
            py: 12,
            px: 3,
            position: "relative",
            background: `linear-gradient(135deg, 
              ${theme.palette.primary.main}20, 
              ${theme.palette.background.default})`,
            minHeight: "60vh",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 6,
              color: theme.palette.primary.main,
            }}
          >
            Our Community
          </Typography>
          <ImageGallery images={galleryImages} />
        </Box>
      </motion.div>
    </Box>
  );
};

export default Students; 