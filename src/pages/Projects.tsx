/**
 * Projects - Display active and completed WAT.ai projects
 * Includes project cards, stats, and expandable past projects section
 */
import React, { useState, useMemo } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  useTheme,
  Zoom,
  Stack,
  Divider,
  Paper,
  TextField,
  InputAdornment,
  Button,
  IconButton,
} from "@mui/material";
import {
  School,
  TrendingUp,
  Science,
  Search,
  Clear,
} from "@mui/icons-material";
import { ProjectsData } from "../data/newProjectData";
import ModernProjectCard from "../components/ModernProjectCard";

// Projects page: Lists current and past projects.
// Add new projects in ProjectsData array.
// Adjust layout, cards, or stats as needed for your use case.
const Projects: React.FC = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  // All projects in one array
  const allProjects = useMemo(() => ProjectsData, []);

  // Filter projects based on search query only
  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      // Search filter - only search by title, description, and TPM
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tpm.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesSearch;
    });
  }, [searchQuery, allProjects]);

  const handleClearFilters = () => {
    setSearchQuery("");
  };

  const heroStats = [
    { icon: <Science />, number: allProjects.length.toString(), label: "Total Projects" },
    { icon: <TrendingUp />, number: allProjects.filter(p => p.active).length.toString(), label: "Active Projects" },
    { icon: <School />, number: (allProjects.length - allProjects.filter(p => p.active).length).toString(), label: "Past Projects" },
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
            Explore our current and past research projects pushing the boundaries of artificial intelligence through innovative research
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

      {/* Search and Filter Section */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        {/* Search Bar */}
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search by project name, description, or TPM..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            endAdornment: searchQuery && (
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  onClick={() => setSearchQuery("")}
                  edge="end"
                >
                  <Clear />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              "& fieldset": {
                borderColor: theme.palette.primary.main,
              },
              "&:hover fieldset": {
                borderColor: theme.palette.primary.main,
              },
              "&.Mui-focused fieldset": {
                borderColor: theme.palette.primary.main,
                borderWidth: "1px",
              },
            },
          }}
        />
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
            All Projects
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
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <Grid item xs={12} lg={6} key={index}>
                <Zoom in={true} timeout={300 + index * 100}>
                  <Box sx={{ height: "100%" }}>
                    <ModernProjectCard {...project} />
                  </Box>
                </Zoom>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Box
                sx={{
                  textAlign: "center",
                  py: 8,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.text.secondary,
                    mb: 2,
                    fontWeight: 600,
                  }}
                >
                  No projects found
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    mb: 3,
                  }}
                >
                  Try a different search term
                </Typography>
                <Button
                  variant="outlined"
                  onClick={handleClearFilters}
                  startIcon={<Clear />}
                  sx={{
                    textTransform: "none",
                    borderRadius: 2,
                  }}
                >
                  Clear Search
                </Button>
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
