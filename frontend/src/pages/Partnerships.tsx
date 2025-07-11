import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import BusinessIcon from '@mui/icons-material/Business';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SearchIcon from '@mui/icons-material/Search';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { SubsectionTitle, BodyLarge, BodyText } from "../components/Typography";
import UnifiedSection from "../components/UnifiedSection";
import UnifiedCard from "../components/UnifiedCard";
import UnifiedHero from "../components/UnifiedHero";
import UnifiedButton from "../components/UnifiedButton";
import UnifiedStats from "../components/UnifiedStats";
import FAQ from "../components/FAQ";

// Partnerships page: For companies/professors to connect with students.
// Add new FAQ, skills, or partner types by editing the arrays below.
// Adjust layout or add sections as your needs grow.
const Partnerships: React.FC = () => {
  const theme = useTheme();

  const whyWorkWithUsPoints = [
    {
      title: "Top-tier Talent Pool",
      description: "We curate our talent pool to our most engaged and high-performing members. All the students that we recommend have proven their dedication across 8 month projects with successful conference papers or product launches.",
      icon: <StarIcon sx={{ fontSize: { xs: 44, md: 48 }, color: "#F57C00" }} />,
      color: "#F57C00"
    },
    {
      title: "Personalised Recommendations",
      description: "When you tell us about your project requirements, we'll search our talent pool for the ideal fit. After contacting students with the experience you're looking for, we'll set up simple introductions with minimal work on your end.",
      icon: <PersonSearchIcon sx={{ fontSize: { xs: 44, md: 48 }, color: "#1976D2" }} />,
      color: "#1976D2"
    },
    {
      title: "Proven Experience",
      description: "We've worked on dozens of projects with academic and industry partners, including publications and production-ready solutions. Our partnerships team has experience with NDAs, contracts, and other requirements on your end.",
      icon: <HandshakeIcon sx={{ fontSize: { xs: 44, md: 48 }, color: "#388E3C" }} />,
      color: "#388E3C"
    }
  ];

  const stats = [
    { number: "40+", label: "AI projects completed" },
    { number: "15+", label: "Research collaborations" },
    { number: "20+", label: "Academic publications" },
    { number: "500+", label: "Students recruited" },
  ];

  const howItWorksSteps = [
    {
      step: "Step 1",
      title: "Contact us",
      description: "Email us at contact@watai.ca with details about your project requirements and what you're looking for",
      icon: <ContactMailIcon sx={{ fontSize: { xs: 36, md: 40 } }} />,
      color: "#1976D2"
    },
    {
      step: "Step 2", 
      title: "We review",
      description: "We look at your needs and identify talented students within our organization who are a good fit",
      icon: <SearchIcon sx={{ fontSize: { xs: 36, md: 40 } }} />,
      color: "#F57C00"
    },
    {
      step: "Step 3",
      title: "We make introductions", 
      description: "We put you in touch directly with the recommended students on a timely basis",
      icon: <ConnectWithoutContactIcon sx={{ fontSize: { xs: 36, md: 40 } }} />,
      color: "#388E3C"
    }
  ];

  const faqs = [
    {
      question: "Who can partner with WAT.ai?",
      answer: "Any company, organization, or professor who wants to work with students on AI-related projects lasting at least a month is welcome to get in touch."
    },
    {
      question: "Does it cost anything?",
      answer: "Students must be paid for standard co-op or research positions. We won't charge placement fees for individual students referred. Larger projects that require entire teams, hosted workshops, or hackathons will involve fees that we can discuss with you."
    },
    {
      question: "How do you decide which students to recommend?",
      answer: "We maintain a pool of our top students with a proven track record of dedication and strong ML skills. We then match you with those whose skills, interests, and availability align with your projects."
    },
    {
      question: "Can I post more than one opportunity?",
      answer: "Yes, feel free to send us details of as many roles or projects as you like."
    },
    {
      question: "What skills do your students have?",
      answer: "Our members have experience in a wide variety of areas, including but not limited to: computer vision, data analysis, NLP, reinforcement learning, AI for healthcare, and more. See examples of past project areas here."
    },
    {
      question: "When can students start?",
      answer: "Most students can start full time work by the next academic term. Availability for part-time work depends on a case by case basis. Let us know your timeline and we can provide more detailed estimates."
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
        title="Connecting you with top AI talent"
        subtitle="Partnerships"
        description="At WAT.ai, we bring together students at the University of Waterloo who are passionate about applying AI to real-world problems. We're here to make it easier for employers and professors to connect with our team members for co-op placements, research projects, or other collaborations."
        actions={[
          { label: "Contact Us", href: "mailto:contact@watai.ca", variant: "primary" },
          { label: "See Our Projects", to: "/projects", variant: "outlined" }
        ]}
        variant="centered"
      />

      {/* Why Work With Us Section */}
      <UnifiedSection
        backgroundColor="paper"
        minHeight="90vh"
        centerContent
      >
        <Box sx={{ textAlign: "center", maxWidth: "1400px", margin: "0 auto", px: { xs: 2, sm: 3, md: 4 } }}>
          <SubsectionTitle sx={{ mb: { xs: 1, md: 2 } }}>
            Why Work With Us?
          </SubsectionTitle>
          <BodyLarge sx={{ 
            mb: { xs: 6, md: 10 }, 
            maxWidth: "700px", 
            margin: { xs: "0 auto 3rem auto", md: "0 auto 5rem auto" },
            color: theme.palette.text.secondary,
            fontSize: { xs: "1rem", md: "1.25rem" }
          }}>
            We connect you with exceptional AI talent through a proven, personalized approach
          </BodyLarge>
          
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: { xs: 4, sm: 6, md: 8 },
              alignItems: "stretch",
            }}
          >
            {whyWorkWithUsPoints.map((point, index) => (
              <UnifiedCard
                key={index}
                variant="elevated"
                padding={0}
                fullHeight
              >
                <Box sx={{ 
                  position: "relative",
                  height: "100%",
                  p: { xs: 3, sm: 4, md: 5 },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  background: index === 0 ? `linear-gradient(135deg, ${point.color}08, ${point.color}03)` : "transparent"
                }}>
                  {/* Icon with animated background */}
                  <Box sx={{ 
                    mb: { xs: 3, md: 4 },
                    p: { xs: 2.5, md: 3 },
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${point.color}20, ${point.color}10)`,
                    border: `2px solid ${point.color}30`,
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: -2,
                      left: -2,
                      right: -2,
                      bottom: -2,
                      borderRadius: "50%",
                      background: `linear-gradient(45deg, ${point.color}40, transparent)`,
                      zIndex: -1,
                      animation: "pulse 2s infinite",
                    }
                  }}>
                    {point.icon}
                  </Box>
                  
                  <Typography variant="h4" sx={{ 
                    mb: 3, 
                    color: point.color,
                    fontWeight: 700,
                    fontSize: { xs: "1.4rem", md: "1.6rem" },
                    lineHeight: 1.2
                  }}>
                    {point.title}
                  </Typography>
                  
                  <BodyText sx={{ 
                    textAlign: "left",
                    lineHeight: 1.7,
                    fontSize: { xs: "0.95rem", md: "1rem" }
                  }}>
                    {point.description}
                  </BodyText>
                </Box>
              </UnifiedCard>
            ))}
          </Box>
        </Box>
      </UnifiedSection>

      {/* Who We Work With Section */}
      <UnifiedSection
        backgroundColor="transparent"
        minHeight="90vh"
        centerContent
      >
        <Box sx={{ textAlign: "center", maxWidth: "1400px", margin: "0 auto", px: { xs: 2, sm: 3, md: 4 } }}>
          <SubsectionTitle sx={{ mb: { xs: 1, md: 2 } }}>
            Who We Work With
          </SubsectionTitle>
          <BodyLarge sx={{ 
            mb: { xs: 6, md: 10 }, 
            maxWidth: "600px", 
            margin: { xs: "0 auto 3rem auto", md: "0 auto 5rem auto" },
            color: theme.palette.text.secondary,
            fontSize: { xs: "1rem", md: "1.25rem" }
          }}>
            From startups to research institutions, we partner with organizations seeking top AI talent
          </BodyLarge>
          
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 4, sm: 6, md: 12 },
              alignItems: "stretch",
            }}
          >
            {/* Employers */}
            <UnifiedCard
              variant="elevated"
              padding={0}
              fullHeight
            >
              <Box sx={{ 
                position: "relative",
                p: { xs: 4, sm: 5, md: 6 },
                height: "100%",
                background: `linear-gradient(135deg, #1976D208, #1976D203)`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}>
                {/* Animated icon background */}
                <Box sx={{ 
                  position: "relative",
                  mb: 4,
                  p: 4,
                  borderRadius: "20px",
                  background: `linear-gradient(135deg, #1976D220, #1976D210)`,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: -3,
                    left: -3,
                    right: -3,
                    bottom: -3,
                    borderRadius: "23px",
                    background: `linear-gradient(45deg, #1976D230, transparent)`,
                    zIndex: -1,
                  }
                }}>
                  <BusinessIcon sx={{ fontSize: { xs: 50, md: 60 }, color: "#1976D2" }} />
                </Box>
                
                <Typography variant="h3" sx={{ 
                  mb: 4, 
                  color: "#1976D2",
                  fontWeight: 700,
                  fontSize: { xs: "1.8rem", md: "2.2rem" }
                }}>
                  Employers
                </Typography>
                
                <BodyText sx={{ 
                  textAlign: "center",
                  lineHeight: 1.7,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  maxWidth: "400px"
                }}>
                  If you're looking to hire a student for a co-op, internship, or short-term project, we can connect
                  you with students whose skills match your needs.
                </BodyText>
                
                {/* Decorative elements */}
                <Box sx={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, #1976D215, transparent)`,
                  opacity: 0.6
                }} />
                <Box sx={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, #1976D220, transparent)`,
                  opacity: 0.4
                }} />
              </Box>
            </UnifiedCard>

            {/* Professors */}
            <UnifiedCard
              variant="elevated"
              padding={0}
              fullHeight
            >
              <Box sx={{ 
                position: "relative",
                p: { xs: 4, sm: 5, md: 6 },
                height: "100%",
                background: `linear-gradient(135deg, #9C27B008, #9C27B003)`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}>
                {/* Animated icon background */}
                <Box sx={{ 
                  position: "relative",
                  mb: 4,
                  p: 4,
                  borderRadius: "20px",
                  background: `linear-gradient(135deg, #9C27B020, #9C27B010)`,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: -3,
                    left: -3,
                    right: -3,
                    bottom: -3,
                    borderRadius: "23px",
                    background: `linear-gradient(45deg, #9C27B030, transparent)`,
                    zIndex: -1,
                  }
                }}>
                  <SchoolIcon sx={{ fontSize: { xs: 50, md: 60 }, color: "#9C27B0" }} />
                </Box>
                
                <Typography variant="h3" sx={{ 
                  mb: 4, 
                  color: "#9C27B0",
                  fontWeight: 700,
                  fontSize: { xs: "1.8rem", md: "2.2rem" }
                }}>
                  Professors
                </Typography>
                
                <BodyText sx={{ 
                  textAlign: "center",
                  lineHeight: 1.7,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  maxWidth: "400px"
                }}>
                  If you need a research assistant or want to otherwise involve students in your research, we can help you
                  find motivated students willing to put the work in your field.
                </BodyText>
                
                {/* Decorative elements */}
                <Box sx={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, #9C27B015, transparent)`,
                  opacity: 0.6
                }} />
                <Box sx={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, #9C27B020, transparent)`,
                  opacity: 0.4
                }} />
              </Box>
            </UnifiedCard>
          </Box>
        </Box>
      </UnifiedSection>

      {/* How It Works Section */}
      <UnifiedSection
        backgroundColor="paper"
        minHeight="80vh"
      >
        <Box sx={{ textAlign: "center", maxWidth: "1400px", margin: "0 auto", px: { xs: 2, sm: 3, md: 4 } }}>
          <SubsectionTitle sx={{ mb: { xs: 1, md: 2 } }}>
            How It Works
          </SubsectionTitle>
          <BodyLarge sx={{ 
            mb: { xs: 6, md: 10 }, 
            maxWidth: "600px", 
            margin: { xs: "0 auto 3rem auto", md: "0 auto 5rem auto" },
            color: theme.palette.text.secondary,
            fontSize: { xs: "1rem", md: "1.25rem" }
          }}>
            Ready to connect with exceptional AI talent? Our streamlined process makes it easy to get started
          </BodyLarge>
          
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: { xs: 4, sm: 6, md: 8 },
              mb: { xs: 6, md: 8 },
              alignItems: "stretch"
            }}
          >
            {howItWorksSteps.map((item, index) => (
              <UnifiedCard
                key={index}
                variant="elevated"
                padding={0}
                fullHeight
              >
                <Box sx={{ 
                  position: "relative",
                  p: { xs: 3, sm: 4, md: 5 },
                  textAlign: "center",
                  background: `linear-gradient(135deg, ${item.color}08, ${item.color}03)`,
                  zIndex: 1,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: { xs: "250px", md: "300px" }
                }}>
                  {/* Step number badge */}
                  <Box sx={{
                    position: "absolute",
                    top: { xs: -12, md: -15 },
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: { xs: 28, md: 30 },
                    height: { xs: 28, md: 30 },
                    borderRadius: "50%",
                    background: item.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: { xs: "0.7rem", md: "0.8rem" },
                    fontWeight: "bold",
                    color: "white",
                    boxShadow: `0 4px 12px ${item.color}40`
                  }}>
                    {index + 1}
                  </Box>
                  
                  {/* Icon */}
                  <Box sx={{ 
                    mb: 3,
                    mt: 2,
                    display: "flex",
                    justifyContent: "center",
                    "& svg": { 
                      color: item.color,
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
                    }
                  }}>
                    {item.icon}
                  </Box>
                  
                  <Typography variant="h6" sx={{ 
                    color: item.color, 
                    mb: 1,
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px"
                  }}>
                    {item.step}
                  </Typography>
                  
                  <Typography variant="h4" sx={{ 
                    color: theme.palette.text.primary, 
                    mb: 3,
                    fontSize: { xs: "1.3rem", md: "1.5rem" },
                    fontWeight: 600
                  }}>
                    {item.title}
                  </Typography>
                  
                  <BodyText sx={{ 
                    lineHeight: 1.6,
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    flex: 1,
                    display: "flex",
                    alignItems: "center"
                  }}>
                    {item.description}
                  </BodyText>
                </Box>
              </UnifiedCard>
            ))}
          </Box>

          <UnifiedButton
            variant="primary"
            size="large"
            href="mailto:contact@watai.ca"
          >
            Contact Us
          </UnifiedButton>
        </Box>
      </UnifiedSection>

      {/* Our Work So Far Section */}
      <UnifiedSection
        backgroundColor="transparent"
        minHeight="60vh"
        centerContent
      >
        <Box sx={{ textAlign: "center" }}>
          <SubsectionTitle sx={{ mb: 8 }}>
            Our Work So Far
          </SubsectionTitle>
          
          <UnifiedStats stats={stats} />

          <UnifiedButton
            variant="outlined"
            size="large"
            to="/projects"
          >
            See Our Projects
          </UnifiedButton>
        </Box>
      </UnifiedSection>

      {/* FAQ Section */}
      <UnifiedSection
        backgroundColor="paper"
        minHeight="80vh"
        centerContent
      >
        <FAQ items={faqs} title="Frequently Asked Questions" />
      </UnifiedSection>

      {/* CTA Section */}
      <UnifiedSection
        backgroundColor="transparent"
        minHeight="60vh"
        centerContent
      >
        <Box sx={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
          <SubsectionTitle sx={{ mb: 6 }}>
            Let's Collaborate
          </SubsectionTitle>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <UnifiedButton
              variant="primary"
              size="large"
              href="mailto:contact@watai.ca"
            >
              Contact Us
            </UnifiedButton>
          </Box>
        </Box>
      </UnifiedSection>
    </Box>
  );
};

export default Partnerships;
