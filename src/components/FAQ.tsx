/**
 * FAQ - Animated accordion component for frequently asked questions
 * Supports custom title and expandable question/answer pairs
 */
import React, { useState } from "react";
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
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

const FAQ: React.FC<FAQProps> = ({ items, title = "Frequently Asked Questions" }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState<string | false>(false);

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
      <Box sx={{ maxWidth: 800, mx: "auto" }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: 700,
            color: theme.palette.primary.main,
            textAlign: "center",
            mb: 6,
          }}
        >
          {title}
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {items.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                backgroundColor: theme.palette.background.paper,
                border: `2px solid ${theme.palette.primary.main}20`,
                borderRadius: "12px !important",
                overflow: "hidden",
                "&:before": { display: "none" },
                "&:first-of-type": {
                  borderRadius: "12px !important",
                },
                "&:last-of-type": {
                  borderRadius: "12px !important",
                },
                "&.Mui-expanded": {
                  margin: 0,
                  borderColor: theme.palette.primary.main,
                  borderRadius: "12px !important",
                },
                transition: "all 0.3s ease",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: theme.palette.primary.main,
                      fontSize: "1.5rem",
                    }}
                  />
                }
                sx={{
                  backgroundColor: `${theme.palette.primary.main}05`,
                  borderBottom: expanded === `panel${index}` 
                    ? `1px solid ${theme.palette.primary.main}20` 
                    : "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: `${theme.palette.primary.main}10`,
                  },
                  "& .MuiAccordionSummary-content": {
                    margin: "16px 0",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                    fontSize: { xs: "1rem", md: "1.1rem" },
                  }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  padding: 3,
                  backgroundColor: theme.palette.background.paper,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6,
                    fontSize: "1rem",
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
