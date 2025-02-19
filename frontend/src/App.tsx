import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import theme from "./styles/theme";
import ReactGA from "react-ga4";

import Home from "./pages/Home";
import Students from "./pages/Students"
import Sponsors from "./pages/Sponsors";
import Professors from "./pages/Professors";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply";
import ParticleBackground from "./components/ParticleBackground";
import Blog from "./pages/Blog";

// Initialize Google Analytics
ReactGA.initialize("G-1LBF0CDH72");

// Track page views
const PageViewTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Log the current page and search
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  return null;
};

const AppContent: React.FC = () => {
  const location = useLocation();
  const hideParticlesOnRoutes = ['/students']; // Add any routes where you want to hide particles

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
      {showParticles && <ParticleBackground />}

      <Navbar />
      <div style={{ flex: 1, position: "relative", zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/professors" element={<Professors />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;
