import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { ProjectData, PastProjects } from "../data/projectData";
import ProjectCard from "../components/ProjectCard";
import TechSlideshow from "../components/TechSlideshow";

const Projects: React.FC = () => {
  const [showPastProjects, setShowPastProjects] = useState(false);

  return (
    <Box sx={{ padding: "20px" }}>
      {/* Current Projects Section */}
      <ProjectSection title="Current Projects" projects={ProjectData} />

      {/* Toggle Past Projects Section */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
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
      <TechSlideshow />
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
        justifyContent: "space-between",
        paddingLeft: "10px",
        paddingRight: "10px",
        mt: "50px",
      }}
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Box>
  </Box>
);

export default Projects;
