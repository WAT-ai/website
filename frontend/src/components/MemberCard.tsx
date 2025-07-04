import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import Link from "@mui/material/Link";

/**
 * Team member card component with hover effects and LinkedIn integration
 * Displays profile image, name, role with smooth animations
 */

// Styled image component with hover glow effect
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

/**
 * Individual team member card with lift animation on hover
 * Integrates with LinkedIn for external profile access
 */
const MemberCard = ({ name, role, imageUrl, linkedinUrl }: any) => (
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

export default MemberCard;
