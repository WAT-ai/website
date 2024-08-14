import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ReactComponent as Logo } from "../assets/wat_ai_logo.svg"; // Adjust the path as necessary

const Footer: React.FC = () => {
  return (
    <div
      className="footer"
      style={{ backgroundColor: "#000", padding: "40px 0" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 4vw",
          fontSize: "14px",
        }}
      >
        <div>
          <Logo
            style={{ marginBottom: "20px", height: "auto", width: "75px" }}
          />{" "}
          {/* Updated logo */}
          <Typography sx={{ color: "#FFCE1A", marginBottom: "15px" }}>
            contact@watai.ca
          </Typography>
          <Typography sx={{ color: "#fff" }}>
            Located at 200 University, <br />
            University of Waterloo, ON
          </Typography>
        </div>
        <div>
          <Typography sx={{ color: "#FFCE1A", marginBottom: "15px" }}>
            <a href="#about">About</a>
            <br />
            <a href="team.html">Team</a>
            <br />
            <a href="projects.html">Projects</a>
            <br />
            <a href="contact.html">Contact</a>
            <br />
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScK03OHyS4ayMtDpht0k41RKqo8i6vGC5nbqP6vnQLeys1_BQ/viewform"
              target="_blank"
            >
              Apply
            </a>
          </Typography>
          <Typography sx={{ display: "flex", gap: "10px", color: "#fff" }}>
            <a
              href="https://twitter.com/wataiteam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fa-brands fa-twitter"
                style={{ fontSize: "21px" }}
              ></i>
            </a>
            <a
              href="https://www.linkedin.com/company/wat-ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fa-brands fa-linkedin"
                style={{ fontSize: "21px" }}
              ></i>
            </a>
            <a
              href="https://www.instagram.com/wataiteam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fa-brands fa-instagram"
                style={{ fontSize: "24px" }}
              ></i>
            </a>
          </Typography>
        </div>
      </Box>
    </div>
  );
};

export default Footer;
