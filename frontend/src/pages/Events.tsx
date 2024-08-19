import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import EventCard from "../components/EventCard";
import { previousEvents } from "../data/eventsData";

const Events: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ textAlign: "center", marginTop: "100px" }}>
        <Typography variant="h4" sx={{ color: "#FFF" }}>
          WAT.ai Events
        </Typography>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          marginBottom: "50px",
          fontSize: "14px",
          color: "#FFCE1A",
        }}
      >
        {/* Loading Animation */}
        {isLoading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: "50px",
              height: "600px",
            }}
          >
            <CircularProgress color="inherit" />
          </Box>
        )}

        {/* Google Calendar Embed */}
        <Box
          sx={{
            display: isLoading ? "none" : "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "50px",
          }}
        >
          <iframe
            src="https://calendar.google.com/calendar/embed?src=contact%40watai.ca&ctz=America%2FToronto"
            title="Google Calendar"
            style={{
              border: "5px solid grey",
              borderRadius: "10px", // Optional: add rounded corners
              width: "80%",
              height: "600px",
            }}
            onLoad={handleIframeLoad}
          ></iframe>
        </Box>
      </Box>

      {/* Previous Events Section */}
      <Box
        sx={{ textAlign: "center", marginTop: "100px", marginBottom: "50px" }}
      >
        <Typography variant="h4" sx={{ color: "#FFF" }}>
          Previous Events
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column", // One event per row
          justifyContent: "center",
          alignItems: "center",
          marginTop: "80px",
          zIndex: 1,
          height: "auto",
          px: "4vw",
          pb: "30px",
          gap: 8,
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
