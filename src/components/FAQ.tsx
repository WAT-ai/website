/**
 * FAQ - Animated accordion component for frequently asked questions
 * Supports custom title and expandable question/answer pairs
 */
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  openItemIndex?: number | null;
  variant?: "default" | "modern";
}

const FAQ: React.FC<FAQProps> = ({
  items,
  title = "Frequently Asked Questions",
  openItemIndex = null,
  variant = "default",
}) => {
  const theme = useTheme();
  const isModern = variant === "modern";
  const [expanded, setExpanded] = useState<string | false>(false);

  useEffect(() => {
    if (openItemIndex !== null) {
      setExpanded(`panel${openItemIndex}`);
    }
  }, [openItemIndex]);

  // Handle the expansion and collapse of accordion panels
  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Box
        sx={{
          maxWidth: isModern ? 960 : 800,
          mx: "auto",
          position: "relative",
          ...(isModern && {
            px: { xs: 1, sm: 2 },
            "&::before": {
              content: '""',
              position: "absolute",
              width: "70%",
              height: 220,
              top: 20,
              left: "15%",
              background: `radial-gradient(ellipse, ${theme.palette.primary.main}12, transparent 68%)`,
              filter: "blur(24px)",
              pointerEvents: "none",
            },
          }),
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: isModern ? { xs: "2.5rem", md: "3.5rem" } : { xs: "2rem", md: "2.5rem" },
            fontWeight: isModern ? 750 : 700,
            color: isModern ? theme.palette.text.primary : theme.palette.primary.main,
            textAlign: "center",
            mb: isModern ? 8 : 6,
            letterSpacing: isModern ? "-0.045em" : undefined,
            position: "relative",
            ...(isModern && {
              "&::after": {
                content: '""',
                display: "block",
                width: 72,
                height: 2,
                mt: 2,
                mx: "auto",
                borderRadius: 99,
                background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
              },
            }),
          }}
        >
          {title}
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: isModern ? 1.5 : 2 }}>
          {items.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                backgroundColor: isModern ? "rgba(20, 20, 20, 0.82)" : theme.palette.background.paper,
                backgroundImage: isModern
                  ? `linear-gradient(110deg, ${theme.palette.primary.main}08, transparent 42%)`
                  : "none",
                backdropFilter: isModern ? "blur(10px)" : "none",
                border: `${isModern ? 1 : 2}px solid ${theme.palette.primary.main}${isModern ? "2B" : "20"}`,
                borderRadius: `${isModern ? 16 : 12}px !important`,
                overflow: "hidden",
                boxShadow: isModern ? "0 12px 32px rgba(0,0,0,0.16)" : "none",
                "&:before": { display: "none" },
                "&:first-of-type": {
                  borderRadius: `${isModern ? 16 : 12}px !important`,
                },
                "&:last-of-type": {
                  borderRadius: `${isModern ? 16 : 12}px !important`,
                },
                "&.Mui-expanded": {
                  margin: 0,
                  borderColor: theme.palette.primary.main,
                  borderRadius: `${isModern ? 16 : 12}px !important`,
                  boxShadow: isModern ? `0 16px 44px ${theme.palette.primary.main}12` : "none",
                },
                "&:hover": isModern ? {
                  borderColor: `${theme.palette.primary.main}66`,
                  transform: "translateY(-2px)",
                } : {},
                transition: "all 0.25s ease",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: theme.palette.primary.main,
                      fontSize: isModern ? "1.25rem" : "1.5rem",
                      ...(isModern && {
                        width: 34,
                        height: 34,
                        p: 0.75,
                        borderRadius: "50%",
                        border: `1px solid ${theme.palette.primary.main}55`,
                        backgroundColor: `${theme.palette.primary.main}0D`,
                      }),
                    }}
                  />
                }
                sx={{
                  backgroundColor: isModern ? "transparent" : `${theme.palette.primary.main}05`,
                  minHeight: isModern ? { xs: 76, md: 88 } : undefined,
                  px: isModern ? { xs: 2, sm: 3 } : undefined,
                  borderBottom: expanded === `panel${index}` 
                    ? `1px solid ${theme.palette.primary.main}20` 
                    : "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: `${theme.palette.primary.main}10`,
                  },
                  "& .MuiAccordionSummary-content": {
                    margin: isModern ? "18px 0" : "16px 0",
                    alignItems: "center",
                  },
                }}
              >
                {isModern && (
                  <Box
                    sx={{
                      color: theme.palette.primary.main,
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      width: 42,
                      flexShrink: 0,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Box>
                )}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: isModern ? 650 : 600,
                    color: theme.palette.text.primary,
                    fontSize: isModern ? { xs: "1rem", md: "1.15rem" } : { xs: "1rem", md: "1.1rem" },
                    letterSpacing: isModern ? "-0.01em" : undefined,
                  }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  padding: isModern ? { xs: 2.5, sm: 3, md: 3.5 } : 3,
                  pl: isModern ? { xs: 8, sm: 9 } : undefined,
                  backgroundColor: isModern ? "rgba(10, 10, 10, 0.35)" : theme.palette.background.paper,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: isModern ? theme.palette.text.primary : theme.palette.text.secondary,
                    lineHeight: isModern ? 1.75 : 1.6,
                    fontSize: isModern ? "1.02rem" : "1rem",
                  }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </motion.div>
  );
};

export default FAQ;
