/**
 * MemberCard - Team member display component
 * Shows profile image, name, role with hover effects and LinkedIn integration
 */
import React from "react";
import { Box, Link, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import { CardTitle, Caption } from "./Typography";
import UnifiedCard from "./UnifiedCard";

// Styled image component with hover glow effect and subtle desaturation
const MemberImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  aspectRatio: "1",
  objectFit: "cover",
  borderRadius: "16px",
  transition: "all 0.4s ease",
  filter: "grayscale(30%) brightness(0.95) contrast(1.05)",
  "&:hover": {
    filter: "grayscale(0%) brightness(1.1) contrast(1)",
    boxShadow: "0px 0px 30px rgba(255, 206, 26, 0.3)",
    transform: "scale(1.02)",
  },
}));

const MemberCard = ({ name, role, imageUrl, linkedinUrl }: any) => {
  const theme = useTheme();
  
  return (
    <UnifiedCard
      variant="subtle"
      hoverable
      padding={3}
      borderRadius="20px"
      fullHeight
    >
      <Box
        sx={{
          textAlign: "center",
          color: theme.palette.text.primary,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "all 0.4s ease",
          "&:hover": {
            transform: "translateY(-8px)",
          },
        }}
      >
        <Link 
          href={linkedinUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          sx={{ 
            textDecoration: "none",
            mb: { xs: 2, sm: 3 },
            display: "block",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: "16px",
              background: `linear-gradient(135deg, ${theme.palette.primary.main}20, transparent 60%)`,
              opacity: 0,
              transition: "opacity 0.3s ease",
              pointerEvents: "none",
            },
            "&:hover::after": {
              opacity: 1,
            },
          }}
        >
          <MemberImage
            draggable={false}
            src={require(`../assets/team/${imageUrl}`)}
            alt={name}
          />
        </Link>
        
        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <CardTitle
            sx={{ 
              fontSize: { xs: "1.1rem", sm: "1.25rem" },
              fontWeight: 700,
              lineHeight: 1.3,
              mb: 1,
              color: theme.palette.text.primary,
            }}
          >
            {name}
          </CardTitle>
          <Caption 
            sx={{ 
              color: theme.palette.text.secondary,
              fontSize: { xs: "0.9rem", sm: "1rem" },
              lineHeight: 1.4,
              fontWeight: 400,
            }}
          >
            {role}
          </Caption>
        </Box>
      </Box>
    </UnifiedCard>
  );
};

export default MemberCard;
