import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFCE1A',  // Your custom yellow color
    },
    // You can add more custom colors or overrides here
  },
  typography: {
    fontFamily: 'Lato, sans-serif',
  },
});

export default theme;