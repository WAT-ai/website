import { createTheme } from "@mui/material/styles";

// Extend MUI theme interface to include custom colors
declare module "@mui/material/styles" {
  interface Theme {
    customColors: {
      transparentPrimary: string;
      transparentSecondary: string;
    };
  }
  interface ThemeOptions {
    customColors?: {
      transparentPrimary?: string;
      transparentSecondary?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFCE1A", // WAT.ai brand yellow
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#1c1c1c", // Dark charcoal
      contrastText: "#ffffff",
    },
    background: {
      default: "#000000", // Pure black
      paper: "#1c1c1c", // Dark containers
    },
    text: {
      primary: "#ffffff", // Primary text
      secondary: "#cfcfcf", // Muted text
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    // Display typography for hero sections
    h1: {
      fontSize: "3.5rem",
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      "@media (max-width:600px)": {
        fontSize: "2.5rem",
      },
    },
    // Main section headings
    h2: {
      fontSize: "2.75rem",
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    // Subsection headings
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: "0em",
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    // Card/component headings
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: "0.01em",
      "@media (max-width:600px)": {
        fontSize: "1.25rem",
      },
    },
    // Smaller headings
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: "0.01em",
    },
    // Minor headings
    h6: {
      fontSize: "1.125rem",
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: "0.01em",
    },
    // Main body text
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: "0.01em",
    },
    // Secondary body text
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.01em",
    },
    // Small text
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.4,
      letterSpacing: "0.02em",
    },
    // Button text
    button: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.75,
      letterSpacing: "0.02em",
      textTransform: "none",
    },
    // Overline text (for labels)
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      lineHeight: 2,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
  },
  shape: {
    borderRadius: 5,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 500,
          fontSize: "0.875rem",
          lineHeight: 1.75,
          letterSpacing: "0.02em",
          padding: "10px 24px",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 4px 12px rgba(255, 206, 26, 0.3)",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          // Ensure consistent line-height for all typography
          lineHeight: "inherit",
        },
        h1: {
          fontWeight: 700,
        },
        h2: {
          fontWeight: 600,
        },
        h3: {
          fontWeight: 600,
        },
        h4: {
          fontWeight: 600,
        },
        h5: {
          fontWeight: 500,
        },
        h6: {
          fontWeight: 500,
        },
      },
    },
  },
  customColors: {
    transparentPrimary: "rgba(255, 206, 26, 0.5)",
    transparentSecondary: "rgba(28, 28, 28, 0.2)",
  },
});

export default theme;
