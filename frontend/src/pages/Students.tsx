import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Link from "@mui/material/Link";
import { motion } from "framer-motion";
import StarryBackground from "../components/StarryBackground";
import StyledBulletPoints from "../components/StyledBulletPoints";
import ImageGallery from "../components/ImageGallery";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

// Import images
import cucai1 from "../assets/studentLandingPage/cucai1.jpg"
import cucai2 from "../assets/studentLandingPage/cucai2.jpg"
import cucai3 from "../assets/studentLandingPage/cucai3.jpg"
import cucai4 from "../assets/studentLandingPage/cucai4.jpg"
import cucai5 from "../assets/studentLandingPage/cucai5.jpg"
import cucai6 from "../assets/studentLandingPage/cucai6.jpg"
import cucai7 from "../assets/studentLandingPage/cucai7.jpg"
import cucai8 from "../assets/studentLandingPage/cucai8.jpg"
import cm1 from "../assets/studentLandingPage/cm1.jpg"
import cm2 from "../assets/studentLandingPage/cm2.jpg"


const Students: React.FC = () => {
  const theme = useTheme();

  const coreMemberPoints = {
    title: "By becoming a Core Member, you will:",
    points: [
      "Lead cutting-edge AI projects and collaborate with industry partners",
      "Gain hands-on experience with advanced machine learning technologies",
      "Build a strong professional network in the AI community"
    ]
  };

  const tpmPoints = {
    title: "As a Technical Project Manager, you will:",
    points: [
      "Develop leadership skills managing cross-functional AI teams",
      "Bridge technical development with project management expertise",
      "Drive innovation and project success in AI initiatives"
    ]
  };

  const galleryImages = [
    { src: cucai1, alt: "CUCAI 24" },
    { src: cucai2, alt: "CUCAI 24" },
    { src: cucai3, alt: "CUCAI 24" },
    { src: cucai4, alt: "CUCAI 24" },
    { src: cucai5, alt: "CUCAI 24" },
    { src: cucai6, alt: "CUCAI 24" },
    { src: cucai7, alt: "CUCAI 24" },
    { src: cucai8, alt: "CUCAI 24" },
  ];

  return (
    <Box 
      sx={{
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <StarryBackground />

      {/* Why Join Section at Top */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Box
          sx={{
            py: 12,
            px: 3,
            position: "relative",
            background: `linear-gradient(135deg, 
              ${theme.palette.background.paper}, 
              ${theme.customColors.transparentPrimary})`,
            borderBottom: `1px solid ${theme.palette.divider}`,
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: "1000px",
              margin: "0 auto",
              textAlign: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Typography 
              variant="h2" 
              sx={{ 
                mb: 4,
                color: theme.palette.primary.main,
              }}
            >
              Why Join WAT.ai?
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: "1.3rem",
                lineHeight: 1.8,
                color: theme.palette.text.primary,
              }}
            >
              At WAT.ai, you'll have unprecedented access to cutting-edge AI projects and research
              opportunities. Our strong connections with faculty members often lead to research
              assistant positions for our members. Work alongside industry partners, develop
              practical skills, and be part of groundbreaking AI initiatives.
            </Typography>
          </Box>
        </Box>
      </motion.div>

      {/* Core Member Section */}
      <motion.div>
        <Box
          sx={{
            py: 12,
            px: 3,
            position: "relative",
            background: `linear-gradient(135deg, 
              ${theme.palette.primary.main}20, 
              ${theme.palette.background.default}CC)`,
            borderBottom: `1px solid ${theme.palette.divider}`,
            minHeight: "80vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: "1200px",
              margin: "0 auto",
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "flex-start",
              gap: 6,
            }}
          >
            <Box sx={{ 
              flex: 1,
              textAlign: "left",
            }}>
              <Typography variant="h3" sx={{ mb: 4 }}>
                Core Member
              </Typography>
              <StyledBulletPoints {...coreMemberPoints} align="left" />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" }
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", md: "flex-start" } }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: theme.palette.primary.main,
                      textAlign: "center",
                      mt: 16,
                      mb: 2,
                    }}
                  >
                    Interested in applying? Check our socials for updates!
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: theme.spacing(3),
                      mt: 2,
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
                </Box>
              </Box>
            </Box>
            <Box sx={{ 
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              height: "100%",
            }}>
              <Box
                component="img"
                src={cm1}
                alt="Core Member 1"
                sx={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: 2,
                  boxShadow: theme.shadows[4],
                }}
              />
              <Box
                component="img"
                src={cm2}
                alt="Core Member 2"
                sx={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: 2,
                  boxShadow: theme.shadows[4],
                }}
              />
            </Box>
          </Box>
        </Box>
      </motion.div>

      {/* TPM Section */}
      <motion.div>
        <Box
          sx={{
            py: 12,
            px: 3,
            position: "relative",
            background: `linear-gradient(to bottom, 
              ${theme.palette.background.default}, 
              ${theme.palette.primary.main}20)`,
            borderBottom: `1px solid ${theme.palette.divider}`,
            minHeight: "80vh",
          }}
        >
          <Box
            sx={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              flexDirection: { xs: "column", md: "row-reverse" },
              alignItems: "center",
              gap: 6,
            }}
          >
            <Box 
              sx={{ 
                flex: 1,
                textAlign: { xs: "left", md: "right" }
              }}
            >
              <Typography 
                variant="h3" 
                sx={{ 
                  mb: 4,
                  color: theme.palette.primary.main,
                }}
              >
                Technical Project Manager
              </Typography>
              <StyledBulletPoints {...tpmPoints} align="right" />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "flex-start", md: "flex-end" }
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", md: "flex-end" } }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: theme.palette.primary.main,
                      textAlign: "center",
                      mt: 16,
                      mb: 2,
                    }}
                  >
                    Interested in applying? Check our socials for updates!
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: theme.spacing(3),
                      mt: 2,
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
                </Box>
              </Box>
            </Box>
            <Box sx={{ 
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              height: "100%",
            }}>
              <Box
                component="img"
                src=""
                alt="TPM 1"
                sx={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: 2,
                  boxShadow: theme.shadows[4],
                }}
              />
              <Box
                component="img"
                src=""
                alt="TPM 2"
                sx={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: 2,
                  boxShadow: theme.shadows[4],
                }}
              />
            </Box>
          </Box>
        </Box>
      </motion.div>

      {/* Gallery Section - Gold to Black */}
      <motion.div>
        <Box
          sx={{
            py: 12,
            px: 3,
            position: "relative",
            background: `linear-gradient(135deg, 
              ${theme.palette.primary.main}20, 
              ${theme.palette.background.default})`,
            minHeight: "60vh",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 6,
              color: theme.palette.primary.main,
            }}
          >
            Our Community
          </Typography>
          <ImageGallery images={galleryImages} />
        </Box>
      </motion.div>
    </Box>
  );
};

export default Students; 