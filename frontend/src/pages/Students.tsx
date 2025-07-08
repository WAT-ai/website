import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Link from "@mui/material/Link";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GroupsIcon from '@mui/icons-material/Groups';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { SectionTitle, SubsectionTitle, BodyLarge, BodyText } from "../components/Typography";
import StyledBulletPoints from "../components/StyledBulletPoints";
import ImageGallery from "../components/ImageGallery";
import UnifiedSection from "../components/UnifiedSection";
import UnifiedCard from "../components/UnifiedCard";
import UnifiedHero from "../components/UnifiedHero";
import UnifiedButton from "../components/UnifiedButton";

// Students page: Info for student members, roles, and joining. Update sections for new roles or benefits.

// Import images
import cucai1 from "../assets/studentLandingPage/cucai1.jpg"
import cucai2 from "../assets/studentLandingPage/cucai2.jpg"
import cucai3 from "../assets/studentLandingPage/cucai3.jpg"
import cucai4 from "../assets/studentLandingPage/cucai4.jpg"
import cucai5 from "../assets/studentLandingPage/cucai5.jpg"
import cucai6 from "../assets/studentLandingPage/cucai6.jpg"
import cucai7 from "../assets/studentLandingPage/cucai7.jpg"
import cucai8 from "../assets/studentLandingPage/cucai8.jpg"
import cm1 from "../assets/studentLandingPage/cm1.jpg"
import cm2 from "../assets/studentLandingPage/cm2.jpg"

/**
 * Updated Student engagement page with unified design system
 * Features membership tiers, benefits, and visual galleries
 */
const Students: React.FC = () => {
  const theme = useTheme();

  // Benefits and responsibilities for core membership tier
  const coreMemberPoints = {
    title: "By becoming a Core Member, you will:",
    points: [
      "Lead cutting-edge AI projects and collaborate with industry partners",
      "Gain hands-on experience with advanced machine learning technologies",
      "Build a strong professional network in the AI community"
    ]
  };

  // Benefits and responsibilities for Technical Project Manager tier
  const tpmPoints = {
    title: "As a Technical Project Manager, you will:",
    points: [
      "Develop leadership skills managing cross-functional AI teams",
      "Bridge technical development with project management expertise",
      "Drive innovation and project success in AI initiatives"
    ]
  };

  // Images for the community gallery section
  const galleryImages = [
    { src: cucai1, alt: "CUCAI 24" },
    { src: cucai2, alt: "CUCAI 24" },
    { src: cucai3, alt: "CUCAI 24" },
    { src: cucai4, alt: "CUCAI 24" },
    { src: cucai5, alt: "CUCAI 24" },
    { src: cucai6, alt: "CUCAI 24" },
    { src: cucai7, alt: "CUCAI 24" },
    { src: cucai8, alt: "CUCAI 24" },
  ];

  const socialLinks = [
    {
      icon: <TwitterIcon fontSize="large" />,
      href: "https://twitter.com/wataiteam",
      label: "Twitter"
    },
    {
      icon: <LinkedInIcon fontSize="large" />,
      href: "https://www.linkedin.com/company/wat-ai/",
      label: "LinkedIn"
    },
    {
      icon: <InstagramIcon fontSize="large" />,
      href: "https://www.instagram.com/wataiteam/",
      label: "Instagram"
    }
  ];

  return (    <Box
      sx={{
        backgroundColor: "transparent",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Hero Section */}
      <UnifiedHero
        title="Join WAT.ai"
        subtitle="For Students"
        description="At WAT.ai, you'll have unprecedented access to cutting-edge AI projects and research opportunities. Our strong connections with faculty members often lead to research assistant positions for our members. Work alongside industry partners, develop practical skills, and be part of groundbreaking AI initiatives."
        variant="centered"
      />

      {/* Core Member Section */}
      <UnifiedSection
        backgroundColor="paper"
        minHeight="80vh"
        centerContent
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "flex-start",
            gap: 8,
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Content */}
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
              <GroupsIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
              <SubsectionTitle>Core Member</SubsectionTitle>
            </Box>
            
            <StyledBulletPoints {...coreMemberPoints} align="left" />
            
            <Box sx={{ mt: 8, textAlign: { xs: "center", md: "left" } }}>
              <BodyText sx={{ color: theme.palette.primary.main, mb: 3, fontWeight: 600 }}>
                Interested in applying? Check our socials for updates!
              </BodyText>
              <Box sx={{ display: "flex", gap: 3, justifyContent: { xs: "center", md: "flex-start" } }}>
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: theme.palette.text.primary,
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {social.icon}
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Images */}
          <Box sx={{ 
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 4,
            height: "100%",
          }}>
            <Box
              component="img"
              src={cm1}
              alt="Core Member 1"
              sx={{
                width: "100%",
                height: "280px",
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: theme.shadows[4],
              }}
            />
            <Box
              component="img"
              src={cm2}
              alt="Core Member 2"
              sx={{
                width: "100%",
                height: "280px",
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: theme.shadows[4],
              }}
            />
          </Box>
        </Box>
      </UnifiedSection>

      {/* TPM Section */}
      <UnifiedSection
        backgroundColor="transparent"
        minHeight="80vh"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row-reverse" },
            alignItems: "flex-start",
            gap: 8,
          }}
        >
          {/* Content */}
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
              <ManageAccountsIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
              <SubsectionTitle>Technical Project Manager</SubsectionTitle>
            </Box>
            
            <StyledBulletPoints {...tpmPoints} align="left" />
            
            <Box sx={{ mt: 8, textAlign: { xs: "center", md: "left" } }}>
              <BodyText sx={{ color: theme.palette.primary.main, mb: 3, fontWeight: 600 }}>
                Interested in applying? Check our socials for updates!
              </BodyText>
              <Box sx={{ display: "flex", gap: 3, justifyContent: { xs: "center", md: "flex-start" } }}>
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: theme.palette.text.primary,
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {social.icon}
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Placeholder for TPM Images */}
          <Box sx={{ 
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 4,
            height: "100%",
          }}>
            <UnifiedCard
              variant="subtle"
              padding={6}
              borderRadius="12px"
              minHeight="280px"
            >
              <Box sx={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                height: "100%",
                color: theme.palette.text.secondary,
                fontSize: "1.1rem"
              }}>
                TPM Image Coming Soon
              </Box>
            </UnifiedCard>
            <UnifiedCard
              variant="subtle"
              padding={6}
              borderRadius="12px"
              minHeight="280px"
            >
              <Box sx={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                height: "100%",
                color: theme.palette.text.secondary,
                fontSize: "1.1rem"
              }}>
                TPM Image Coming Soon
              </Box>
            </UnifiedCard>
          </Box>
        </Box>
      </UnifiedSection>

      {/* Community Gallery Section */}
      <UnifiedSection
        backgroundColor="paper"
        minHeight="60vh"
        centerContent
      >
        <Box sx={{ textAlign: "center" }}>
          <SectionTitle sx={{ mb: 6 }}>
            Our Community
          </SectionTitle>
          <BodyLarge sx={{ mb: 8, maxWidth: "800px", margin: "0 auto" }}>
            Join a vibrant community of AI enthusiasts, researchers, and innovators. 
            From conferences to collaborative projects, we're building the future of AI together.
          </BodyLarge>
          <ImageGallery images={galleryImages} />
        </Box>
      </UnifiedSection>

      {/* CTA Section */}
      <UnifiedSection
        backgroundColor="transparent"
        minHeight="40vh"
        centerContent
      >
        <Box sx={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <SectionTitle sx={{ mb: 4 }}>
            Ready to Get Started?
          </SectionTitle>
          <BodyLarge sx={{ mb: 8, maxWidth: "600px", margin: "0 auto 4rem auto" }}>
            Follow us on social media for application updates and join our growing community of AI innovators.
          </BodyLarge>
          <Box 
            sx={{ 
              display: "flex", 
              gap: { xs: 2, md: 3 }, 
              justifyContent: "center", 
              flexWrap: "wrap",
              "& > *": {
                minWidth: { xs: "140px", md: "160px" }
              }
            }}
          >
            {socialLinks.map((social, index) => (
              <UnifiedButton
                key={index}
                variant="outlined"
                size="large"
                href={social.href}
                startIcon={social.icon}
              >
                Follow on {social.label}
              </UnifiedButton>
            ))}
          </Box>
        </Box>
      </UnifiedSection>
    </Box>
  );
};

export default Students;
