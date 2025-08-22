/**
 * Main Application Component - WAT.ai Website
 * Sets up routing, theme, analytics, and global layout with lazy loading optimization
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

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import theme from "./styles/theme";
import ReactGA from "react-ga4";

// Lazy-loaded page components
const Home = lazy(() => import("./pages/Home"));
const Students = lazy(() => import("./pages/Students"));
const Partnerships = lazy(() => import("./pages/Partnerships"));
const Team = lazy(() => import("./pages/Team"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const ParticleBackground = lazy(() => import("./components/ParticleBackground"));
const Footer = lazy(() => import("./components/Footer"));

ReactGA.initialize("G-1LBF0CDH72");

/**
 * Analytics tracker component for page view events
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
 * Main application layout and routing component
 */
const AppContent: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        position: "relative",
        backgroundColor: "#000000",
      }}
    >
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>
      
      <Navbar />
      
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
      
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

/**
 * Root App component with theme and router providers
 */
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <PageViewTracker />
        <ScrollToTop />
        <AppContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;
