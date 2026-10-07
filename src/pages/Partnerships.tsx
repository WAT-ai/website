/**
 * Partnerships - Connect companies/professors with WAT.ai students
 * Includes partnership opportunities, FAQ, and contact links
 */
import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SearchIcon from '@mui/icons-material/Search';
import UnifiedButton from "../components/UnifiedButton";
import FAQ from "../components/FAQ";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

// Partnerships page: For companies/professors to connect with students.
// Add new FAQ, skills, or partner types by editing the arrays below.
// Adjust layout or add sections as your needs grow.
const Partnerships: React.FC = () => {
  const theme = useTheme();

  const partnershipOpportunities = [
    {
      description: "Direct access to UWaterloo's largest student AI talent network for co-op, full-time, and research hiring.",
      icon: <PersonSearchIcon />
    },
    {
      description: "Sponsor a WAT.ai team with funds, datasets, and/or mentorship to develop a prototype or research.",
      icon: <SearchIcon />
    },
    {
      description: "Co-host branded technical workshops, hiring socials, and more.",
      icon: <SchoolIcon />
    },
    {
      description: "Support Waterloo student builders with funds, credits, and hardware as a recognized WAT.ai sponsor.",
      icon: <StarIcon />
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
      answer: (
        <>
          Our members have experience with deep learning, computer vision, NLP, reinforcement learning, data pipelines, and more.{" "}
          <Link component={RouterLink} to="/projects" sx={{ color: theme.palette.primary.main, textDecoration: "underline" }}>
            Past project
          </Link>
          {" "}domains have spanned healthcare, finance, sustainability, and more.
        </>
      )
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

  const cardSx = {
    height: "100%",
    p: { xs: 2.5, sm: 3.5 },
    borderRadius: 4,
    border: `1px solid ${theme.palette.primary.main}2B`,
    background: `linear-gradient(145deg, ${theme.palette.primary.main}09, rgba(20,20,20,0.9) 42%)`,
    backdropFilter: "blur(8px)",
  };
  const headingSx = {
    color: theme.palette.text.primary,
    fontSize: { xs: "2rem", md: "2.8rem" },
    fontWeight: 750,
    letterSpacing: "-0.035em",
    lineHeight: 1.15,
    mb: 2,
  };
  const bodySx = {
    color: theme.palette.text.secondary,
    fontSize: { xs: "1rem", sm: "1.05rem" },
    lineHeight: 1.75,
  };
  return (
    <Box sx={{ minHeight: "100vh", position: "relative", pb: 10 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", minHeight: { xs: "62vh", md: "70vh" }, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", py: 8 }}>
          <Typography component="h1" sx={{ color: theme.palette.text.primary, maxWidth: 1000, fontSize: { xs: "2.6rem", sm: "3.8rem", md: "5rem" }, fontWeight: 750, lineHeight: 1.02, letterSpacing: "-0.05em", mb: 3, textWrap: "balance" }}>
            Let's build the future of AI together
          </Typography>
          <Box sx={{ maxWidth: 800, mb: 5 }}>
            <Typography sx={{ ...bodySx, fontSize: { xs: "1rem", sm: "1.15rem" }, textWrap: "balance" }}>
              At WAT.ai, we have a history of collaborating with companies, research labs, and nonprofits. Our partnerships have ranged from workshops and hackathons to hiring pipelines and research initiatives.
            </Typography>
          </Box>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <UnifiedButton variant="primary" href="https://tally.so/r/mY8DEB">Contact Us</UnifiedButton>
            <UnifiedButton variant="outlined" to="/projects">See Our Projects</UnifiedButton>
          </Stack>
        </Box>

        <Box component="section" aria-labelledby="opportunities" sx={{ mt: { xs: 6, md: 10 }, mb: { xs: 8, md: 12 } }}>
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
            <Typography component="h2" id="opportunities" sx={headingSx}>Partnership Opportunities</Typography>
            <Typography sx={bodySx}>We offer flexible collaboration models to match your goals</Typography>
          </Box>
          <Box component="ul" sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", md: "repeat(4, minmax(0, 1fr))" },
            gap: 3,
            listStyle: "none",
            p: 0,
            m: 0,
          }}>
            {partnershipOpportunities.map((point) => (
              <Box component="li" key={point.description} sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 3,
                px: 2.5,
                py: 4,
                borderRadius: 4,
                border: `1px solid ${theme.palette.primary.main}2B`,
                backgroundColor: "rgba(15,15,15,0.94)",
              }}>
                <Box sx={{ color: theme.palette.primary.main, flexShrink: 0, display: "flex", "& svg": { fontSize: 56 } }}>{point.icon}</Box>
                <Typography sx={{ ...bodySx, color: theme.palette.text.primary }}>{point.description}</Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{ textAlign: "center", mt: { xs: 6, md: 8 } }}>
            <UnifiedButton variant="primary" href="https://tally.so/r/mY8DEB">Get in touch</UnifiedButton>
          </Box>
        </Box>

        <Box component="section" aria-label="Frequently Asked Questions" sx={{ mb: { xs: 8, md: 12 } }}>
          <FAQ items={faqs} title="Frequently Asked Questions" variant="modern" />
        </Box>

        <Box component="section" aria-labelledby="collaborate" sx={{ ...cardSx, textAlign: "center", py: { xs: 5, md: 7 } }}>
          <Typography component="h2" id="collaborate" sx={headingSx}>Let's Collaborate</Typography>
          <Typography sx={{ ...bodySx, mb: 4 }}>Ready to partner with Waterloo's premier AI student organization?</Typography>
          <UnifiedButton variant="primary" size="large" href="https://tally.so/r/mY8DEB">Contact Us</UnifiedButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Partnerships;
