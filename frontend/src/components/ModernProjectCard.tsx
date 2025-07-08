// Project card for modern projects. Displays title, team, links, and tags.
// To add new fields, update the ModernProjectCardProps interface and usage.
// For design changes, edit the Card and Box props.
import React from "react";
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Typography,
  useTheme,
  Link,
  Stack,
  Tooltip,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  LinkedIn,
  Email,
  GitHub,
  Article,
  Language,
  Description,
  Person
} from "@mui/icons-material";
import { TeamMember, ProjectLinks } from "../data/newProjectData";

interface ModernProjectCardProps {
  title: string;
  tpm: string;
  description: string;
  teamMembers: TeamMember[];
  links?: ProjectLinks;
  collaboration?: string;
  tags: string[];
}

const ModernProjectCard: React.FC<ModernProjectCardProps> = ({
  title,
  tpm,
  description,
  teamMembers,
  links,
  collaboration,
  tags,
}) => {
  const theme = useTheme();

  const getContactIcon = (type: 'email' | 'linkedin') => {
    switch (type) {
      case 'email':
        return <Email fontSize="small" />;
      case 'linkedin':
        return <LinkedIn fontSize="small" />;
      default:
        return <Person fontSize="small" />;
    }
  };

  const getLinkIcon = (type: 'website' | 'repository' | 'paper' | 'documentation') => {
    switch (type) {
      case 'website':
        return <Language fontSize="small" />;
      case 'repository':
        return <GitHub fontSize="small" />;
      case 'paper':
        return <Article fontSize="small" />;
      case 'documentation':
        return <Description fontSize="small" />;
      default:
        return <Language fontSize="small" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{ height: "100%" }}
    >
      <Card
        sx={{
          backgroundColor: theme.palette.background.paper,
          border: `3px solid ${theme.palette.primary.main}`,
          borderRadius: 4,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "all 0.3s ease",
          position: "relative",
          overflow: "hidden",
          boxShadow: `0 4px 16px rgba(0, 0, 0, 0.2)`,
          "&:hover": {
            boxShadow: `0 8px 20px rgba(0, 0, 0, 0.25)`,
            borderColor: theme.palette.primary.light,
          },
        }}
      >
      <CardContent sx={{ flex: 1, p: 4 }}>
        {/* Header */}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              color: theme.palette.text.primary,
              lineHeight: 1.2,
            }}
          >
            {title}
          </Typography>
        </Box>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.secondary,
            lineHeight: 1.7,
            mb: 4,
            fontSize: "1rem",
            fontWeight: 400,
          }}
        >
          {description}
        </Typography>

        {/* TPM Contact Info */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 700,
              mb: 3,
              fontSize: "1.1rem",
              letterSpacing: "0.5px",
            }}
          >
            Technical Product Managers
          </Typography>
          <Stack spacing={2}>
            {teamMembers.map((member, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: 2.5,
                  borderRadius: 3,
                  backgroundColor: `${theme.palette.background.default}30`,
                  border: `1px solid ${theme.palette.primary.main}15`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: `${theme.palette.primary.main}08`,
                    borderColor: `${theme.palette.primary.main}30`,
                  },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                    fontSize: "1rem",
                  }}
                >
                  {member.name}
                </Typography>
                <Stack direction="row" spacing={1}>
                  {member.email && (
                    <Tooltip title={`Email ${member.name}`} arrow>
                      <IconButton
                        component={Link}
                        href={`mailto:${member.email}`}
                        size="medium"
                        sx={{
                          color: theme.palette.primary.main,
                          backgroundColor: `${theme.palette.primary.main}12`,
                          borderRadius: 2,
                          "&:hover": {
                            backgroundColor: `${theme.palette.primary.main}20`,
                          },
                        }}
                      >
                        {getContactIcon('email')}
                      </IconButton>
                    </Tooltip>
                  )}
                  {member.linkedin && (
                    <Tooltip title={`LinkedIn - ${member.name}`} arrow>
                      <IconButton
                        component={Link}
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="medium"
                        sx={{
                          color: theme.palette.primary.main,
                          backgroundColor: `${theme.palette.primary.main}12`,
                          borderRadius: 2,
                          "&:hover": {
                            backgroundColor: `${theme.palette.primary.main}20`,
                          },
                        }}
                      >
                        {getContactIcon('linkedin')}
                      </IconButton>
                    </Tooltip>
                  )}
                </Stack>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Project Links */}
        {links && Object.keys(links).length > 0 && (
          <Box sx={{ mt: "auto" }}>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                mb: 2,
                fontSize: "1.1rem",
                letterSpacing: "0.5px",
              }}
            >
              Project Resources
            </Typography>
            <Stack direction="row" spacing={1.5} sx={{ flexWrap: "wrap", gap: 1.5 }}>
              {Object.entries(links).map(([key, url]) => (
                <Tooltip key={key} title={key.charAt(0).toUpperCase() + key.slice(1)} arrow>
                  <IconButton
                    component={Link}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="large"
                    sx={{
                      backgroundColor: `${theme.palette.primary.main}15`,
                      color: theme.palette.primary.main,
                      borderRadius: 2.5,
                      border: `1px solid ${theme.palette.primary.main}25`,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: `${theme.palette.primary.main}25`,
                        borderColor: theme.palette.primary.main,
                      },
                    }}
                  >
                    {getLinkIcon(key as any)}
                  </IconButton>
                </Tooltip>
              ))}
            </Stack>
          </Box>
        )}
      </CardContent>
    </Card>
    </motion.div>
  );
};

export default ModernProjectCard;
