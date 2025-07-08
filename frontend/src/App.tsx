/**
 * Main Application Component
 * 
 * This component sets up the routing, theme provider, analytics tracking,
 * and global layout structure for the WAT.ai website.
 * 
 * Features:
 * - Lazy loading for performance optimization
 * - Google Analytics integration
 * - Global particle background
 * - Responsive layout with navbar and footer
 */

import React, { useEffect, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Box, CircularProgress } from "@mui/material";

// Core components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import theme from "./styles/theme";

// Analytics
import ReactGA from "react-ga4";

// Lazy-loaded page components for optimal performance
const Home = lazy(() => import("./pages/Home"));
const Students = lazy(() => import("./pages/Students"));
const Partnerships = lazy(() => import("./pages/Partnerships"));
const Team = lazy(() => import("./pages/Team"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const ParticleBackground = lazy(() => import("./components/ParticleBackground"));

// Initialize Google Analytics
ReactGA.initialize("G-1LBF0CDH72");

/**
 * Component to track page views for analytics
 * Automatically sends page view events when route changes
 */
const PageViewTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  return null;
};

/**
 * Main application content component
 * Handles layout, routing, and global components
 */
const AppContent: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        position: "relative",
        backgroundColor: "#000000", // Global dark background
      }}
    >
      {/* Global particle background */}
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content area */}
      <main style={{ flex: 1, position: "relative", zIndex: 1 }}>
        <Suspense 
          fallback={
            <Box 
              display="flex" 
              justifyContent="center" 
              alignItems="center" 
              minHeight="50vh"
              role="progressbar"
              aria-label="Loading page content"
            >
              <CircularProgress color="primary" />
            </Box>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/team" element={<Team />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

/**
 * Root App component
 * Provides theme context and router setup
 */
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <PageViewTracker />
        <AppContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;
