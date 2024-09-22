import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { ProjectData, PastProjects } from "../data/projectData";
import ProjectCard from "../components/ProjectCard";
import TechSlideshow from "../components/TechSlideshow";
import theme from "../styles/theme";
import ProjectsGraph from "../components/ProjectsGraph";

const Projects: React.FC = () => {
  const [showPastProjects, setShowPastProjects] = useState(false);

  return (
    <Box sx={{ padding: "20px" }}>
      {/* Network Graph Section */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 3 }}>
          Projects
        </Typography>
        <Box sx={{ height: "750px", width: "100%" }}>
          <ProjectsGraph />
        </Box>
      </Box>

      {/* Current Projects Section */}
      <ProjectSection title="Current Projects" projects={ProjectData} />

      {/* Toggle Past Projects Section */}
      <Box sx={{ textAlign: "center", mb: 10 }}>
        <Typography variant="h4" sx={{ textAlign: "center", mt: 5, mb: 2 }}>
          Past Projects
        </Typography>
        <IconButton
          onClick={() => setShowPastProjects(!showPastProjects)}
          sx={{ color: "#FFF" }}
          aria-label="toggle past projects"
        >
          {showPastProjects ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
        {showPastProjects && (
          <Box sx={{ mt: 3 }}>
            <ProjectSection
              title=""
              projects={PastProjects}
              alignTitle="center"
            />
          </Box>
        )}
      </Box>

      {/* Our Partners Section */}
      <Box
        component="section"
        sx={{
          textAlign: "center",
          pt: 5,
          mt: 5,
          backgroundColor: theme.palette.background.default,
          borderTop: `2px solid ${theme.palette.primary.main}`,
        }}
      >
        <Typography
          variant="h4"
          sx={{ mb: 5, color: theme.palette.text.secondary }}
        >
          Our Partners
        </Typography>
        <TechSlideshow />
      </Box>
    </Box>
  );
};

// Project section component
const ProjectSection = ({
  title,
  projects,
  alignTitle = "center",
}: {
  title: string;
  projects: any[];
  alignTitle?: "center" | "left";
}) => (
  <Box sx={{ mt: 5, mb: 5 }}>
    <Typography variant="h4" sx={{ textAlign: alignTitle, mb: 5 }}>
      {title}
    </Typography>
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 4,
        maxWidth: "90vw",
        mx: "auto",
        paddingLeft: "10px",
        paddingRight: "10px",
        mt: "50px",
      }}
    >
      {projects.map((project, index) => (
        <Box
          key={index}
          sx={{
            flex: "1 1 calc(50% - 32px)",
            maxWidth: "calc(50% - 32px)",
            minWidth: "300px",
          }}
        >
          <ProjectCard {...project} />
        </Box>
      ))}
    </Box>
  </Box>
);

export default Projects;
