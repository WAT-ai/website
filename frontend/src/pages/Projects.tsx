import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { ProjectData, PastProjects } from "../data/projectData";
import ProjectCard from "../components/ProjectCard";
import { keyframes } from "@mui/system";

// keyframes for the slideshow animation
const moveSlideshow = keyframes`
  100% { 
    transform: translateX(-49.23333%);  
  }
`;

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
            <ProjectSection title="" projects={PastProjects} alignTitle="center" />
          </Box>
        )}
      </Box>

      {/* Partners Section with Auto Scroller */}
      <Box sx={{ marginTop: "150px", marginBottom: "-50px" }}>
        <Box sx={{ marginTop: "50px" }} className="slide"></Box>
        <Box sx={{ marginTop: "-120px" }}>
          <Typography variant="h4" sx={{ textAlign: "center", mb: 2 }}>
            Our Partners
          </Typography>
          <Box className="tech-slideshow" sx={{
            height: "200px",
            width: "100%",
            position: "relative",
            overflow: "hidden",
          }}>
            <Box sx={{
              marginTop: "-50px",
              width: "3184px",
              backgroundImage: `url(${require('../assets/slider3.png')})`,
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: "0",
              height: "100%",
              transform: "translate3d(0, 0, 0)",
              animation: `${moveSlideshow} 22s linear infinite`,
            }} className="mover-1"></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

// Project section component
const ProjectSection = ({ title, projects, alignTitle = "center" }: { title: string; projects: any[]; alignTitle?: "center" | "left"; }) => (
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
