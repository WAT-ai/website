import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/wat_ai_logo.svg"; // Adjust the path as necessary
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "@mui/material/Link";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "transparent",
        pb: "40px",
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
            <Link
              component={RouterLink}
              to="/#about"
              sx={{
                color: "#FFCE1A",
                textDecoration: "none",
                "&:hover": {
                  color: "#fff", // Change text color to white on hover
                },
              }}
            >
              About
            </Link>
            <br />
            <Link
              component={RouterLink}
              to="/team"
              sx={{
                color: "#FFCE1A",
                textDecoration: "none",
                "&:hover": {
                  color: "#fff", // Change text color to white on hover
                },
              }}
            >
              Team
            </Link>
            <br />
            <Link
              component={RouterLink}
              to="/projects"
              sx={{
                color: "#FFCE1A",
                textDecoration: "none",
                "&:hover": {
                  color: "#fff", // Change text color to white on hover
                },
              }}
            >
              Projects
            </Link>
            <br />
            <Link
              component={RouterLink}
              to="/contact"
              sx={{
                color: "#FFCE1A",
                textDecoration: "none",
                "&:hover": {
                  color: "#fff", // Change text color to white on hover
                },
              }}
            >
              Contact
            </Link>
            <br />
            <Link
              component={RouterLink}
              to="/apply"
              sx={{
                color: "#FFCE1A",
                textDecoration: "none",
                "&:hover": {
                  color: "#fff", // Change text color to white on hover
                },
              }}
            >
              Apply
            </Link>
          </Typography>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Link
              href="https://twitter.com/wataiteam"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#fff",
                "&:hover": {
                  color: "#FFCE1A", // Change icon color to yellow on hover
                },
              }}
            >
              <TwitterIcon fontSize="small" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/wat-ai/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#fff",
                "&:hover": {
                  color: "#FFCE1A", // Change icon color to yellow on hover
                },
              }}
            >
              <LinkedInIcon fontSize="small" />
            </Link>
            <Link
              href="https://www.instagram.com/wataiteam/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#fff",
                "&:hover": {
                  color: "#FFCE1A", // Change icon color to yellow on hover
                },
              }}
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
