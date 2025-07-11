import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import DiscordIcon from "../components/DiscordIcon";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import { SubsectionTitle, BodyLarge } from "../components/Typography";
import StyledBulletPoints from "../components/StyledBulletPoints";
import ImageGallery from "../components/ImageGallery";
import UnifiedSection from "../components/UnifiedSection";
import UnifiedCard from "../components/UnifiedCard";
import UnifiedHero from "../components/UnifiedHero";
import UnifiedButton from "../components/UnifiedButton";
import FAQ from "../components/FAQ";

// Students page: Info for student members, opportunities, and joining. Updated with new copy for 2024.

// Import images
import cucai1 from "../assets/studentLandingPage/cucai1_opt.jpg"
import cucai2 from "../assets/studentLandingPage/cucai2_opt.jpg"
import cucai3 from "../assets/studentLandingPage/cucai3_opt.jpg"
import cucai4 from "../assets/studentLandingPage/cucai4_opt.jpg"
import cucai5 from "../assets/studentLandingPage/cucai5_opt.jpg"
import cucai6 from "../assets/studentLandingPage/cucai6_opt.jpg"
import cucai7 from "../assets/studentLandingPage/cucai7_opt.jpg"
import cucai8 from "../assets/studentLandingPage/cucai8_opt.jpg"
import highImpact from "../assets/studentLandingPage/high_impact_opt.jpg"
import workshops from "../assets/studentLandingPage/workshops_opt.jpg"
import network from "../assets/studentLandingPage/network_opt.jpg"

// Custom image component with smooth loading fade-in effect
const LoadingImage: React.FC<{
  src: string;
  alt: string;
  sx?: any;
}> = ({ src, alt, sx }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
      {/* Loading skeleton with shimmer effect */}
      {!imageLoaded && !imageError && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite",
            "@keyframes shimmer": {
              "0%": {
                backgroundPosition: "-200% 0"
              },
              "100%": {
                backgroundPosition: "200% 0"
              }
            }
          }}
        />
      )}
      
      {/* Actual image with fade-in */}
      <Box
        component="img"
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
        sx={{
          ...sx,
          opacity: imageLoaded ? 1 : 0,
          transition: "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
      
      {/* Error fallback */}
      {imageError && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #f5f5f5, #e0e0e0)",
            color: "#666",
            fontSize: "0.9rem"
          }}
        >
          Image unavailable
        </Box>
      )}
    </Box>
  );
};

/**
 * Updated Student engagement page with unified design system
 * Features opportunities, benefits, and community showcase
 */
const Students: React.FC = () => {
  const theme = useTheme();

  // Our three main opportunity areas
  const projectOpportunities = {
    title: "Work on High-Impact AI Projects",
    points: [
      "We run 8-month long projects in engineering and research initiatives in areas like GenAI, computer vision, NLP, healthcare, and more. These give you the chance to tackle real world problems and publish your work.",
      "Less experienced students can apply as core members to learn alongside peers. More experienced students can build their leadership experience by applying as technical project managers."
    ]
  };

  const workshopOpportunities = {
    title: "Attend AI Workshops & Events",
    points: [
      "Learn and teach machine learning through beginner-friendly tutorials, advanced sessions, and cross-disciplinary applications in healthcare, robotics, and beyond.",
      "We have opportunities for both beginners looking to get ML skills and more experienced students looking for project management and mentorship skills."
    ]
  };

  const networkingOpportunities = {
    title: "Collaborate and Network",
    points: [
      "Join a tight-knit community of ambitious builders and researchers. We give students the opportunities to attend a national AI conference with industry leaders, as well as access other resources like mentorship, funding, and more.",
      "We also connect our top performing students from our projects to professors and industry partners recruiting AI talent."
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


  const faqItems = [
    {
      question: "How do I join WAT.ai?",
      answer: "We publish application core member application forms in the starting month of every term and technical project manager application forms in the final month of every term. Core members apply to their top 3 desired projects and technical project managers apply with a project idea and take a management skills test. Follow us on Instagram or Linkedin for announcements on the latest applications."
    },
    {
      question: "I don't have an AI or ML background. Can I still join?",
      answer: "Absolutely! Many of our members started with little or no AI experience. We offer beginner-friendly workshops and projects to help you build confidence and skills from the ground up. We reserve one or two spots on each team for beginners and have other workshops that don't require applications."
    },
    {
      question: "How do projects work at WAT.ai?",
      answer: "Every term, we launch new 8 month projects that involve a team of 5-10 core members and 2 technical project managers. It is expected that all team members contribute over their study AND coop term. All projects target different end applications, with some focusing more on building demos and others focusing more on publishing conference papers. Core members will be led by technical project managers through onboarding, research, and implementation phases over the 8 months. Technical project managers work with our executive team to identify technical resources needed and a project roadmap in the month prior to the start of the project."
    },
    {
      question: "What resources are available to members?",
      answer: "WAT.ai members get access to compute resources, mentorship, technical guides, and specialized tools for building ML/AI systems. We also support members interested in submitting to conferences or starting publications."
    },
    {
      question: "What events does WAT.ai host?",
      answer: "We run technical workshops, reading groups, speaker sessions, and networking events. Our events connect research, industry, and education under one roof."
    }
  ];

  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* Hero Section */}
      <UnifiedHero
        title="Join WAT.ai – Waterloo's Hub for Student-Led AI Innovation"
        subtitle="Learn. Build. Research. Publish."
        description="WAT.ai is the University of Waterloo's student-led artificial intelligence organization focused on hands-on learning, real world impact, and meaningful research. Whether you're just curious about machine learning, ready to publish your first paper, or looking to improve your ML skillset with project management experience, WAT.ai is a space to grow your skills and collaborate with others who are passionate about AI."
        variant="centered"
      />

      {/* Our Opportunities Section */}
      <UnifiedSection
        backgroundColor="paper"
        minHeight="90vh"
        centerContent
      >
        <Box sx={{ 
          textAlign: "center", 
          maxWidth: "1400px", 
          margin: "0 auto",
          px: { xs: 2, sm: 3, md: 4 }
        }}>
          <SubsectionTitle sx={{ mb: { xs: 6, md: 8 } }}>
            Our Opportunities
          </SubsectionTitle>
          
          {/* Responsive alternating layout */}
          <Box sx={{ position: "relative" }}>
            {/* Project Work - Left aligned */}
            <Box sx={{ 
              display: "flex", 
              alignItems: "stretch", 
              mb: { xs: 8, md: 12 },
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 4, md: 6 }
            }}>
              <Box sx={{ 
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}>
                <Box sx={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: { xs: "center", md: "flex-start" },
                  mb: 3,
                  p: 2,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.primary.main}10)`,
                  border: `2px solid ${theme.palette.primary.main}30`
                }}>
                  <CodeIcon sx={{ 
                    fontSize: { xs: 36, md: 40 }, 
                    color: theme.palette.primary.main,
                    mr: 2
                  }} />
                  <Box sx={{ 
                    fontSize: { xs: "1.1rem", md: "1.3rem" }, 
                    fontWeight: 600,
                    color: theme.palette.primary.main,
                    textAlign: { xs: "center", md: "left" },
                    lineHeight: 1.2
                  }}>
                    {projectOpportunities.title}
                  </Box>
                </Box>
                <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <StyledBulletPoints 
                    title=""
                    points={projectOpportunities.points}
                    align="left" 
                  />
                </Box>
              </Box>
              <Box sx={{ 
                flex: 1,
                minHeight: { xs: 250, md: 280 }
              }}>
                <UnifiedCard
                  variant="elevated"
                  padding={0}
                  fullHeight
                >
                  <Box sx={{
                    height: "100%",
                    minHeight: { xs: 250, md: 280 },
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 3,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.primary.main}05)`,
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}08, transparent 60%)`,
                      zIndex: 1,
                      opacity: 0,
                      transition: "opacity 0.4s ease"
                    },
                    "&:hover::before": {
                      opacity: 1
                    }
                  }}>
                    <LoadingImage
                      src={highImpact}
                      alt="High Impact AI Projects"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                        filter: "brightness(1.1) contrast(1.05) saturate(1.1)",
                        "&:hover": {
                          transform: "scale(1.08)",
                          filter: "brightness(1.15) contrast(1.1) saturate(1.2)"
                        }
                      }}
                    />
                    <Box sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}12, transparent 50%, ${theme.palette.primary.main}08)`,
                      zIndex: 2,
                      mixBlendMode: "multiply",
                      opacity: 0.7
                    }} />
                    <Box sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "40%",
                      background: `linear-gradient(to top, ${theme.palette.primary.main}20, transparent)`,
                      zIndex: 3
                    }} />
                  </Box>
                </UnifiedCard>
              </Box>
            </Box>

            {/* Workshops - Right aligned on desktop */}
            <Box sx={{ 
              display: "flex", 
              alignItems: "stretch", 
              mb: { xs: 8, md: 12 },
              flexDirection: { xs: "column", md: "row-reverse" },
              gap: { xs: 4, md: 6 }
            }}>
              <Box sx={{ 
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}>
                <Box sx={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: { xs: "center", md: "flex-start" },
                  mb: 3,
                  p: 2,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${theme.palette.warning.main}20, ${theme.palette.warning.main}10)`,
                  border: `2px solid ${theme.palette.warning.main}30`
                }}>
                  <SchoolIcon sx={{ 
                    fontSize: { xs: 36, md: 40 }, 
                    color: theme.palette.warning.main,
                    mr: 2
                  }} />
                  <Box sx={{ 
                    fontSize: { xs: "1.1rem", md: "1.3rem" }, 
                    fontWeight: 600,
                    color: theme.palette.warning.main,
                    textAlign: { xs: "center", md: "left" },
                    lineHeight: 1.2
                  }}>
                    {workshopOpportunities.title}
                  </Box>
                </Box>
                <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <StyledBulletPoints 
                    title=""
                    points={workshopOpportunities.points}
                    align="left" 
                  />
                </Box>
              </Box>
              <Box sx={{ 
                flex: 1,
                minHeight: { xs: 250, md: 280 }
              }}>
                <UnifiedCard
                  variant="elevated"
                  padding={0}
                  fullHeight
                >
                  <Box sx={{
                    height: "100%",
                    minHeight: { xs: 250, md: 280 },
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 3,
                    background: `linear-gradient(135deg, ${theme.palette.warning.main}10, ${theme.palette.warning.main}05)`,
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, ${theme.palette.warning.main}08, transparent 60%)`,
                      zIndex: 1,
                      opacity: 0,
                      transition: "opacity 0.4s ease"
                    },
                    "&:hover::before": {
                      opacity: 1
                    }
                  }}>
                    <LoadingImage
                      src={workshops}
                      alt="AI Workshops & Events"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                        filter: "brightness(1.1) contrast(1.05) saturate(1.1)",
                        "&:hover": {
                          transform: "scale(1.08)",
                          filter: "brightness(1.15) contrast(1.1) saturate(1.2)"
                        }
                      }}
                    />
                    <Box sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, ${theme.palette.warning.main}12, transparent 50%, ${theme.palette.warning.main}08)`,
                      zIndex: 2,
                      mixBlendMode: "multiply",
                      opacity: 0.7
                    }} />
                    <Box sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "40%",
                      background: `linear-gradient(to top, ${theme.palette.warning.main}20, transparent)`,
                      zIndex: 3
                    }} />
                  </Box>
                </UnifiedCard>
              </Box>
            </Box>

            {/* Networking - Left aligned */}
            <Box sx={{ 
              display: "flex", 
              alignItems: "stretch", 
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 4, md: 6 }
            }}>
              <Box sx={{ 
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}>
                <Box sx={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: { xs: "center", md: "flex-start" },
                  mb: 3,
                  p: 2,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, #0077B520, #0077B510)`,
                  border: `2px solid #0077B530`
                }}>
                  <LinkedInIcon sx={{ 
                    fontSize: { xs: 36, md: 40 }, 
                    color: "#0077B5",
                    mr: 2
                  }} />
                  <Box sx={{ 
                    fontSize: { xs: "1.1rem", md: "1.3rem" }, 
                    fontWeight: 600,
                    color: "#0077B5",
                    textAlign: { xs: "center", md: "left" },
                    lineHeight: 1.2
                  }}>
                    {networkingOpportunities.title}
                  </Box>
                </Box>
                <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <StyledBulletPoints 
                    title=""
                    points={networkingOpportunities.points}
                    align="left" 
                  />
                </Box>
              </Box>
              <Box sx={{ 
                flex: 1,
                minHeight: { xs: 250, md: 280 }
              }}>
                <UnifiedCard
                  variant="elevated"
                  padding={0}
                  fullHeight
                >
                  <Box sx={{
                    height: "100%",
                    minHeight: { xs: 250, md: 280 },
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 3,
                    background: `linear-gradient(135deg, #0077B510, #0077B505)`,
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, #0077B508, transparent 60%)`,
                      zIndex: 1,
                      opacity: 0,
                      transition: "opacity 0.4s ease"
                    },
                    "&:hover::before": {
                      opacity: 1
                    }
                  }}>
                    <LoadingImage
                      src={network}
                      alt="Collaborate and Network"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                        filter: "brightness(1.1) contrast(1.05) saturate(1.1)",
                        "&:hover": {
                          transform: "scale(1.08)",
                          filter: "brightness(1.15) contrast(1.1) saturate(1.2)"
                        }
                      }}
                    />
                    <Box sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, #0077B512, transparent 50%, #0077B508)`,
                      zIndex: 2,
                      mixBlendMode: "multiply",
                      opacity: 0.7
                    }} />
                    <Box sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "40%",
                      background: `linear-gradient(to top, #0077B520, transparent)`,
                      zIndex: 3
                    }} />
                  </Box>
                </UnifiedCard>
              </Box>
            </Box>
          </Box>
        </Box>
      </UnifiedSection>

      {/* Community Gallery Section */}
      <UnifiedSection
        backgroundColor="transparent"
        minHeight="80vh"
        centerContent
      >
        <Box sx={{ 
          textAlign: "center", 
          maxWidth: { xs: "100%", sm: "95%", md: "1200px" }, 
          margin: "0 auto",
          px: { xs: 1, sm: 2, md: 3 }
        }}>
          <SubsectionTitle sx={{ 
            mb: { xs: 2, sm: 3, md: 4 },
            px: { xs: 2, sm: 0 }
          }}>
            Join Our Community
          </SubsectionTitle>
          
          <BodyLarge sx={{ 
            mb: { xs: 4, sm: 6, md: 8 }, 
            maxWidth: "800px", 
            margin: "0 auto",
            px: { xs: 3, sm: 2, md: 0 },
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
            lineHeight: { xs: 1.5, md: 1.6 }
          }}>
            Join a vibrant community of AI enthusiasts, researchers, and innovators. 
            From conferences to collaborative projects, we're building the future of AI together.
          </BodyLarge>
          
          <Box sx={{ 
            px: { xs: 0, sm: 1, md: 2 },
            mb: { xs: 4, sm: 6, md: 8 }
          }}>
            <ImageGallery images={galleryImages} />
          </Box>
        </Box>
      </UnifiedSection>

      {/* FAQ Section */}
      <UnifiedSection
        backgroundColor="paper"
        minHeight="80vh"
        centerContent
      >
        <FAQ items={faqItems} title="FAQ" />
      </UnifiedSection>

      {/* CTA Section */}
      <UnifiedSection
        backgroundColor="transparent"
        minHeight="50vh"
        centerContent
      >
        <Box sx={{ textAlign: "center", maxWidth: "900px", margin: "0 auto", px: { xs: 2, sm: 3, md: 0 } }}>
          <SubsectionTitle sx={{ mb: { xs: 3, sm: 4, md: 5 } }}>
            Still have questions?
          </SubsectionTitle>
          <BodyLarge sx={{ 
            mb: { xs: 6, sm: 7, md: 8 }, 
            maxWidth: "600px", 
            margin: "0 auto",
            px: { xs: 1, sm: 0 }
          }}>
            Reach out to us via discord or email us at contact@watai.ca. We'd love to hear from you!
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
            <UnifiedButton
              variant="primary"
              size="large"
              href="https://discord.com/invite/Hn3XkK83tJ"
              startIcon={<DiscordIcon />}
            >
              Join Discord
            </UnifiedButton>
            <UnifiedButton
              variant="outlined"
              size="large"
              href="mailto:contact@watai.ca"
            >
              Email Us
            </UnifiedButton>
          </Box>
        </Box>
      </UnifiedSection>
    </Box>
  );
};

export default Students;
