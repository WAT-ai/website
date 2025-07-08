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
import cucai1 from "../assets/studentLandingPage/cucai1_opt.jpg"
import cucai2 from "../assets/studentLandingPage/cucai2_opt.jpg"
import cucai3 from "../assets/studentLandingPage/cucai3_opt.jpg"
import cucai4 from "../assets/studentLandingPage/cucai4_opt.jpg"
import cucai5 from "../assets/studentLandingPage/cucai5_opt.jpg"
import cucai6 from "../assets/studentLandingPage/cucai6_opt.jpg"
import cucai7 from "../assets/studentLandingPage/cucai7_opt.jpg"
import cucai8 from "../assets/studentLandingPage/cucai8_opt.jpg"
import cm1 from "../assets/studentLandingPage/cm1_opt.jpg"
import cm2 from "../assets/studentLandingPage/cm2_opt.jpg"

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
        <Box sx={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 6, sm: 8 },
              alignItems: "flex-start",
            }}
          >
            {/* Content */}
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
                <GroupsIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
                <SubsectionTitle>Core Member</SubsectionTitle>
              </Box>
              
              <StyledBulletPoints {...coreMemberPoints} align="left" />
              
              <Box sx={{ mt: { xs: 6, sm: 8 }, textAlign: { xs: "center", md: "left" } }}>
                <BodyText sx={{ color: theme.palette.primary.main, mb: 3, fontWeight: 600 }}>
                  Interested in applying? Check our socials for updates!
                </BodyText>
                <Box sx={{ 
                  display: "flex", 
                  gap: 3, 
                  justifyContent: { xs: "center", md: "flex-start" },
                  flexWrap: "wrap"
                }}>
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: theme.palette.text.primary,
                        transition: "color 0.2s ease",
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
              display: "flex",
              flexDirection: "column",
              gap: { xs: 3, sm: 4 },
              height: "100%",
            }}>
              <Box
                component="img"
                src={cm1}
                alt="Core Member 1"
                sx={{
                  width: "100%",
                  height: { xs: "200px", sm: "240px", md: "280px" },
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
                  height: { xs: "200px", sm: "240px", md: "280px" },
                  objectFit: "cover",
                  borderRadius: 2,
                  boxShadow: theme.shadows[4],
                }}
              />
            </Box>
          </Box>
        </Box>
      </UnifiedSection>

      {/* TPM Section */}
      <UnifiedSection
        backgroundColor="transparent"
        minHeight="80vh"
        centerContent
      >
        <Box sx={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 6, sm: 8 },
              alignItems: "flex-start",
            }}
          >
            {/* Placeholder for TPM Images - Left side on desktop */}
            <Box sx={{ 
              display: "flex",
              flexDirection: "column",
              gap: { xs: 3, sm: 4 },
              height: "100%",
              order: { xs: 2, md: 1 }
            }}>
              <Box sx={{ minHeight: { xs: "200px", sm: "240px", md: "280px" } }}>
                <UnifiedCard
                  variant="subtle"
                  padding={6}
                  borderRadius="12px"
                  fullHeight
                >
                  <Box sx={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    height: "100%",
                    color: theme.palette.text.secondary,
                    fontSize: { xs: "1rem", sm: "1.1rem" }
                  }}>
                    TPM Image Coming Soon
                  </Box>
                </UnifiedCard>
              </Box>
              <Box sx={{ minHeight: { xs: "200px", sm: "240px", md: "280px" } }}>
                <UnifiedCard
                  variant="subtle"
                  padding={6}
                  borderRadius="12px"
                  fullHeight
                >
                  <Box sx={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    height: "100%",
                    color: theme.palette.text.secondary,
                    fontSize: { xs: "1rem", sm: "1.1rem" }
                  }}>
                    TPM Image Coming Soon
                  </Box>
                </UnifiedCard>
              </Box>
            </Box>

            {/* Content - Right side on desktop */}
            <Box sx={{ order: { xs: 1, md: 2 } }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
                <ManageAccountsIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
                <SubsectionTitle>Technical Project Manager</SubsectionTitle>
              </Box>
              
              <StyledBulletPoints {...tpmPoints} align="left" />
              
              <Box sx={{ mt: { xs: 6, sm: 8 }, textAlign: { xs: "center", md: "left" } }}>
                <BodyText sx={{ color: theme.palette.primary.main, mb: 3, fontWeight: 600 }}>
                  Interested in applying? Check our socials for updates!
                </BodyText>
                <Box sx={{ 
                  display: "flex", 
                  gap: 3, 
                  justifyContent: { xs: "center", md: "flex-start" },
                  flexWrap: "wrap"
                }}>
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: theme.palette.text.primary,
                        transition: "color 0.2s ease",
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
          </Box>
        </Box>
      </UnifiedSection>

      {/* Community Gallery Section */}
      <UnifiedSection
        backgroundColor="paper"
        minHeight="60vh"
        centerContent
      >
        <Box sx={{ textAlign: "center", maxWidth: "1200px", margin: "0 auto" }}>
          <SectionTitle sx={{ mb: { xs: 4, sm: 5, md: 6 } }}>
            Our Community
          </SectionTitle>
          <BodyLarge sx={{ 
            mb: { xs: 6, sm: 7, md: 8 }, 
            maxWidth: "800px", 
            margin: "0 auto",
            px: { xs: 2, sm: 0 }
          }}>
            Join a vibrant community of AI enthusiasts, researchers, and innovators. 
            From conferences to collaborative projects, we're building the future of AI together.
          </BodyLarge>
          <Box sx={{ px: { xs: 1, sm: 2, md: 0 } }}>
            <ImageGallery images={galleryImages} />
          </Box>
        </Box>
      </UnifiedSection>

      {/* CTA Section */}
      <UnifiedSection
        backgroundColor="transparent"
        minHeight="50vh"
        centerContent
      >
        <Box sx={{ textAlign: "center", maxWidth: "900px", margin: "0 auto", px: { xs: 2, sm: 3, md: 0 } }}>
          <SectionTitle sx={{ mb: { xs: 3, sm: 4, md: 5 } }}>
            Ready to Get Started?
          </SectionTitle>
          <BodyLarge sx={{ 
            mb: { xs: 6, sm: 7, md: 8 }, 
            maxWidth: "600px", 
            margin: "0 auto",
            px: { xs: 1, sm: 0 }
          }}>
            Follow us on social media for application updates and join our growing community of AI innovators.
          </BodyLarge>
          <Box 
            sx={{ 
              display: "flex", 
              gap: { xs: 2, sm: 3, md: 4 }, 
              justifyContent: "center", 
              flexWrap: "wrap",
              "& > *": {
                minWidth: { xs: "140px", sm: "160px", md: "180px" },
                flex: { xs: "1 1 auto", sm: "0 1 auto" }
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
