import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { ExecutiveTeam, LeadershipTeam, Alumni } from "../data/teamData";
import MemberCard from "../components/MemberCard";
import { SectionTitle, SubsectionTitle } from "../components/Typography";

// Team page: Lists team members and alumni. Add or update members in teamData.
// To add new sections, create a new TeamSection. For alumni, update the Alumni array.
// For design tweaks, adjust the Box and MemberCard props.
const TeamSection = ({ title, members }: any) => (
  <Box sx={{ mt: 5, mb: 5 }}>
    <SubsectionTitle sx={{ textAlign: "center", mb: 5 }}>
      {title}
    </SubsectionTitle>
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        paddingLeft: "100px",
        paddingRight: "100px",
        mt: "50px",
      }}
    >
      {members.map((member: any, index: number) => (
        <MemberCard key={index} {...member} />
      ))}
    </Box>
  </Box>
);

// Main TeamPage component
const Team: React.FC = () => {
  const [showAlumni, setShowAlumni] = useState(false);

  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <TeamSection title="Executive Team" members={ExecutiveTeam} />
      <TeamSection title="Leadership Team" members={LeadershipTeam} />

      {/* Toggle Alumni Section */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography variant="h4" sx={{ textAlign: "center", mt: 5, mb: 2 }}>
          Alumni
        </Typography>
        <IconButton
          onClick={() => setShowAlumni(!showAlumni)}
          sx={{ color: "#FFF" }}
          aria-label="toggle alumni"
        >
          {showAlumni ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
        {showAlumni && (
          <Box sx={{ mt: 3 }}>
            <TeamSection title="" members={Alumni} />
          </Box>
        )}
      </Box>

      {/* Member Success Section */}
      <Box sx={{ textAlign: "center", mt: -12, mb: 5 }}>
        <SectionTitle sx={{ mb: 2, mt: 20 }}>
          Member Success:
        </SectionTitle>
        <SubsectionTitle sx={{ color: "grey", mb: 4 }}>
          Showcasing The Organizations <br />
          Where Our Members Have Landed
        </SubsectionTitle>
        <Box
          component="img"
          src={require("../assets/companylogos_opt.png")}
          alt="Company Logos"
          draggable={false}
          sx={{ width: "100%", maxWidth: "1000px", margin: "0 auto" }}
        />
      </Box>
    </Box>
  );
};

export default Team;
