import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Collapse,
  useTheme,
  Fab,
  Zoom,
  Stack,
  Divider,
  Paper,
} from "@mui/material";
import {
  ExpandMore,
  ExpandLess,
  School,
  TrendingUp,
  Science,
} from "@mui/icons-material";
import { NewProjectData, PastProjects } from "../data/newProjectData";
import ModernProjectCard from "../components/ModernProjectCard";
import ProjectCard from "../components/ProjectCard";

/**
 * Redesigned Projects page showcasing WAT.ai research initiatives
 * Features modern card design, responsive layout, and enhanced UX
 */
const Projects: React.FC = () => {
  const theme = useTheme();
  const [showPastProjects, setShowPastProjects] = useState(false);

  const heroStats = [
    { icon: <Science />, number: "3", label: "Active Projects" },
    { icon: <School />, number: "12+", label: "Team Members" },
    { icon: <TrendingUp />, number: "19", label: "Past Projects" },
  ];

  return (
    <Box sx={{ 
      minHeight: "100vh", 
      py: 4, 
      position: "relative",
      backgroundColor: "transparent" 
    }}>
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box
          sx={{
            textAlign: "center",
            mb: 6,
            position: "relative",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 800,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
            }}
          >
            Our Research Projects
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.6,
              mb: 4,
            }}
          >
            Pushing the boundaries of artificial intelligence through innovative research
            and cutting-edge applications that make a real-world impact.
          </Typography>

          {/* Stats */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            sx={{ justifyContent: "center", mt: 4 }}
          >
            {heroStats.map((stat, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  p: 3,
                  textAlign: "center",
                  backgroundColor: `${theme.palette.primary.main}10`,
                  border: `1px solid ${theme.palette.primary.main}30`,
                  borderRadius: 3,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: theme.palette.primary.main,
                  },
                }}
              >
                <Box
                  sx={{
                    color: theme.palette.primary.main,
                    mb: 1,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {stat.icon}
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: theme.palette.primary.main,
                    mb: 0.5,
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.text.secondary }}
                >
                  {stat.label}
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Box>
      </Container>

      {/* Current Projects Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              color: theme.palette.text.primary,
              mb: 2,
              textAlign: "center",
            }}
          >
            Current Projects
          </Typography>
          <Divider
            sx={{
              width: "100px",
              height: "4px",
              backgroundColor: theme.palette.primary.main,
              mx: "auto",
              mb: 4,
              borderRadius: 2,
            }}
          />
        </Box>

        <Grid container spacing={4}>
          {NewProjectData.map((project, index) => (
            <Grid item xs={12} lg={6} key={index}>
              <Zoom in={true} timeout={300 + index * 100}>
                <Box sx={{ height: "100%" }}>
                  <ModernProjectCard {...project} />
                </Box>
              </Zoom>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Past Projects Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              color: theme.palette.text.primary,
              mb: 2,
            }}
          >
            Past Projects
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              mb: 3,
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Explore our legacy of innovation and the groundbreaking work
            that has shaped our research journey.
          </Typography>
          
          <Fab
            color="primary"
            variant="extended"
            onClick={() => setShowPastProjects(!showPastProjects)}
            sx={{
              borderRadius: 8,
              px: 4,
              py: 1.5,
              fontWeight: 600,
              textTransform: "none",
              boxShadow: `0 4px 12px rgba(0, 0, 0, 0.2)`,
              "&:hover": {
                boxShadow: `0 6px 16px rgba(0, 0, 0, 0.3)`,
                transform: "translateY(-2px)",
              },
            }}
          >
            {showPastProjects ? (
              <>
                <ExpandLess sx={{ mr: 1 }} />
                Hide Past Projects
              </>
            ) : (
              <>
                <ExpandMore sx={{ mr: 1 }} />
                Show Past Projects
              </>
            )}
          </Fab>
        </Box>

        <Collapse in={showPastProjects} timeout={500}>
          <Box sx={{ mt: 4 }}>
            <Grid container spacing={3}>
              {PastProjects.map((project, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Zoom in={showPastProjects} timeout={200 + index * 50}>
                    <Box sx={{ height: "100%" }}>
                      <ProjectCard {...project} />
                    </Box>
                  </Zoom>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Collapse>
      </Container>
    </Box>
  );
};

export default Projects;
