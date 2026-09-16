/**
 * Home - Main landing page with hero, about, stats, partners, and CTA sections
 * Update stats array and section content as needed
 */
import React, { memo, useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { ReactComponent as Logo } from "../assets/wat_ai_logo.svg";
import TechSlideshow from "../components/TechSlideshow";
import { useTheme } from "@mui/material/styles";
import { HeroTitle, SectionTitle, SubsectionTitle, BodyLarge, BodyText } from "../components/Typography";
import UnifiedSection from "../components/UnifiedSection";
import UnifiedButton from "../components/UnifiedButton";

const AnimatedCounter: React.FC<{ value: string }> = ({ value }) => {
  const target = Number.parseInt(value, 10);
  const suffix = value.replace(/^\d+/, "");
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const element = counterRef.current;
    if (!element || Number.isNaN(target)) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(target);
      return;
    }

    let animationFrame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const duration = 1400;
        const startTime = performance.now();

        const animate = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(target * easedProgress));

          if (progress < 1) {
            animationFrame = window.requestAnimationFrame(animate);
          }
        };

        animationFrame = window.requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, [target]);

  return (
    <Box component="span" ref={counterRef} aria-label={value}>
      {count}{suffix}
    </Box>
  );
};

const HomePage: React.FC = memo(() => {
  const theme = useTheme();

  const sectionTitleSx = {
    color: theme.palette.text.primary,
    fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.35rem" },
    fontWeight: 750,
    lineHeight: 1.1,
    letterSpacing: "-0.04em",
    mb: { xs: 6, md: 8 },
    position: "relative",
    "&::after": {
      content: '""',
      display: "block",
      width: 72,
      height: 2,
      mt: 2.5,
      mx: "auto",
      background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
    },
  };

  // Key metrics displayed on homepage
  const stats = [
    { number: "450+", label: "Program Graduates", description: "Students & researchers" },
    { number: "40+", label: "AI Projects", description: "Completed successfully" },
    { number: "20+", label: "Publications", description: "Academic papers" },
    { number: "10+", label: "Industry Partners", description: "Collaborations" },
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
      <UnifiedSection
        backgroundColor="transparent"
        minHeight="92vh"
        centerContent
        padding={8}
      >
        <Box
          sx={{
            textAlign: "center",
            position: "relative",
            py: { xs: 5, md: 8 },
            "&::before": {
              content: '""',
              position: "absolute",
              width: { xs: 300, md: 560 },
              height: { xs: 260, md: 360 },
              top: "45%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: `radial-gradient(circle, ${theme.palette.primary.main}18, transparent 68%)`,
              filter: "blur(12px)",
              pointerEvents: "none",
              zIndex: -1,
            },
          }}
        >
          <Logo
            style={{
              display: "block",
              margin: "0 auto 2.5rem auto",
              width: "min(72vw, 270px)",
              maxWidth: "270px",
              minWidth: "180px",
              height: "auto",
              filter: "drop-shadow(0 10px 28px rgba(255, 206, 26, 0.12))",
            }}
          />
          <HeroTitle sx={{ 
            maxWidth: "900px",
            mx: "auto",
            fontSize: { xs: "2.35rem", sm: "3.25rem", md: "4.25rem" },
            fontWeight: 750,
            lineHeight: { xs: 1.12, md: 1.05 },
            letterSpacing: "-0.045em",
            px: { xs: 1, sm: 2 },
            mb: { xs: 4, md: 5 },
            color: theme.palette.primary.contrastText,
            textWrap: "balance",
          }}>
            Fostering the Future of AI at Waterloo
          </HeroTitle>
          <UnifiedButton
            variant="primary"
            size="large"
            to="/students"
            endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: "1.2em" }} />}
          >
            Get Involved
          </UnifiedButton>
        </Box>
      </UnifiedSection>

      {/* About Section */}
      <UnifiedSection
        backgroundColor="transparent"
        minHeight="75vh"
        padding={8}
        centerContent
      >
        <Box sx={{ textAlign: "center", maxWidth: "1100px", mx: "auto" }}>
          <SectionTitle sx={sectionTitleSx}>
            About Us
          </SectionTitle>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, sm: 5, md: 7 },
              borderRadius: { xs: 4, md: 6 },
              border: `1px solid ${theme.palette.primary.main}2B`,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}0D, rgba(20,20,20,0.76) 48%, rgba(12,12,12,0.68))`,
              backdropFilter: "blur(10px)",
              boxShadow: "0 24px 70px rgba(0,0,0,0.22)",
              overflow: "hidden",
            }}
          >
            <SubsectionTitle sx={{ 
              textAlign: "center", 
              maxWidth: "760px",
              mx: "auto",
              mb: { xs: 3, sm: 4 },
              color: theme.palette.text.primary,
              fontSize: { xs: "1.45rem", sm: "1.85rem", md: "2.2rem" },
              fontWeight: 700,
              lineHeight: 1.25,
              letterSpacing: "-0.025em",
              textWrap: "balance",
            }}>
              Fostering The Future Of AI Talent At The University of Waterloo
            </SubsectionTitle>
            <BodyLarge sx={{ 
              textAlign: "center", 
              mb: { xs: 3, sm: 4 }, 
              maxWidth: "800px", 
              mx: "auto",
              color: theme.palette.text.primary,
              fontSize: { xs: "1rem", sm: "1.12rem" },
              lineHeight: 1.75,
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
              mx: "auto",
              color: theme.palette.text.secondary,
              fontSize: { xs: "0.96rem", sm: "1.05rem" },
              lineHeight: 1.75,
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
              endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: "1.2em" }} />}
            >
              Meet The Team
            </UnifiedButton>
          </Box>
        </Box>
      </UnifiedSection>

      {/* Stats Section */}
      <UnifiedSection
        backgroundColor="transparent"
        minHeight="65vh"
        centerContent
        padding={8}
      >
        <Box sx={{ textAlign: "center", maxWidth: "1180px", mx: "auto" }}>
          <SectionTitle sx={sectionTitleSx}>
            Our Impact
          </SectionTitle>
          <BodyLarge sx={{
            mb: { xs: 5, md: 7 },
            maxWidth: "650px",
            mx: "auto",
            color: theme.palette.text.secondary,
            lineHeight: 1.75,
            textWrap: "balance",
          }}>
            Join a thriving community of AI enthusiasts making real impact 
            through research, collaboration, and innovation.
          </BodyLarge>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
              borderTop: `1px solid ${theme.palette.primary.main}30`,
              borderBottom: `1px solid ${theme.palette.primary.main}30`,
            }}
          >
            {stats.map((stat, index) => (
              <Box
                key={stat.label}
                sx={{
                  py: { xs: 4, md: 5 },
                  px: { xs: 1.5, sm: 3 },
                  position: "relative",
                  borderRight: {
                    xs: index % 2 === 0 ? `1px solid ${theme.palette.primary.main}24` : "none",
                    md: index < stats.length - 1 ? `1px solid ${theme.palette.primary.main}24` : "none",
                  },
                  borderBottom: {
                    xs: index < 2 ? `1px solid ${theme.palette.primary.main}24` : "none",
                    md: "none",
                  },
                }}
              >
                <Box sx={{ color: theme.palette.primary.main, fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, fontWeight: 750, lineHeight: 1, mb: 1.5, letterSpacing: "-0.04em" }}>
                  <AnimatedCounter value={stat.number} />
                </Box>
                <Box sx={{ color: theme.palette.text.primary, fontSize: { xs: "0.86rem", sm: "1rem" }, fontWeight: 650, mb: 0.75 }}>
                  {stat.label}
                </Box>
                <Box sx={{ color: theme.palette.text.secondary, fontSize: { xs: "0.72rem", sm: "0.82rem" } }}>
                  {stat.description}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </UnifiedSection>

      {/* Partners Section */}
      <UnifiedSection
        backgroundColor="transparent"
        minHeight="60vh"
        centerContent
        padding={8}
      >
        <Box sx={{ textAlign: "center", width: "100%" }}>
          <SectionTitle sx={sectionTitleSx}>
            Our Partners
          </SectionTitle>
          <BodyLarge sx={{
            mb: { xs: 4, sm: 5, md: 6 },
            maxWidth: "640px",
            mx: "auto",
            color: theme.palette.text.secondary,
            lineHeight: 1.75,
            textWrap: "balance",
          }}>
            We collaborate with leading companies and organizations to provide 
            our members with real-world AI experience and opportunities.
          </BodyLarge>
          <Box sx={{ 
            width: "100%",
            overflow: "hidden",
            px: { xs: 0, sm: 1, md: 2 },
            py: 2,
            borderTop: `1px solid ${theme.palette.primary.main}20`,
            borderBottom: `1px solid ${theme.palette.primary.main}20`,
          }}>
            <TechSlideshow />
          </Box>
        </Box>
      </UnifiedSection>

      {/* CTA Section */}
      <UnifiedSection
        backgroundColor="transparent"
        minHeight="50vh"
        centerContent
        padding={8}
      >
        <Box sx={{ textAlign: "center", maxWidth: "900px", mx: "auto", px: { xs: 2, sm: 4 } }}>
          <SectionTitle sx={sectionTitleSx}>
            Ready to Join Us?
          </SectionTitle>
          <BodyLarge sx={{
            mb: { xs: 4, sm: 5, md: 6 },
            maxWidth: "680px",
            mx: "auto",
            color: theme.palette.text.secondary,
            lineHeight: 1.75,
            textWrap: "balance",
          }}>
            Whether you're a student looking to dive into AI, a professor seeking research collaborations, 
            or a company interested in partnerships, we'd love to work with you.
          </BodyLarge>
          <Box sx={{
            display: "flex",
            gap: { xs: 2, sm: 2.5 },
            justifyContent: "center",
            flexWrap: "wrap",
            "& > *": {
              minWidth: { xs: "100%", sm: "170px" },
              fontWeight: "700 !important",
            },
          }}>
            <UnifiedButton
              variant="primary"
              size="large"
              to="/students"
            >
              For Students
            </UnifiedButton>
            <UnifiedButton
              variant="primary"
              size="large"
              to="/partnerships"
            >
              For Partners
            </UnifiedButton>
            <UnifiedButton
              variant="primary"
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
