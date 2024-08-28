import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

const Apply: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: theme.spacing(6),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        textAlign: "left",
      }}
    >
      <Typography
        variant="h4"
        sx={{ mb: theme.spacing(4), color: theme.palette.primary.main }}
      >
        Apply to Join Us
      </Typography>

      <Button
        variant="contained"
        color="primary"
        href="https://forms.gle/9MD4He84vJftQxLS7"
        target="_blank"
        sx={{
          fontWeight: "bold",
          fontSize: "1.25rem",
          padding: theme.spacing(2),
          mb: theme.spacing(4), // Margin below the button
          backgroundColor: theme.palette.primary.dark, // Darker color for prominence
          transition: theme.transitions.create(["transform"], {
            duration: theme.transitions.duration.short,
          }),
          "&:hover": {
            transform: "translateY(-5px)", // Move the button up slightly on hover
          },
        }}
      >
        Apply Now
      </Button>

      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderRadius: theme.shape.borderRadius,
          border: `3px solid ${theme.palette.primary.main}`,
          padding: theme.spacing(4),
          boxShadow: theme.shadows[3],
          maxWidth: "800px",
          width: "100%",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            mb: theme.spacing(2),
            fontWeight: theme.typography.fontWeightBold,
          }}
        >
          Core Member
        </Typography>
        <Typography variant="body1" sx={{ mb: theme.spacing(2) }}>
          Members of our small project teams. Applications open Aug 27 - Sept 17
          2024 for F24-W25 projects.
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mb: theme.spacing(2),
            fontWeight: theme.typography.fontWeightBold,
          }}
        >
          Technical Project Manager
        </Typography>
        <Typography variant="body1" sx={{ mb: theme.spacing(2) }}>
          Leads of small project teams, in technical expertise, project
          management, and mentorship. TPMs will work with our Product Team to
          plan a project for W25 during the F24 term. Applications open Oct 2024
          for projects starting in Jan 2025.
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mb: theme.spacing(2),
            fontWeight: theme.typography.fontWeightBold,
          }}
        >
          Leadership
        </Typography>
        <Typography variant="body1" sx={{ mb: theme.spacing(2) }}>
          Various non-technical roles within our org. In the past, we have had
          website, marketing, education, finance, technology resources, and
          project directors. Applications will open around November 2024 for the
          W25 term.
        </Typography>
      </Box>
    </Box>
  );
};

export default Apply;
