/**
 * Team - Display team members and alumni
 * Includes executive team, leadership team, and expandable alumni section
 */
import React from "react";
import { Box, Typography, Grid, Container, Divider, Zoom, useTheme } from "@mui/material";
import { ExecutiveTeam, LeadershipTeam } from "../data/teamData";
import MemberCard from "../components/MemberCard";
import { SectionTitle } from "../components/Typography";
import UnifiedSection from "../components/UnifiedSection";

// Team page: Lists team members and alumni. Add or update members in teamData.
// To add new sections, create a new TeamSection. For alumni, update the Alumni array.
// For design tweaks, adjust the Box and MemberCard props.
const TeamSection = ({ title, members }: any) => {
  const theme = useTheme();
  
  return (
    <Container maxWidth="lg" sx={{ mb: { xs: 6, md: 8 } }}>
      {title && (
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              color: theme.palette.text.primary,
              mb: 2,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            {title}
          </Typography>
          <Divider
            sx={{
              width: "100px",
              height: "4px",
              backgroundColor: theme.palette.primary.main,
              mx: "auto",
              mb: 2,
              borderRadius: 2,
            }}
          />
        </Box>
      )}
      
      <Grid container spacing={{ xs: 3, sm: 4, md: 5 }} justifyContent="center">
        {members.map((member: any, index: number) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Zoom in={true} timeout={300 + index * 100}>
              <Box sx={{ height: "100%" }}>
                <MemberCard {...member} />
              </Box>
            </Zoom>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

// Main TeamPage component
const Team: React.FC = () => {
  const theme = useTheme();

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
        minHeight="40vh"
        centerContent
      >
        <Box sx={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <SectionTitle sx={{ mb: 3, fontSize: { xs: "3rem", sm: "3.5rem", md: "4rem" } }}>
            Our Team
          </SectionTitle>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.4rem" },
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            Meet the passionate individuals driving AI innovation at the University of Waterloo
          </Typography>
        </Box>
      </UnifiedSection>

      {/* Executive Team Section */}
      <UnifiedSection
        backgroundColor="transparent"
        minHeight="auto"
        padding={8}
      >
        <TeamSection title="Executive Team" members={ExecutiveTeam} />
      </UnifiedSection>

      {/* Leadership Team Section */}
      <UnifiedSection
        backgroundColor="paper"
        minHeight="auto"
        padding={8}
      >
        <TeamSection title="Leadership Team" members={LeadershipTeam} />
      </UnifiedSection>
    </Box>
  );
};

export default Team;
