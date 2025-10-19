/**
 * Partnerships - Connect companies/professors with WAT.ai students
 * Includes process overview, stats, and FAQ for external partners
 */
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
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
import FAQ from "../components/FAQ";

// Partnerships page: For companies/professors to connect with students.
// Add new FAQ, skills, or partner types by editing the arrays below.
// Adjust layout or add sections as your needs grow.
const Partnerships: React.FC = () => {
  const theme = useTheme();

  const partnershipOpportunities = [
    {
      title: "Hiring & Talent",
      description: "Hire from our selective pool of the top WAT.ai members with no referral fee. Co-op, URA, and full-time hiring referrals. Job boards to share job postings and applications.",
      icon: <PersonSearchIcon sx={{ fontSize: { xs: 44, md: 48 }, color: "#1976D2" }} />,
      color: "#1976D2"
    },
    {
      title: "Workshops & Events",
      description: "Co-create learning experiences to reach Waterloo's AI community. Technical workshops and networking sessions. Hackathons and competitions with sponsorship opportunities.",
      icon: <SchoolIcon sx={{ fontSize: { xs: 44, md: 48 }, color: "#F57C00" }} />,
      color: "#F57C00"
    },
    {
      title: "Research & Technical Collaboration",
      description: "Sponsor a dedicated WAT.ai team to explore an AI side project. Shared datasets and technical mentorship. Funded research projects to explore prototypes or architectures.",
      icon: <SearchIcon sx={{ fontSize: { xs: 44, md: 48 }, color: "#9C27B0" }} />,
      color: "#9C27B0"
    },
    {
      title: "Sponsorship & Funding",
      description: "Support student innovation while advertising your brand via social media or events. Financial sponsorship for hardware, events, and GPU/API credits. Sponsored subteams for paid project work.",
      icon: <StarIcon sx={{ fontSize: { xs: 44, md: 48 }, color: "#388E3C" }} />,
      color: "#388E3C"
    }
  ];

  const whyPartnerPoints = [
    {
      title: "Proven Track Record",
      description: "40+ completed AI projects, 20+ academic publications, and 15+ successful research collaborations with industry and academic partners.",
      icon: <StarIcon sx={{ fontSize: { xs: 44, md: 48 }, color: "#F57C00" }} />,
      color: "#F57C00"
    },
    {
      title: "Access to Top Talent",
      description: "500+ recruited students, with our most engaged members proving their skills through 8-month projects, conference papers, and product launches.",
      icon: <PersonSearchIcon sx={{ fontSize: { xs: 44, md: 48 }, color: "#1976D2" }} />,
      color: "#1976D2"
    },
    {
      title: "Flexible & Professional",
      description: "Our partnerships team handles NDAs, contracts, and logistics. We can adapt to your timeline and have experience working with companies, academia, and non-profits.",
      icon: <HandshakeIcon sx={{ fontSize: { xs: 44, md: 48 }, color: "#388E3C" }} />,
      color: "#388E3C"
    }
  ];

  const howItWorksSteps = [
    {
      step: "Step 1",
      title: "Tell Us Your Goals",
      description: "Fill out our partnership form. Share what you're looking to achieve and your timeline.",
      icon: <ContactMailIcon sx={{ fontSize: { xs: 36, md: 40 } }} />,
      color: "#1976D2"
    },
    {
      step: "Step 2", 
      title: "We Develop a Proposal",
      description: "Our team will craft a collaboration plan tailored to your needs, identifying the right students, format, and structure.",
      icon: <SearchIcon sx={{ fontSize: { xs: 36, md: 40 } }} />,
      color: "#F57C00"
    },
    {
      step: "Step 3",
      title: "Launch & Collaborate", 
      description: "We handle coordination, introductions, and ongoing support to ensure a successful partnership.",
      icon: <ConnectWithoutContactIcon sx={{ fontSize: { xs: 36, md: 40 } }} />,
      color: "#388E3C"
    }
  ];

  const faqs = [
    {
      question: "What types of organizations do you partner with?",
      answer: "We've worked with big tech companies, startups, research labs, VCs, and nonprofits across various industries."
    },
    {
      question: "How long do partnerships typically last?",
      answer: "It varies by collaboration type. Events can be single sessions or recurring programs. Projects typically run 4-8 months. Sponsorships can be one-time or ongoing."
    },
    {
      question: "Is there a cost to partner with WAT.ai?",
      answer: "Hiring referrals are free for employers, though for-profit organisations must pay hired students. Sponsored projects and events usually involve funding. Contact us to discuss your specific needs."
    },
    {
      question: "What technical areas do your members specialize in?",
      answer: "Our members have experience with deep learning, computer vision, NLP, reinforcement learning, data pipelines, and more. Past project domains have spanned healthcare, finance, sustainability, and more."
    },
    {
      question: "Can we partner on multiple fronts?",
      answer: "Absolutely! Many partners combine hiring, events, and sponsorship for maximum impact and engagement with our community."
    },
    {
      question: "What's the typical timeline to get started?",
      answer: "Initial conversations happen within days. Simple collaborations (like a hiring referral) can be done within a week. Larger initiatives (projects, sponsored teams) typically require 1-2 months of planning."
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
        title="Let's build the future of AI together"
        subtitle="Partnerships"
        description="At WAT.ai, we have a history of collaborating with companies, research labs, and nonprofits. Our partnerships have ranged from workshops and hackathons to hiring pipelines and research initiatives."
        actions={[
          { label: "Contact Us", href: "https://tally.so/r/mY8DEB", variant: "primary" },
          { label: "See Our Projects", to: "/projects", variant: "outlined" }
        ]}
        variant="centered"
      />

      {/* Partnership Opportunities Section */}
      <UnifiedSection
        backgroundColor="paper"
        minHeight="90vh"
        centerContent
      >
        <Box sx={{ textAlign: "center", maxWidth: "1400px", margin: "0 auto", px: { xs: 2, sm: 3, md: 4 } }}>
          <SubsectionTitle sx={{ mb: { xs: 1, md: 2 } }}>
            Partnership Opportunities
          </SubsectionTitle>
          <BodyLarge sx={{ 
            mb: { xs: 6, md: 10 }, 
            maxWidth: "700px", 
            margin: { xs: "0 auto 3rem auto", md: "0 auto 5rem auto" },
            color: theme.palette.text.secondary,
            fontSize: { xs: "1rem", md: "1.25rem" }
          }}>
            We offer flexible collaboration models to match your goals
          </BodyLarge>
          
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
              gap: { xs: 4, sm: 6, md: 8 },
              alignItems: "stretch",
              mb: { xs: 6, md: 8 }
            }}
          >
            {partnershipOpportunities.map((point, index) => (
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
                  background: `linear-gradient(135deg, ${point.color}08, ${point.color}03)`
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
          
          <UnifiedButton
            variant="primary"
            size="large"
            href="https://tally.so/r/mY8DEB"
          >
            Get in touch
          </UnifiedButton>
        </Box>
      </UnifiedSection>

      {/* Why Partner With WAT.ai Section */}
      <UnifiedSection
        backgroundColor="transparent"
        minHeight="90vh"
        centerContent
      >
        <Box sx={{ textAlign: "center", maxWidth: "1400px", margin: "0 auto", px: { xs: 2, sm: 3, md: 4 } }}>
          <SubsectionTitle sx={{ mb: { xs: 1, md: 2 } }}>
            Why Partner With WAT.ai?
          </SubsectionTitle>
          <BodyLarge sx={{ 
            mb: { xs: 6, md: 10 }, 
            maxWidth: "700px", 
            margin: { xs: "0 auto 3rem auto", md: "0 auto 5rem auto" },
            color: theme.palette.text.secondary,
            fontSize: { xs: "1rem", md: "1.25rem" }
          }}>
            We combine exceptional talent, proven results, and professional support
          </BodyLarge>
          
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: { xs: 4, sm: 6, md: 8 },
              alignItems: "stretch",
            }}
          >
            {whyPartnerPoints.map((point, index) => (
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
                  background: `linear-gradient(135deg, ${point.color}08, ${point.color}03)`
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
            Ready to partner with Waterloo's premier AI student organization?
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
            href="https://tally.so/r/mY8DEB"
          >
            Get in touch
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
          <SubsectionTitle sx={{ mb: 3 }}>
            Let's Collaborate
          </SubsectionTitle>
          <BodyLarge sx={{ 
            mb: 6, 
            maxWidth: "600px", 
            margin: { xs: "0 auto 2rem auto", md: "0 auto 3rem auto" },
            color: theme.palette.text.secondary,
            fontSize: { xs: "1rem", md: "1.25rem" }
          }}>
            Ready to partner with Waterloo's premier AI student organization?
          </BodyLarge>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <UnifiedButton
              variant="primary"
              size="large"
              href="https://tally.so/r/mY8DEB"
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
