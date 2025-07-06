import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import StarryBackground from "../components/StarryBackground";
import StyledBulletPoints from "../components/StyledBulletPoints";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PsychologyIcon from '@mui/icons-material/Psychology';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { SectionTitle, SubsectionTitle, BodyLarge } from "../components/Typography";

const Sponsors: React.FC = () => {
  const theme = useTheme();

  const projectPoints = {
    title: "Our Project Portfolio Includes:",
    points: [
      "Advanced machine learning solutions for real-world business challenges",
      "Cutting-edge computer vision and natural language processing applications",
      "Innovative AI algorithms optimized for production environments"
    ]
  };

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

      {/* Project Achievements Section */}
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
            backgroundColor: "transparent",
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
            <SectionTitle>
              Our Impact in AI Innovation
            </SectionTitle>
            <BodyLarge>
              WAT.ai has successfully completed over 20 cutting-edge AI projects,
              collaborating with industry leaders and academic partners.
            </BodyLarge>
            <StyledBulletPoints {...projectPoints} />
          </Box>
        </Box>
      </motion.div>

      {/* Projects Showcase Section */}
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
            backgroundColor: `${theme.palette.background.paper}DD`,
            borderBottom: `1px solid ${theme.palette.divider}`,
            minHeight: "80vh",
          }}
        >
          <Box
            sx={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: 6,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography 
                variant="h3" 
                sx={{ 
                  mb: 4,
                  color: theme.palette.primary.contrastText,
                }}
              >
                Explore Our Projects
              </Typography>
              <StyledBulletPoints 
                title="What Sets Our Projects Apart:"
                points={[
                  "Student-driven innovation with professional-grade results",
                  "Comprehensive documentation and deployment strategies",
                  "Ongoing support and maintenance capabilities"
                ]}
              />
              <Box
                component={RouterLink}
                to="/projects"
                sx={{
                  display: "inline-block",
                  textAlign: "center",
                  p: 2,
                  px: 4,
                  mt: 6,
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
                View Our Projects
              </Box>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 4,
                alignItems: "center",
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <AutoAwesomeIcon sx={{ fontSize: 60, color: theme.palette.primary.main, mb: 2 }} />
                <Typography variant="h6" color="primary">Innovation</Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <PsychologyIcon sx={{ fontSize: 60, color: theme.palette.primary.main, mb: 2 }} />
                <Typography variant="h6" color="primary">Intelligence</Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <RocketLaunchIcon sx={{ fontSize: 60, color: theme.palette.primary.main, mb: 2 }} />
                <Typography variant="h6" color="primary">Impact</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </motion.div>

      {/* Contact Section */}
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
            backgroundColor: "transparent",
            minHeight: "80vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: "1200px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <Typography 
              variant="h3" 
              sx={{ 
                mb: 4,
                color: theme.palette.primary.main,
              }}
            >
              Partner With Us
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: "1.1rem",
                maxWidth: "800px",
                margin: "0 auto",
                color: theme.palette.text.primary,
              }}
            >
              Ready to innovate together? We're always looking for new partnerships
              and exciting projects. Our team of talented students brings fresh
              perspectives and cutting-edge technical skills to every collaboration.
              Contact us to discuss how we can help bring your AI vision to life.
            </Typography>
            <Box
              component={RouterLink}
              to="/contact"
              sx={{
                display: "inline-block",
                textAlign: "center",
                p: 2,
                px: 4,
                mt: 6,
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
              Get in Touch
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Sponsors;