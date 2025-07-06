import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ReactComponent as Logo } from "../assets/wat_ai_logo.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.default,
        borderTop: `2px solid ${theme.palette.primary.main}`,
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 3, md: 4 },
        mt: "auto",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "center", md: "flex-start" },
          gap: { xs: 4, md: 6 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Left Column - Logo and Contact Info */}
        <Box sx={{ flex: 1 }}>
          <Box
            component={Logo}
            sx={{ 
              height: "auto", 
              width: { xs: "60px", md: "75px" }, 
              mb: 3,
              mx: { xs: "auto", md: 0 },
              display: "block",
            }}
          />
          <Typography 
            variant="body1" 
            sx={{ 
              color: theme.palette.primary.main, 
              mb: 2,
              fontSize: { xs: "0.9rem", md: "1rem" },
              fontWeight: 500,
            }}
          >
            contact@watai.ca
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: theme.palette.text.secondary,
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", md: "0.9rem" },
            }}
          >
            200 University Ave W<br />
            University of Waterloo, ON
          </Typography>
        </Box>

        {/* Right Column - Social Media Only */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: { xs: "center", md: "flex-end" } }}>
          {/* Social Media Icons */}
          <Box>
            <Typography variant="h6" sx={{ color: theme.palette.text.primary, mb: 2, fontSize: "1.1rem" }}>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 2, justifyContent: { xs: "center", md: "flex-start" } }}>
              {[
                { href: "https://twitter.com/wataiteam", icon: TwitterIcon, label: "Twitter" },
                { href: "https://www.linkedin.com/company/wat-ai/", icon: LinkedInIcon, label: "LinkedIn" },
                { href: "https://www.instagram.com/wataiteam/", icon: InstagramIcon, label: "Instagram" },
              ].map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: theme.palette.text.secondary,
                    transition: "all 0.3s ease",
                    padding: "8px",
                    borderRadius: "50%",
                    "&:hover": {
                      color: theme.palette.primary.main,
                      backgroundColor: `${theme.palette.primary.main}10`,
                      transform: "translateY(-2px)",
                    },
                  }}
                  aria-label={social.label}
                >
                  <social.icon fontSize="medium" />
                </Link>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Copyright */}
      <Box 
        sx={{ 
          mt: 4, 
          pt: 3, 
          borderTop: `1px solid ${theme.palette.primary.main}40`,
          textAlign: "center" 
        }}
      >
        <Typography 
          variant="body2" 
          sx={{ 
            color: theme.palette.text.secondary,
            fontSize: { xs: "0.8rem", md: "0.85rem" },
          }}
        >
          © {new Date().getFullYear()} WAT.ai
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
