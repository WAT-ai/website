import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import StarryBackground from "../components/StarryBackground";
import StyledBulletPoints from "../components/StyledBulletPoints";
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import BusinessIcon from '@mui/icons-material/Business';
import { SectionTitle, SubsectionTitle, BodyLarge, BodyText } from "../components/Typography";

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

  return (
    <Box 
      sx={{
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <StarryBackground />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Box
          sx={{
            py: 12,
            px: 3,
            position: "relative",
            backgroundColor: "transparent",
            borderBottom: `1px solid ${theme.palette.divider}`,
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: "1000px",
              margin: "0 auto",
              textAlign: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <SectionTitle sx={{ mb: 4, color: theme.palette.primary.main }}>
              Connecting you with top AI talent
            </SectionTitle>
            <BodyLarge sx={{ maxWidth: "800px", margin: "0 auto" }}>
              At WAT.AI, we bring together students at the University of Waterloo who are passionate about
              applying AI to real-world problems. We're here to make it easier for employers and professors to
              connect with our team members for co-op placements, research projects, or other collaborations.
            </BodyLarge>
          </Box>
        </Box>
      </motion.div>

      {/* Why Work With Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Box
          sx={{
            py: 12,
            px: 3,
            position: "relative",
            backgroundColor: `${theme.palette.background.paper}DD`,
            borderBottom: `1px solid ${theme.palette.divider}`,
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: "1200px",
              margin: "0 auto",
              width: "100%",
            }}
          >
            <SubsectionTitle sx={{ textAlign: "center", mb: 6 }}>
              Why Work With Us?
            </SubsectionTitle>
            <StyledBulletPoints {...whyWorkWithUsPoints} />
          </Box>
        </Box>
      </motion.div>

      {/* Who We Work With Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Box
          sx={{
            py: 12,
            px: 3,
            position: "relative",
            backgroundColor: "transparent",
            borderBottom: `1px solid ${theme.palette.divider}`,
            minHeight: "80vh",
          }}
        >
          <Box
            sx={{
              maxWidth: "1200px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
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
              <Box
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: { xs: "12px", md: "16px" },
                  padding: { xs: 4, md: 6 },
                  border: `2px solid ${theme.palette.primary.main}`,
                  boxShadow: `0 8px 32px rgba(255, 206, 26, 0.1)`,
                  height: "100%",
                }}
              >
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

              {/* Professors */}
              <Box
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: { xs: "12px", md: "16px" },
                  padding: { xs: 4, md: 6 },
                  border: `2px solid ${theme.palette.primary.main}`,
                  boxShadow: `0 8px 32px rgba(255, 206, 26, 0.1)`,
                  height: "100%",
                }}
              >
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
            </Box>
          </Box>
        </Box>
      </motion.div>

      {/* How It Works Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Box
          sx={{
            py: 12,
            px: 3,
            position: "relative",
            backgroundColor: `${theme.palette.background.paper}DD`,
            borderBottom: `1px solid ${theme.palette.divider}`,
            minHeight: "70vh",
          }}
        >
          <Box
            sx={{
              maxWidth: "1200px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <SubsectionTitle sx={{ mb: 8 }}>
              How It Works
            </SubsectionTitle>
            
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                gap: 6,
              }}
            >
              {[
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
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: "12px",
                    padding: 4,
                    border: `2px solid ${theme.palette.primary.main}40`,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: theme.palette.primary.main,
                      transform: "translateY(-4px)",
                    },
                  }}
                >
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
              ))}
            </Box>

            <Box sx={{ mt: 6 }}>
              <Box
                component={RouterLink}
                to="/contact"
                sx={{
                  display: "inline-block",
                  textAlign: "center",
                  p: 2,
                  px: 4,
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.secondary.main,
                  borderRadius: 2,
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  transition: "all 0.3s ease",
                  border: `2px solid ${theme.palette.primary.main}`,
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: `0 8px 24px ${theme.palette.primary.main}40`,
                  },
                }}
              >
                Post an Opportunity
              </Box>
            </Box>
          </Box>
        </Box>
      </motion.div>

      {/* Our Work So Far Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Box
          sx={{
            py: 12,
            px: 3,
            position: "relative",
            backgroundColor: "transparent",
            borderBottom: `1px solid ${theme.palette.divider}`,
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: "1200px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <SubsectionTitle sx={{ mb: 8 }}>
              Our Work So Far
            </SubsectionTitle>
            
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
                gap: 4,
                mb: 6,
              }}
            >
              {[
                { number: "20+", label: "AI projects completed" },
                { number: "15+", label: "Research collaborations" },
                { number: "5+", label: "Academic publications" },
                { number: "3+", label: "University departments" },
              ].map((stat, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: "12px",
                    padding: 3,
                    border: `2px solid ${theme.palette.primary.main}40`,
                  }}
                >
                  <Typography variant="h3" sx={{ color: theme.palette.primary.main, mb: 1 }}>
                    {stat.number}
                  </Typography>
                  <BodyText sx={{ fontSize: "0.9rem" }}>
                    {stat.label}
                  </BodyText>
                </Box>
              ))}
            </Box>

            <Box
              component={RouterLink}
              to="/projects"
              sx={{
                display: "inline-block",
                textAlign: "center",
                p: 2,
                px: 4,
                backgroundColor: "transparent",
                color: theme.palette.primary.main,
                borderRadius: 2,
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "1.1rem",
                transition: "all 0.3s ease",
                border: `2px solid ${theme.palette.primary.main}`,
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.secondary.main,
                  transform: "translateY(-4px)",
                  boxShadow: `0 8px 24px ${theme.palette.primary.main}40`,
                },
              }}
            >
              See Our Projects
            </Box>
          </Box>
        </Box>
      </motion.div>

      {/* Student Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Box
          sx={{
            py: 12,
            px: 3,
            position: "relative",
            backgroundColor: `${theme.palette.background.paper}DD`,
            borderBottom: `1px solid ${theme.palette.divider}`,
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: "1200px",
              margin: "0 auto",
              width: "100%",
            }}
          >
            <SubsectionTitle sx={{ textAlign: "center", mb: 6 }}>
              What Skills Do Our Students Have?
            </SubsectionTitle>
            <StyledBulletPoints {...studentSkills} />
          </Box>
        </Box>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Box
          sx={{
            py: 12,
            px: 3,
            position: "relative",
            backgroundColor: "transparent",
            borderBottom: `1px solid ${theme.palette.divider}`,
            minHeight: "80vh",
          }}
        >
          <Box
            sx={{
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            <SubsectionTitle sx={{ textAlign: "center", mb: 8 }}>
              Frequently Asked Questions
            </SubsectionTitle>
            
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {[
                {
                  question: "Who can partner with WAT.AI?",
                  answer: "Any company, organization, or professor who wants to work with students on AI-related work."
                },
                {
                  question: "Does it cost anything?",
                  answer: "Students typically must be paid for standard co-op or research positions."
                },
                {
                  question: "How do you decide which students to recommend?",
                  answer: "We take a pool of our top students with a proven track record of success, and match you with those whose skills, interests, and availability align with your projects."
                },
                {
                  question: "Can I post more than one opportunity?",
                  answer: "Yes, feel free to send us details of as many roles or projects as you like."
                },
                {
                  question: "When can students start?",
                  answer: "That depends on each student's individual schedule, let us know your timeline and we'll work with you."
                }
              ].map((faq, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: "12px",
                    padding: 4,
                    border: `2px solid ${theme.palette.primary.main}40`,
                  }}
                >
                  <Typography variant="h6" sx={{ color: theme.palette.primary.main, mb: 2 }}>
                    {faq.question}
                  </Typography>
                  <BodyText>
                    {faq.answer}
                  </BodyText>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Box
          sx={{
            py: 12,
            px: 3,
            position: "relative",
            backgroundColor: `${theme.palette.background.paper}DD`,
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: "800px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <SubsectionTitle sx={{ mb: 4 }}>
              Let's Collaborate
            </SubsectionTitle>
            <BodyLarge sx={{ mb: 6 }}>
              Our team of talented students bring fresh perspectives and cutting-edge technical skills to every
              collaboration. We're here to help connect you with the right team or individuals for your needs.
            </BodyLarge>
            <Box
              component={RouterLink}
              to="/contact"
              sx={{
                display: "inline-block",
                textAlign: "center",
                p: 3,
                px: 6,
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.secondary.main,
                borderRadius: 2,
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "1.2rem",
                transition: "all 0.3s ease",
                border: `2px solid ${theme.palette.primary.main}`,
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: `0 12px 32px ${theme.palette.primary.main}40`,
                },
              }}
            >
              Get in Touch
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Partnerships;
