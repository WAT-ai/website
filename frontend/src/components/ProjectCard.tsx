import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useTheme } from "@mui/material/styles";

interface ProjectCardProps {
  title: string;
  tpm: string;
  coreMembers?: string; // Mark coreMembers as optional
  description: string;
  collaboration?: string;
  collaborationLogo?: string;
  collaborationLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  tpm,
  coreMembers,
  description,
  collaboration,
  collaborationLogo,
  collaborationLink,
}) => {
  const theme = useTheme(); // Access the theme

  return (
    <Card
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        width: "100%",
        height: "100%",
        borderRadius: theme.shape.borderRadius,
        border: `3px solid ${theme.palette.primary.main}`,
        transition: "0.3s",
        padding: theme.spacing(6),
        display: "flex",
        flexDirection: "column", // Ensure content is vertically aligned
        justifyContent: "space-between", // Ensure content is spaced evenly
        boxShadow: theme.shadows[3], // Add a subtle shadow
        "&:hover": {
          transform: "translateY(-10px)",
          filter: "brightness(120%)",
        },
      }}
    >
      <CardContent sx={{ textAlign: "left" }}>
        {/* Project Title */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: theme.typography.h5.fontWeight,
            fontSize: "1.875rem",
            lineHeight: "2.5rem",
            mb: theme.spacing(1),
          }}
        >
          {title}
        </Typography>
        {/* TPM */}
        <Typography
          variant="body2"
          sx={{ fontSize: "1rem", mb: theme.spacing(1) }}
        >
          <span style={{ color: theme.palette.text.secondary }}>TPMs:</span>{" "}
          <i>{tpm}</i>
        </Typography>
        {/* Core Members (if available) */}
        {coreMembers && (
          <Typography
            variant="body2"
            sx={{ fontSize: "1rem", mb: theme.spacing(2) }}
          >
            <span style={{ color: theme.palette.text.secondary }}>
              Core Members:
            </span>{" "}
            <i>{coreMembers}</i>
          </Typography>
        )}
        {/* Project Description */}
        <Typography
          variant="body2"
          sx={{ fontSize: "0.875rem", lineHeight: "1.6" }}
        >
          {description}
        </Typography>
      </CardContent>

      {/* Collaboration Section */}
      {collaboration && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            mt: theme.spacing(3),
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: "1rem",
              color: theme.palette.text.secondary,
              marginRight: collaborationLogo ? theme.spacing(1) : "0px",
            }}
          >
            In collaboration with{" "}
            <a
              href={collaborationLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: theme.palette.primary.main, fontWeight: "bold" }}
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
    </Card>
  );
};

export default ProjectCard;
