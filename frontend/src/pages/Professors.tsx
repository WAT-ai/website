import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import StarryBackground from "../components/StarryBackground";
import StyledBulletPoints from "../components/StyledBulletPoints";
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

const Professors: React.FC = () => {
  const theme = useTheme();

  const teamCollabPoints = {
    title: "Our Student Teams Offer:",
    points: [
      "Dedicated project teams with diverse technical expertise in AI/ML",
      "Regular progress updates and professional documentation",
      "Implementation of cutting-edge AI technologies in your research"
    ]
  };

  const researchAssistantPoints = {
    title: "Our Research Assistants Provide:",
    points: [
      "Strong foundation in machine learning and data analysis",
      "Commitment to academic excellence and research integrity",
      "Ability to contribute to publications and conference papers"
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

      {/* Student Teams Section */}
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
            minHeight: "80vh",
            display: "flex",
            alignItems: "center",
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
              position: "relative",
              zIndex: 1,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography 
                variant="h2" 
                sx={{ 
                  mb: 4,
                  color: theme.palette.primary.main,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <GroupsIcon sx={{ fontSize: 40 }} />
                Collaborate with Student Teams
              </Typography>
              <StyledBulletPoints {...teamCollabPoints} />
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
                <SchoolIcon sx={{ fontSize: 60, color: theme.palette.primary.main, mb: 2 }} />
                <Typography variant="h6" color="primary">Academic Excellence</Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <AutoGraphIcon sx={{ fontSize: 60, color: theme.palette.primary.main, mb: 2 }} />
                <Typography variant="h6" color="primary">Research Impact</Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <PrecisionManufacturingIcon sx={{ fontSize: 60, color: theme.palette.primary.main, mb: 2 }} />
                <Typography variant="h6" color="primary">Technical Innovation</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </motion.div>

      {/* Research Assistant Section */}
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
              flexDirection: { xs: "column", md: "row-reverse" },
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
                  textAlign: { xs: "left", md: "right" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "flex-start", md: "flex-end" },
                  gap: 2,
                }}
              >
                Find Research Assistants
                <SchoolIcon sx={{ fontSize: 35 }} />
              </Typography>
              <StyledBulletPoints {...researchAssistantPoints} align="right" />
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 4,
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              {/* Academic Icons Grid */}
              <Box sx={{ textAlign: "center", p: 3 }}>
                <Typography 
                  variant="h4" 
                  color="primary.contrastText"
                  sx={{ 
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    mb: 1 
                  }}
                >
                  20+
                </Typography>
                <Typography variant="body1" color="primary.contrastText">
                  Active Members
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center", p: 3 }}>
                <Typography 
                  variant="h4" 
                  color="primary.contrastText"
                  sx={{ 
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    mb: 1 
                  }}
                >
                  15+
                </Typography>
                <Typography variant="body1" color="primary.contrastText">
                  Research Projects
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center", p: 3 }}>
                <Typography 
                  variant="h4" 
                  color="primary.contrastText"
                  sx={{ 
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    mb: 1 
                  }}
                >
                  5+
                </Typography>
                <Typography variant="body1" color="primary.contrastText">
                  Publications
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center", p: 3 }}>
                <Typography 
                  variant="h4" 
                  color="primary.contrastText"
                  sx={{ 
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    mb: 1 
                  }}
                >
                  3+
                </Typography>
                <Typography variant="body1" color="primary.contrastText">
                  Departments
                </Typography>
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
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: "800px",
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
              Let's Collaborate
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: "1.1rem",
                mb: 6,
                color: theme.palette.text.primary,
              }}
            >
              Ready to enhance your research with our talented students? We're here
              to help connect you with the right team or individuals for your needs.
            </Typography>
            <Box
              component={RouterLink}
              to="/contact"
              sx={{
                display: "inline-block",
                textAlign: "center",
                p: 2,
                px: 4,
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

export default Professors;