// ModernProjectCard.tsx - Card for displaying project info
// --------------------------------------------------------
// This component displays a modern card for project details, including title, description, and tags.
// Edit this file to customize card layout, style, or props.

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
  Chip,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  LinkedIn,
  Email,
  GitHub,
  Article,
  Language,
  Description,
} from "@mui/icons-material";
import { TeamMember, ProjectLinks } from "../data/projectData";

interface ModernProjectCardProps {
  title: string;
  tpms: TeamMember[];
  description: string;
  links?: ProjectLinks;
  collaboration?: string;
}

const ModernProjectCard: React.FC<ModernProjectCardProps> = ({
  title,
  tpms,
  description,
  links,
  collaboration,
}) => {
  const theme = useTheme();

  // Function to get the appropriate link icon based on the type
  const getLinkIcon = (type: 'website' | 'repository' | 'paper' | 'documentation') => {
    switch (type) {
      case 'website':
        return <Language sx={{ fontSize: "1rem" }} />;
      case 'repository':
        return <GitHub sx={{ fontSize: "1rem" }} />;
      case 'paper':
        return <Article sx={{ fontSize: "1rem" }} />;
      case 'documentation':
        return <Description sx={{ fontSize: "1rem" }} />;
      default:
        return <Language sx={{ fontSize: "1rem" }} />;
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
          border: `2px solid ${theme.palette.primary.main}30`,
          borderRadius: 3,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "all 0.3s ease",
          position: "relative",
          overflow: "hidden",
          boxShadow: `0 2px 8px rgba(0, 0, 0, 0.1)`,
          "&:hover": {
            boxShadow: `0 8px 24px rgba(0, 0, 0, 0.15)`,
            borderColor: theme.palette.primary.main,
            transform: "translateY(-4px)",
          },
        }}
      >
      <CardContent sx={{ flex: 1, p: 3, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 700,
              color: theme.palette.text.primary,
              lineHeight: 1.3,
              mb: 1,
            }}
          >
            {title}
          </Typography>

          {/* Collaboration Badge */}
          {collaboration && (
            <Chip
              label={collaboration}
              size="small"
              sx={{
                backgroundColor: `${theme.palette.secondary.main}15`,
                color: theme.palette.secondary.main,
                fontWeight: 600,
                fontSize: "0.7rem",
                height: "22px",
              }}
            />
          )}
        </Box>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            lineHeight: 1.6,
            mb: 2.5,
            fontSize: "0.9rem",
          }}
        >
          {description}
        </Typography>

        {/* Bottom Section - pushed to bottom */}
        <Box sx={{ mt: "auto" }}>
          {/* Project Links */}
          {links && Object.keys(links).length > 0 && (
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="caption"
                sx={{
                  color: theme.palette.text.secondary,
                  fontWeight: 600,
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  mb: 1,
                  display: "block",
                }}
              >
              </Typography>
              <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
                {Object.entries(links).map(([key, url]) => (
                  <Button
                    key={key}
                    component={Link}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    variant="outlined"
                    startIcon={getLinkIcon(key as any)}
                    sx={{
                      textTransform: "capitalize",
                      fontSize: "0.75rem",
                      borderColor: `${theme.palette.primary.main}30`,
                      color: theme.palette.primary.main,
                      "&:hover": {
                        borderColor: theme.palette.primary.main,
                        backgroundColor: `${theme.palette.primary.main}08`,
                      },
                    }}
                  >
                    {key}
                  </Button>
                ))}
              </Stack>
            </Box>
          )}

          {/* TPM Contact Info - With Labels */}
          {tpms.length > 0 && (
            <Box>
              <Typography
                variant="caption"
                sx={{
                  color: theme.palette.text.secondary,
                  fontWeight: 600,
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  mb: 1,
                  display: "block",
                }}
              >
                Technical Project Managers
              </Typography>
              <Stack spacing={1}>
                {tpms.map((member, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      flexWrap: "wrap",
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: theme.palette.text.primary,
                        fontWeight: 500,
                        fontSize: "0.8rem",
                      }}
                    >
                      {member.name}
                    </Typography>
                    {(member.email || member.linkedin) && (
                      <Stack direction="row" spacing={0.5}>
                        {member.email && (
                          <Tooltip title="Email" arrow>
                            <IconButton
                              component={Link}
                              href={`mailto:${member.email}`}
                              size="small"
                              sx={{
                                color: theme.palette.primary.main,
                                backgroundColor: `${theme.palette.primary.main}08`,
                                width: 28,
                                height: 28,
                                "&:hover": {
                                  backgroundColor: `${theme.palette.primary.main}15`,
                                },
                              }}
                            >
                              <Email sx={{ fontSize: "0.9rem" }} />
                            </IconButton>
                          </Tooltip>
                        )}
                        {member.linkedin && (
                          <Tooltip title="LinkedIn" arrow>
                            <IconButton
                              component={Link}
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              size="small"
                              sx={{
                                color: theme.palette.primary.main,
                                backgroundColor: `${theme.palette.primary.main}08`,
                                width: 28,
                                height: 28,
                                "&:hover": {
                                  backgroundColor: `${theme.palette.primary.main}15`,
                                },
                              }}
                            >
                              <LinkedIn sx={{ fontSize: "0.9rem" }} />
                            </IconButton>
                          </Tooltip>
                        )}
                      </Stack>
                    )}
                  </Box>
                ))}
              </Stack>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
    </motion.div>
  );
};

export default ModernProjectCard;
