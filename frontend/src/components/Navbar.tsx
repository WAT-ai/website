import React, { useState, useEffect, useCallback } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/wat_ai_icon.svg";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleScroll = useCallback(() => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const toggleDrawer = useCallback(
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    },
    []
  );

  const menuItems = [
    { text: "About", link: "/" },
    { text: "Team", link: "/team" },
    { text: "Projects", link: "/projects" },
    { text: "Events", link: "/events" },
    { text: "Blog", link: "/blog" },
    { text: "Contact", link: "/contact" },
    { text: "Apply", link: "/apply" },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: isSticky
          ? theme.palette.background.default
          : "transparent",
        transition: theme.transitions.create("background-color", {
          duration: theme.transitions.duration.standard,
          easing: theme.transitions.easing.easeInOut,
        }),
        boxShadow: isSticky ? theme.shadows[4] : "none",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "center", // Center the content within the toolbar
          position: "relative",
          py: theme.spacing(2),
          px: isMobile ? theme.spacing(2) : theme.spacing(5),
          backgroundColor: theme.palette.background.default,
        }}
      >
        <RouterLink
          to="/"
          style={{
            position: "absolute",
            left: theme.spacing(2.5),
            display: "flex",
            alignItems: "center",
          }}
        >
          <Logo
            style={{
              height: "40px",
              maxHeight: "100%",
              width: "auto",
            }}
          />
        </RouterLink>

        <Box
          sx={{ display: "flex", alignItems: "center", gap: theme.spacing(3) }}
        >
          {!isMobile &&
            menuItems.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                component={RouterLink}
                to={item.link}
                sx={{
                  color: theme.palette.primary.main,
                  "&:hover": {
                    color: theme.palette.text.primary,
                  },
                }}
              >
                <Typography
                  variant="button"
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: theme.typography.fontWeightRegular,
                    fontSize: theme.typography.body1.fontSize,
                  }}
                >
                  {item.text}
                </Typography>
              </Button>
            ))}
        </Box>

        {isMobile && (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{
              position: "absolute", // Position the menu icon absolutely
              right: theme.spacing(2.5), // Align to the right side
              color: theme.palette.primary.main,
            }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          PaperProps={{
            sx: {
              backgroundColor: theme.customColors.transparentSecondary,
              borderRadius: theme.shape.borderRadius,
              mt: theme.spacing(2),
              mr: theme.spacing(1),
              overflow: "hidden",
            },
          }}
        >
          <Box
            sx={{ width: 250, height: "100%" }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {menuItems.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  component={RouterLink}
                  to={item.link}
                  sx={{
                    "& .MuiListItemText-root": {
                      textAlign: "center",
                      color: theme.palette.primary.main,
                    },
                    "&:hover": {
                      backgroundColor: theme.customColors.transparentPrimary,
                    },
                  }}
                >
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
