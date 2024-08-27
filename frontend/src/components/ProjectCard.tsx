import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";

interface ProjectCardProps {
  title: string;
  tpm: string;
  coreMembers: string;
  description: string;
  collaboration?: string;
  collaborationLogo?: string;
  collaborationLink?: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#8c8c8c2d",
  color: "#fff",
  borderRadius: "20px",
  border: "3px solid #FFCE1A",
  padding: "20px",
  margin: "30px",
  flex: "1 1 45%",
  maxWidth: "50%",
  transition: "0.3s",
  fontFamily: "Lato",
  "&:hover": {
    transform: "translateY(-10px)",
    filter: "brightness(120%)",
  },
}));

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    tpm,
    coreMembers,
    description,
    collaboration,
    collaborationLogo,
    collaborationLink,
  }) => {
    return (
      <StyledCard>
        <CardContent>
          {/* Project Title */}
          <Typography
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold", fontSize: "30px", lineHeight: "40px", mb: 1, textAlign: "left" }}
          >
            {title}
          </Typography>
  
          {/* TPM and Core Members */}
          <Typography variant="body2" sx={{ fontSize: "12px", mb: 1, textAlign: "left" }}>
            <span style={{ color: "#b9b8b8" }}>TPMs:</span> <i>{tpm}</i>
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "12px", mb: 2, textAlign: "left" }}>
            <span style={{ color: "#b9b8b8" }}>Core Members:</span> <i>{tpm}</i>
          </Typography>
  
          {/* Project Description */}
          <Typography variant="body2" sx={{ fontSize: "14px", lineHeight: "1.6", textAlign: "left" }}>
            {description}
          </Typography>
  
          {/* Collaboration Section */}
          {collaboration && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: collaborationLogo ? 'flex-end' : 'flex-start',
                mt: 3,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: "12px",
                  marginRight: collaborationLogo ? "10px" : "0px",
                }}
              >
                In collaboration with{" "}
                <a
                  href={collaborationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#FFCE1A", fontWeight: "bold" }}
                >
                  {collaboration}
                </a>
              </Typography>
              {collaborationLogo && (
                <CardMedia
                  component="img"
                  image={require(`../assets/collaborationLogos/${collaborationLogo}`)}
                  alt={collaboration}
                  sx={{
                    width: "35px",
                    height: "auto",
                    display: "inline-block",
                  }}
                />
              )}
            </Box>
          )}
        </CardContent>
      </StyledCard>
    );
  };
  
  export default ProjectCard;