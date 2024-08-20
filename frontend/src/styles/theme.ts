import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    customColors: {
      transparentPrimary: string;
      transparentSecondary: string;
    };
  }
  // allow configuration using `createTheme`
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
      main: "#FFCE1A", // Custom yellow color
      contrastText: "#ffffff", // White text for contrast
    },
    secondary: {
      main: "#1c1c1c", // Dark gray for secondary elements
      contrastText: "#ffffff",
    },
    background: {
      default: "#000000", // Black background
      paper: "#1c1c1c", // Dark gray for containers
    },
    text: {
      primary: "#ffffff", // White text
      secondary: "#cfcfcf", // Light gray text
    },
  },
  typography: {
    fontFamily: "Lato, sans-serif",
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
      fontWeight: 300,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 300,
    },
  },
  shape: {
    borderRadius: 5, // Rounded corners
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
    transparentPrimary: "rgba(255, 206, 26, 0.5)", // 50% transparent primary color
    transparentSecondary: "rgba(28, 28, 28, 0.2)", // 50% transparent secondary color
  },
});

export default theme;
