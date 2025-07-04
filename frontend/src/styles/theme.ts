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
    h4: {
      fontWeight: 600,
      letterSpacing: "0.05em",
    },
    h5: {
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 5,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          textTransform: "none",
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
