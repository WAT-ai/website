import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import BusinessIcon from '@mui/icons-material/Business';
import SchoolIcon from '@mui/icons-material/School';
import { SubsectionTitle, BodyLarge, BodyText } from "../components/Typography";
import StyledBulletPoints from "../components/StyledBulletPoints";
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

  const whyWorkWithUsPoints = {
    title: "Why Work With Us?",
    points: [
      "Skilled and motivated students - Our members have experience with real AI/ML projects",
      "Simple and personal process - You tell us what you're looking for, and we recommend students who are a good fit",
      "Proven experience - We've worked on over 20 projects with academic and industry partners, including publications and production-ready solutions"
    ]
  };

  const employerPoints = {
    title: "For Employers:",
    points: [
      "Co-op placements with top-tier AI talent",
      "Internship opportunities with experienced students",
      "Short-term project collaborations with proven results"
    ]
  };

  const professorPoints = {
    title: "For Professors:",
    points: [
      "Research assistants with strong AI/ML foundations",
      "Student involvement in cutting-edge research projects",
      "Collaboration opportunities across multiple departments"
    ]
  };

  const studentSkills = {
    title: "Our Students Have Experience In:",
    points: [
      "Machine learning and deep learning frameworks",
      "Data analysis and statistical modeling",
      "Natural language processing and computer vision",
      "Robotics and autonomous systems",
      "Production-ready AI solutions and deployment"
    ]
  };

  const stats = [
    { number: "20+", label: "AI projects completed" },
    { number: "15+", label: "Research collaborations" },
    { number: "5+", label: "Academic publications" },
    { number: "3+", label: "University departments" },
  ];

  const howItWorksSteps = [
    {
      step: "Step 1",
      title: "Contact us",
      description: "Fill out the form below to tell us about your opportunity and what you're looking for",
      icon: "📝"
    },
    {
      step: "Step 2", 
      title: "We review",
      description: "We look at your needs and identify talented students within our organization who are a good fit",
      icon: "🔍"
    },
    {
      step: "Step 3",
      title: "We introduce you", 
      description: "We put you in touch directly with the recommended students so you can move forward",
      icon: "🤝"
    }
  ];

  const faqs = [
    {
      question: "Who can partner with WAT.ai?",
      answer: "Any company, organization, or professor who wants to work with students on AI-related work. We welcome partnerships with startups, established companies, academic institutions, and research organizations."
    },
    {
      question: "Does it cost anything?",
      answer: "Students typically must be paid for standard co-op or research positions. However, we're flexible and can discuss arrangements that work for both parties, including unpaid research opportunities for academic credit."
    },
    {
      question: "How do you decide which students to recommend?",
      answer: "We take a pool of our top students with a proven track record of success, and match you with those whose skills, interests, and availability align with your projects. We consider technical skills, project experience, and individual career goals."
    },
    {
      question: "Can I post more than one opportunity?",
      answer: "Yes, feel free to send us details of as many roles or projects as you like. We can help you find the right students for multiple positions across different projects or departments."
    },
    {
      question: "When can students start?",
      answer: "That depends on each student's individual schedule, let us know your timeline and we'll work with you. We typically have students available for summer internships, 4-month co-ops, and part-time positions during the academic year."
    },
    {
      question: "What types of projects do students work on?",
      answer: "Our students work on a wide range of AI projects including machine learning model development, computer vision applications, natural language processing, data analysis, and AI product development. We can match students to projects based on their expertise and interests."
    },
    {
      question: "How long is the typical collaboration?",
      answer: "Project durations vary based on your needs. We support short-term projects (1-3 months), standard co-op terms (4-8 months), and longer research collaborations (6-12 months). We're flexible and can accommodate your specific timeline requirements."
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
          { label: "Post an Opportunity", to: "/contact", variant: "primary" },
          { label: "See Our Projects", to: "/projects", variant: "outlined" }
        ]}
        variant="centered"
      />

      {/* Why Work With Us Section */}
      <UnifiedSection
        backgroundColor="paper"
        minHeight="60vh"
        centerContent
      >
        <Box sx={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
          <SubsectionTitle sx={{ mb: 6 }}>
            Why Work With Us?
          </SubsectionTitle>
          <StyledBulletPoints {...whyWorkWithUsPoints} />
        </Box>
      </UnifiedSection>

      {/* Who We Work With Section */}
      <UnifiedSection
        backgroundColor="transparent"
        minHeight="80vh"
        centerContent
      >
        <Box sx={{ textAlign: "center", maxWidth: "1200px", margin: "0 auto" }}>
          <SubsectionTitle sx={{ mb: 8 }}>
            Who We Work With
          </SubsectionTitle>
          
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 8,
              alignItems: "flex-start",
            }}
          >
            {/* Employers */}
            <UnifiedCard
              variant="elevated"
              padding={6}
              fullHeight
            >
              <Box sx={{ textAlign: "center" }}>
                <BusinessIcon sx={{ fontSize: 60, color: theme.palette.primary.main, mb: 2 }} />
                <Typography variant="h4" sx={{ mb: 3, color: theme.palette.text.primary }}>
                  Employers
                </Typography>
                <BodyText sx={{ mb: 4, textAlign: "left" }}>
                  If you're looking to hire a student for a co-op, internship, or short-term project, we can connect
                  you with students whose skills match your needs.
                </BodyText>
                <StyledBulletPoints {...employerPoints} align="left" />
              </Box>
            </UnifiedCard>

            {/* Professors */}
            <UnifiedCard
              variant="elevated"
              padding={6}
              fullHeight
            >
              <Box sx={{ textAlign: "center" }}>
                <SchoolIcon sx={{ fontSize: 60, color: theme.palette.primary.main, mb: 2 }} />
                <Typography variant="h4" sx={{ mb: 3, color: theme.palette.text.primary }}>
                  Professors
                </Typography>
                <BodyText sx={{ mb: 4, textAlign: "left" }}>
                  If you need a research assistant or want to involve students in your research, we can help you
                  find students with the right expertise and interest in your area.
                </BodyText>
                <StyledBulletPoints {...professorPoints} align="left" />
              </Box>
            </UnifiedCard>
          </Box>
        </Box>
      </UnifiedSection>

      {/* How It Works Section */}
      <UnifiedSection
        backgroundColor="paper"
        minHeight="70vh"
      >
        <Box sx={{ textAlign: "center" }}>
          <SubsectionTitle sx={{ mb: 8 }}>
            How It Works
          </SubsectionTitle>
          
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 6,
              mb: 6,
            }}
          >
            {howItWorksSteps.map((item, index) => (
              <UnifiedCard
                key={index}
                variant="subtle"
                padding={4}
                hoverable
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography sx={{ fontSize: "2rem", mb: 2 }}>{item.icon}</Typography>
                  <Typography variant="h6" sx={{ color: theme.palette.primary.main, mb: 1 }}>
                    {item.step}
                  </Typography>
                  <Typography variant="h5" sx={{ color: theme.palette.text.primary, mb: 2 }}>
                    {item.title}
                  </Typography>
                  <BodyText sx={{ textAlign: "center" }}>
                    {item.description}
                  </BodyText>
                </Box>
              </UnifiedCard>
            ))}
          </Box>

          <UnifiedButton
            variant="primary"
            size="large"
            to="/contact"
          >
            Post an Opportunity
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

      {/* Student Skills Section */}
      <UnifiedSection
        backgroundColor="paper"
        minHeight="60vh"
        centerContent
      >
        <Box sx={{ textAlign: "center" }}>
          <SubsectionTitle sx={{ mb: 6 }}>
            What Skills Do Our Students Have?
          </SubsectionTitle>
          <StyledBulletPoints {...studentSkills} />
        </Box>
      </UnifiedSection>

      {/* FAQ Section */}
      <UnifiedSection
        backgroundColor="transparent"
        minHeight="80vh"
        centerContent
      >
        <FAQ items={faqs} title="Partnership FAQ" />
      </UnifiedSection>

      {/* CTA Section */}
      <UnifiedSection
        backgroundColor="paper"
        minHeight="60vh"
        centerContent
      >
        <Box sx={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
          <SubsectionTitle sx={{ mb: 6 }}>
            Let's Collaborate
          </SubsectionTitle>
          <BodyLarge sx={{ mb: 8, maxWidth: "700px", margin: "0 auto 4rem auto" }}>
            Our team of talented students bring fresh perspectives and cutting-edge technical skills to every
            collaboration. We're here to help connect you with the right team or individuals for your needs.
          </BodyLarge>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
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
};

export default Partnerships;
