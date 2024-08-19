import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
  return (
    <Box
      sx={{
        backgroundColor: "#8c8c8c2d",
        color: "#fff",
        minWidth: "50vw",
        borderRadius: "20px",
        border: "3px solid #ffce1a",
        padding: "50px",
        margin: "20px",
        marginRight: "50px",
        transition: "0.3s",
        width: "45%",
        marginTop: "-50px",
        "&:hover": {
          transform: "translateY(-10px)",
          filter: "brightness(120%)",
        },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: "30px",
          fontWeight: "bold",
          lineHeight: "40px",
          marginBottom: "5px",
          textAlign: "left", // Left justify the title
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "15px",
          paddingBottom: "5px",
          color: "#FFCE1A",
          textAlign: "left", // Left justify the date and location
        }}
      >
        {date}. In {location}
      </Typography>
      <Typography
        sx={{
          fontSize: "12px",
          paddingBottom: "15px",
          color: "#fff",
          textAlign: "left", // Left justify the prerequisites
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
            fontSize: "14px",
            color: "#fff",
            textAlign: "left", // Left justify each description item
            mb: 1,
          }}
        >
          • {desc}
        </Typography>
      ))}
    </Box>
  );
};

export default EventCard;
