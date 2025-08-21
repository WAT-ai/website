/**
 * Contact - Contact information and social links
 * Displays email, Discord, LinkedIn, and Instagram contact options
 */
import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";
import DiscordIcon from "../components/DiscordIcon";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import { SectionTitle, BodyText, BodyLarge } from "../components/Typography";
import UnifiedCard from "../components/UnifiedCard";

// Contact page: Shows contact info and social links. Update or extend as needed.
// To add new contact methods, add a new UnifiedCard below.
// For design changes, edit the Box and UnifiedCard props.
const Contact: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 2, md: 4 },
      }}
    >
      {/* Compact Contact Section */}
      <Box
        sx={{
          maxWidth: "800px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Title */}
        <SectionTitle sx={{ mb: 2, fontSize: { xs: "2.5rem", md: "3rem" } }}>
          Get in Touch
        </SectionTitle>
        
        <BodyLarge sx={{ mb: 6, maxWidth: "600px", margin: "0 auto 3rem auto" }}>
          We're always open to new ideas, collaborations, and opportunities.
        </BodyLarge>

        {/* Contact Cards in Row */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
            mb: 6,
          }}
        >
          {/* Email Contact */}
          <UnifiedCard
            variant="elevated"
            padding={4}
          >
            <Box sx={{ textAlign: "center" }}>
              <EmailIcon 
                sx={{ 
                  fontSize: 40, 
                  color: theme.palette.primary.main, 
                  mb: 2 
                }} 
              />
              <SectionTitle sx={{ fontSize: "1.4rem", mb: 2 }}>
                Email Us
              </SectionTitle>
              <Link
                href="mailto:contact@watai.ca"
                sx={{
                  color: theme.palette.primary.main,
                  textDecoration: "none",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  "&:hover": {
                    color: theme.palette.primary.light,
                  },
                }}
              >
                contact@watai.ca
              </Link>
            </Box>
          </UnifiedCard>

          {/* Social Media Links */}
          <UnifiedCard
            variant="elevated"
            padding={4}
          >
            <Box sx={{ textAlign: "center" }}>
              <SectionTitle sx={{ fontSize: "1.4rem", mb: 3 }}>
                Follow Us
              </SectionTitle>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 3,
                }}
              >

                <Link
                  href="https://discord.com/invite/Hn3XkK83tJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textDecoration: "none",
                    color: theme.palette.text.primary,
                    "&:hover": {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <DiscordIcon sx={{ fontSize: 32, mb: 1 }} />
                  <BodyText sx={{ fontSize: "0.9rem", mb: 0 }}>Discord</BodyText>
                </Link>
                
                <Link
                  href="https://linkedin.com/company/watai"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textDecoration: "none",
                    color: theme.palette.text.primary,
                    "&:hover": {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <LinkedInIcon sx={{ fontSize: 32, mb: 1 }} />
                  <BodyText sx={{ fontSize: "0.9rem", mb: 0 }}>LinkedIn</BodyText>
                </Link>
                
                <Link
                  href="https://instagram.com/wataiteam"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textDecoration: "none",
                    color: theme.palette.text.primary,
                    "&:hover": {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <InstagramIcon sx={{ fontSize: 32, mb: 1 }} />
                  <BodyText sx={{ fontSize: "0.9rem", mb: 0 }}>Instagram</BodyText>
                </Link>
              </Box>
            </Box>
          </UnifiedCard>
        </Box>

        {/* Bottom Text */}
        <BodyText sx={{ color: theme.palette.text.secondary, fontSize: "1rem" }}>
          For general inquiries, partnership opportunities, or questions about our projects and initiatives.
        </BodyText>
      </Box>
    </Box>
  );
};

export default Contact;