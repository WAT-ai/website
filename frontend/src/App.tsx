import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import the Footer component
import theme from "./theme"; // Import the custom theme

import Home from "./pages/Home";
import ParticleBackground from "./components/ParticleBackground";

const About: React.FC = () => <div>About Page</div>;
const Team: React.FC = () => <div>Team Page</div>;
const Projects: React.FC = () => <div>Projects Page</div>;
const Events: React.FC = () => <div>Events Page</div>;
const Contact: React.FC = () => <div>Contact Page</div>;
const Apply: React.FC = () => <div>Apply Page</div>;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <ParticleBackground />
        <Router>
          <Navbar />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/apply" element={<Apply />} />
            </Routes>
          </div>
          <Footer /> {/* Footer stays at the bottom */}
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
