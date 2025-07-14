/**
 * MemberCard - Team member display component
 * Shows profile image, name, role with hover effects and LinkedIn integration
 */
import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import Link from "@mui/material/Link";
import { CardTitle, Caption } from "./Typography";

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
    <CardTitle
      sx={{ fontSize: "18px", fontWeight: "bold", lineHeight: "20px", mb: 0.5 }}
    >
      {name}
    </CardTitle>
    <Caption sx={{ mb: 0 }}>{role}</Caption>
  </Box>
);

export default MemberCard;
