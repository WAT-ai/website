import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTheme } from "@mui/material/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contact: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: theme.spacing(6),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <Card
        sx={{
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          width: "100%",
          maxWidth: "800px",
          borderRadius: theme.shape.borderRadius,
          border: `3px solid ${theme.palette.primary.main}`,
          boxShadow: theme.shadows[3],
          padding: theme.spacing(6),
        }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{ mb: theme.spacing(3), color: theme.palette.primary.main }}
          >
            Contact Us
          </Typography>

          <Box
            sx={{
              textAlign: "center",
              marginBottom: theme.spacing(6),
            }}
          >
            <Typography variant="body1" sx={{ mb: theme.spacing(2) }}>
              Located at 200 University Avenue West, <br />
              University of Waterloo, ON
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: theme.spacing(2),
                color: theme.palette.text.secondary,
              }}
            >
              For inquiries, please email us at{" "}
              <Link
                href="mailto:contact@watai.ca"
                sx={{
                  color: theme.palette.primary.main,
                  textDecoration: "none",
                  "&:hover": {
                    color: theme.palette.primary.light,
                  },
                }}
              >
                contact@watai.ca
              </Link>
            </Typography>

            <Typography variant="body1" sx={{ mb: theme.spacing(2) }}>
              We’re always open to new ideas, collaborations, and opportunities.
              Feel free to reach out to us anytime.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: theme.spacing(3),
              mt: theme.spacing(5),
            }}
          >
            <Link
              href="https://twitter.com/wataiteam"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: theme.palette.text.primary,
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
            >
              <TwitterIcon fontSize="large" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/wat-ai/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: theme.palette.text.primary,
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
            >
              <LinkedInIcon fontSize="large" />
            </Link>
            <Link
              href="https://www.instagram.com/wataiteam/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: theme.palette.text.primary,
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
            >
              <InstagramIcon fontSize="large" />
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Contact;
