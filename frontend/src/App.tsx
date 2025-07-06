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
import Footer from "./components/Footer";
import theme from "./styles/theme";
import ReactGA from "react-ga4";

// Lazy-loaded components for code splitting and performance
const Home = lazy(() => import("./pages/Home"));
const Students = lazy(() => import("./pages/Students"));
const Sponsors = lazy(() => import("./pages/Sponsors"));
const Professors = lazy(() => import("./pages/Professors"));
const Team = lazy(() => import("./pages/Team"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const ParticleBackground = lazy(() => import("./components/ParticleBackground"));

// Google Analytics configuration
ReactGA.initialize("G-1LBF0CDH72");

// Component to track page views for analytics
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

const AppContent: React.FC = () => {
  const location = useLocation();
  const hideParticlesOnRoutes = ['/students']; // Routes where particles are disabled for performance

  const showParticles = !hideParticlesOnRoutes.includes(location.pathname);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {showParticles && (
        <Suspense fallback={null}>
          <ParticleBackground />
        </Suspense>
      )}

      <Navbar />
      <div style={{ flex: 1, position: "relative", zIndex: 1 }}>
        <Suspense fallback={
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
            <CircularProgress />
          </Box>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/professors" element={<Professors />} />
            <Route path="/team" element={<Team />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

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
