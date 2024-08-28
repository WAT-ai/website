import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

interface EventProps {
  title: string;
  date: string;
  location: string;
  prerequisites: string;
  description: string[];
}

const EventCard: React.FC<EventProps> = ({
  title,
  date,
  location,
  prerequisites,
  description,
}) => {
  const theme = useTheme(); // Access the theme

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        minWidth: "50vw",
        borderRadius: theme.shape.borderRadius,
        border: `3px solid ${theme.palette.primary.main}`,
        padding: theme.spacing(6),
        margin: theme.spacing(3),
        marginRight: theme.spacing(6),
        transition: "0.3s",
        width: "45%",
        "&:hover": {
          transform: "translateY(-10px)",
          filter: "brightness(120%)",
        },
        boxShadow: theme.shadows[3], // Add a subtle shadow
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: "1.875rem",
          fontWeight: theme.typography.h4.fontWeight,
          lineHeight: "2.5rem",
          marginBottom: theme.spacing(1),
          textAlign: "left",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "1rem",
          paddingBottom: theme.spacing(1),
          color: theme.palette.primary.main,
          textAlign: "left",
        }}
      >
        {date}. In {location}
      </Typography>
      <Typography
        sx={{
          fontSize: "0.875rem",
          paddingBottom: theme.spacing(2),
          color: theme.palette.text.secondary,
          textAlign: "left",
        }}
      >
        <Box
          component="span"
          sx={{ textDecoration: "underline", fontWeight: "bold" }}
        >
          Prerequisites:
        </Box>
        <Box>{prerequisites}</Box>
      </Typography>
      {description.map((desc, index) => (
        <Typography
          key={index}
          sx={{
            fontSize: "0.875rem",
            color: theme.palette.text.primary,
            textAlign: "left",
            mb: theme.spacing(1),
          }}
        >
          • {desc}
        </Typography>
      ))}
    </Box>
  );
};

export default EventCard;
