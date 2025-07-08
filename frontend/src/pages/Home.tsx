import React, { memo } from "react";
import Box from "@mui/material/Box";
import { ReactComponent as Logo } from "../assets/wat_ai_logo.svg";
import TechSlideshow from "../components/TechSlideshow";
import { useTheme } from "@mui/material/styles";
import { HeroTitle, SectionTitle, SubsectionTitle, BodyLarge, BodyText } from "../components/Typography";
import UnifiedSection from "../components/UnifiedSection";
import UnifiedCard from "../components/UnifiedCard";
import UnifiedButton from "../components/UnifiedButton";
import UnifiedStats from "../components/UnifiedStats";

// Memoized component to prevent unnecessary re-renders
const HomePage: React.FC = memo(() => {
  const theme = useTheme();

  const stats = [
    { number: "XX+", label: "Active Members", description: "Students & researchers" },
    { number: "XX+", label: "AI Projects", description: "Completed successfully" },
    { number: "XX+", label: "Publications", description: "Academic papers" },
    { number: "XX+", label: "Industry Partners", description: "Collaborations" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Hero Section */}
      <Box
        component="section"
        sx={{
          textAlign: "center",
          py: 0,
          px: { xs: 2, sm: 3, md: 4 },
          minHeight: "100vh",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: theme.palette.primary.contrastText,
          clipPath: { 
            xs: "polygon(0 0, 100% 0, 100% 92%, 0 100%)", 
            md: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" 
          },
          zIndex: 1,
          position: "relative",
          marginTop: { xs: "-60px", md: "-80px" },
        }}
      >
        <Logo
          style={{
            display: "block",
            margin: "0 auto",
            width: "min(80vw, 300px)",
            maxWidth: "300px",
            minWidth: "200px",
            height: "auto",
            filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.2))",
          }}
        />
        <Box sx={{ mt: { xs: 3, md: 4 }, px: { xs: 2, sm: 3 } }}>
          <HeroTitle sx={{ 
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem", lg: "3.5rem" },
            lineHeight: { xs: 1.2, md: 1.1 },
            px: { xs: 1, sm: 2 }
          }}>
            Fostering the Future of AI at Waterloo
          </HeroTitle>
        </Box>
        <Box sx={{ mt: { xs: 3, md: 4 }, px: { xs: 2, sm: 3 } }}>
          <UnifiedButton
            variant="primary"
            size="large"
            to="/students"
            endIcon={<Box component="span">❱</Box>}
          >
            Get Involved
          </UnifiedButton>
        </Box>
      </Box>

      {/* About Us Section */}
      <UnifiedSection
        backgroundColor="transparent"
        minHeight="80vh"
        padding={8}
      >
        <Box sx={{ textAlign: "center" }}>
          <SectionTitle sx={{ mb: { xs: 4, sm: 5, md: 6 } }}>
            About Us
          </SectionTitle>
          
          <UnifiedCard
            variant="elevated"
            padding={5}
          >
            <SubsectionTitle sx={{ 
              textAlign: "center", 
              mb: { xs: 3, sm: 4 },
              color: theme.palette.text.primary,
            }}>
              Fostering The Future Of AI Talent At The University of Waterloo
            </SubsectionTitle>
            
            <BodyLarge sx={{ 
              textAlign: "center", 
              mb: { xs: 3, sm: 4 }, 
              maxWidth: "800px", 
              margin: "0 auto",
              color: theme.palette.text.primary,
            }}>
              WAT.ai is a student-run Artificial Intelligence (AI) Organization at
              the University of Waterloo and the undergraduate student body of the{" "}
              <Box
                component="a"
                href="https://uwaterloo.ca/artificial-intelligence-institute/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: theme.palette.primary.main,
                  textDecoration: "none",
                  fontWeight: 500,
                  borderBottom: `1px solid ${theme.palette.primary.main}40`,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: theme.palette.primary.light || theme.palette.primary.main,
                    borderBottomColor: theme.palette.primary.main,
                  },
                }}
              >
                Waterloo AI Institute
              </Box>{" "}
              and member of the{" "}
              <Box
                component="a"
                href="https://uwaterloo.ca/sedra-student-design-centre/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: theme.palette.primary.main,
                  textDecoration: "none",
                  fontWeight: 500,
                  borderBottom: `1px solid ${theme.palette.primary.main}40`,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: theme.palette.primary.light || theme.palette.primary.main,
                    borderBottomColor: theme.palette.primary.main,
                  },
                }}
              >
                Sedra Student Design Centre (SSDC)
              </Box>.
            </BodyLarge>

            <BodyText sx={{ 
              textAlign: "center", 
              mb: { xs: 4, sm: 5 }, 
              maxWidth: "700px", 
              margin: "0 auto",
              color: theme.palette.text.secondary,
            }}>
              Our goal is to establish an environment to enable the continued
              growth of AI talent and suitable access to opportunities within the
              Waterloo community. We provide opportunities for undergraduate and
              graduate students to engage in impactful projects through
              collaboration with companies and internal research.
            </BodyText>

            <UnifiedButton
              variant="outlined"
              size="large"
              to="/team"
              endIcon={<Box component="span">❱</Box>}
            >
              Meet The Team
            </UnifiedButton>
          </UnifiedCard>
        </Box>
      </UnifiedSection>

      {/* Stats Section */}
      <UnifiedSection
        backgroundColor="paper"
        minHeight="60vh"
        centerContent
        padding={8}
      >
        <Box sx={{ textAlign: "center" }}>
          <SectionTitle sx={{ mb: { xs: 4, sm: 5, md: 6 } }}>
            Our Impact
          </SectionTitle>
          <BodyLarge sx={{ mb: { xs: 6, sm: 7, md: 8 }, maxWidth: "600px", margin: "0 auto" }}>
            Join a thriving community of AI enthusiasts making real impact 
            through research, collaboration, and innovation.
          </BodyLarge>
          <UnifiedStats stats={stats} />
        </Box>
      </UnifiedSection>

      {/* Our Partners Section */}
      <UnifiedSection
        backgroundColor="transparent"
        minHeight="60vh"
        centerContent
        padding={8}
      >
        <Box sx={{ textAlign: "center", width: "100%" }}>
          <SectionTitle sx={{ 
            color: theme.palette.text.secondary,
            mb: { xs: 4, sm: 5, md: 6 },
          }}>
            Our Partners
          </SectionTitle>
          <BodyLarge sx={{ mb: { xs: 4, sm: 5, md: 6 }, maxWidth: "600px", margin: "0 auto" }}>
            We collaborate with leading companies and organizations to provide 
            our members with real-world AI experience and opportunities.
          </BodyLarge>
          <Box sx={{ 
            width: "100%",
            overflow: "hidden",
            px: { xs: 0, sm: 1, md: 2 }
          }}>
            <TechSlideshow />
          </Box>
        </Box>
      </UnifiedSection>

      {/* Call to Action Section */}
      <UnifiedSection
        backgroundColor="paper"
        minHeight="50vh"
        centerContent
        padding={8}
      >
        <Box sx={{ textAlign: "center" }}>
          <SectionTitle sx={{ mb: { xs: 3, sm: 4 } }}>
            Ready to Join Us?
          </SectionTitle>
          <BodyLarge sx={{ mb: { xs: 4, sm: 5, md: 6 }, maxWidth: "600px", margin: "0 auto" }}>
            Whether you're a student looking to dive into AI, a professor seeking research collaborations, 
            or a company interested in partnerships, we'd love to work with you.
          </BodyLarge>
          <Box sx={{ display: "flex", gap: { xs: 2, sm: 3 }, justifyContent: "center", flexWrap: "wrap" }}>
            <UnifiedButton
              variant="primary"
              size="large"
              to="/students"
            >
              For Students
            </UnifiedButton>
            <UnifiedButton
              variant="outlined"
              size="large"
              to="/partnerships"
            >
              For Partners
            </UnifiedButton>
            <UnifiedButton
              variant="text"
              size="large"
              to="/contact"
            >
              Get in Touch
            </UnifiedButton>
          </Box>
        </Box>
      </UnifiedSection>
    </Box>
  );
});

export default HomePage;
