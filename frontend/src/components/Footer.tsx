import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { ReactComponent as Logo } from "../assets/wat_ai_logo.svg"; // Adjust the path as necessary
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "transparent",
        padding: "40px 0",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 4vw",
          fontSize: "14px",
        }}
      >
        <Box>
          <Box
            component={Logo}
            sx={{ marginBottom: "20px", height: "auto", width: "75px" }}
          />
          <Typography sx={{ color: "#FFCE1A", marginBottom: "15px" }}>
            contact@watai.ca
          </Typography>
          <Typography>
            Located at 200 University, <br />
            University of Waterloo, ON
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ marginBottom: "15px" }}>
            <Link href="#about" color="#FFCE1A" underline="hover">
              About
            </Link>
            <br />
            <Link href="team.html" color="#FFCE1A" underline="hover">
              Team
            </Link>
            <br />
            <Link href="projects.html" color="#FFCE1A" underline="hover">
              Projects
            </Link>
            <br />
            <Link href="contact.html" color="#FFCE1A" underline="hover">
              Contact
            </Link>
            <br />
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScK03OHyS4ayMtDpht0k41RKqo8i6vGC5nbqP6vnQLeys1_BQ/viewform"
              target="_blank"
              color="#FFCE1A"
              underline="hover"
            >
              Apply
            </Link>
          </Typography>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Link
              href="https://twitter.com/wataiteam"
              target="_blank"
              rel="noopener noreferrer"
              color="#fff"
            >
              <TwitterIcon fontSize="small" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/wat-ai/"
              target="_blank"
              rel="noopener noreferrer"
              color="#fff"
            >
              <LinkedInIcon fontSize="small" />
            </Link>
            <Link
              href="https://www.instagram.com/wataiteam/"
              target="_blank"
              rel="noopener noreferrer"
              color="#fff"
            >
              <InstagramIcon fontSize="small" />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
