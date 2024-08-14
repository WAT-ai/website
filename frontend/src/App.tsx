import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import theme from "./theme"; // Import the custom theme

const Home: React.FC = () => <div>Home Page</div>;
const About: React.FC = () => <div>About Page</div>;
const Team: React.FC = () => <div>Team Page</div>;
const Projects: React.FC = () => <div>Projects Page</div>;
const Events: React.FC = () => <div>Events Page</div>;
const Contact: React.FC = () => <div>Contact Page</div>;
const Apply: React.FC = () => <div>Apply Page</div>;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
