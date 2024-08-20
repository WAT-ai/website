import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import EventCard from "../components/EventCard";
import { previousEvents } from "../data/eventsData";
import { useTheme } from "@mui/material/styles";

const Events: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme(); // Access the theme

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "100vh",
        px: 3,
        pt: 5,
        pb: 10,
      }}
    >
      <Box sx={{ textAlign: "center", marginBottom: theme.spacing(6) }}>
        <Typography variant="h4" sx={{ color: theme.palette.text.secondary }}>
          WAT.ai Events
        </Typography>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          marginBottom: theme.spacing(8),
          fontSize: theme.typography.body2.fontSize,
          color: theme.palette.primary.main,
        }}
      >
        {/* Loading Animation */}
        {isLoading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: theme.spacing(6),
              height: "600px",
            }}
          >
            <CircularProgress color="primary" />
          </Box>
        )}

        {/* Google Calendar Embed */}
        <Box
          sx={{
            display: isLoading ? "none" : "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: theme.spacing(6),
            border: `5px solid ${theme.palette.primary.main}`,
            borderRadius: theme.shape.borderRadius,
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://calendar.google.com/calendar/embed?src=contact%40watai.ca&ctz=America%2FToronto"
            title="Google Calendar"
            style={{
              width: "100%",
              height: "600px",
            }}
            onLoad={handleIframeLoad}
          ></iframe>
        </Box>
      </Box>

      {/* Previous Events Section */}
      <Box sx={{ textAlign: "center", marginTop: theme.spacing(10) }}>
        <Typography variant="h4" sx={{ color: theme.palette.text.secondary }}>
          Previous Events
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column", // One event per row
          justifyContent: "center",
          alignItems: "center",
          marginTop: theme.spacing(10),
          height: "auto",
          px: "4vw",
          pb: theme.spacing(8),
          gap: theme.spacing(4),
          maxWidth: "800px",
          mx: "auto",
        }}
      >
        {previousEvents.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </Box>
    </Box>
  );
};

export default Events;
