// Optimize MUI imports by importing only what we need
// This reduces the bundle size significantly

// Icons - only import specific icons
export { default as MenuIcon } from '@mui/icons-material/Menu';
export { default as ExpandMoreIcon } from '@mui/icons-material/ExpandMore';
export { default as ExpandLessIcon } from '@mui/icons-material/ExpandLess';

// Core components - selective imports
export {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Select,
  MenuItem,
  CircularProgress,
  Skeleton,
  useMediaQuery,
} from '@mui/material';

export { useTheme } from '@mui/material/styles';
