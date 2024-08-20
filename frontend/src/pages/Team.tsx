import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import Link from "@mui/material/Link";
import { IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { ExecutiveTeam, LeadershipTeam, Alumni } from "../data/teamData";

// Styled component for team member image
const MemberImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  marginBottom: "10px",
  borderRadius: "29px",
  transition: "0.4s",
  "&:hover": {
    boxShadow: "0px 0px 50px #ffffff52",
  },
}));

// Member component
const Member = ({ name, role, imageUrl, linkedinUrl }: any) => (
  <Box
    sx={{
      width: "180px",
      minWidth: "150px",
      textAlign: "center",
      color: "#fff",
      fontSize: "13px",
      lineHeight: "13px",
      transition: "0.4s",
      mx: "50px",
      pb: "30px",
      "&:hover": {
        transform: "translateY(-10px)",
        filter: "brightness(120%)",
      },
    }}
  >
    <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer">
      <MemberImage
        draggable={false}
        src={require(`../assets/team/${imageUrl}`)}
        alt={name}
      />
    </Link>
    <Typography
      variant="h6"
      sx={{ fontSize: "18px", fontWeight: "bold", lineHeight: "20px" }}
    >
      {name}
    </Typography>
    <Typography variant="body2">{role}</Typography>
  </Box>
);

// Team section component
const TeamSection = ({ title, members }: any) => (
  <Box sx={{ mt: 5, mb: 5 }}>
    <Typography variant="h4" sx={{ textAlign: "center", mb: 5 }}>
      {title}
    </Typography>
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
        <Member key={index} {...member} />
      ))}
    </Box>
  </Box>
);

// Main TeamPage component
const Team: React.FC = () => {
  const [showAlumni, setShowAlumni] = useState(false);

  return (
    <Box>
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
        <Typography variant="h4" sx={{ color: "#FFF", mb: 2, mt: 20 }}>
          Member Success:
        </Typography>
        <Typography variant="h5" sx={{ color: "grey", mb: 4 }}>
          Showcasing The Organizations <br />
          Where Our Members Have Landed
        </Typography>
        <Box
          component="img"
          src={require("../assets/companylogos.png")}
          alt="Company Logos"
          draggable={false}
          sx={{ width: "100%", maxWidth: "1000px", margin: "0 auto" }}
        />
      </Box>
    </Box>
  );
};

export default Team;
