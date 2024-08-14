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
    { text: "About", link: "/" }, // Update the link to navigate to home
    { text: "Team", link: "/team" },
    { text: "Projects", link: "/projects" },
    { text: "Events", link: "/events" },
    { text: "Contact", link: "/contact" },
    { text: "Apply", link: "/apply" },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: isSticky ? "black" : "transparent",
        transition: "background-color 0.3s ease-in-out",
        boxShadow: isSticky ? 1 : "none",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          position: "relative",
          py: 2,
          px: isMobile ? 2 : 5,
          backgroundColor: "black", // Ensures the toolbar has a black background
        }}
      >
        <RouterLink
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Logo style={{ height: "40px", maxHeight: "100%", width: "auto" }} />
        </RouterLink>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{
                ml: 2,
                color: "white", // White color for the menu icon
              }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              PaperProps={{
                sx: {
                  backgroundColor: "rgba(0, 0, 0, 0.7)", // Translucent black background
                  borderRadius: "12px", // Rounded corners
                  mt: 2, // Add margin from the top
                  mr: 1, // Add margin from the right
                  overflow: "hidden", // Prevents the content from spilling out
                },
              }}
            >
              <Box
                sx={{ width: 250, height: "100%" }} // Adjust the size as needed
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
                          color: "white", // White text color for menu items
                        },
                      }}
                    >
                      <ListItemText primary={item.text} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            {menuItems.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                component={RouterLink}
                to={item.link}
                sx={{
                  color: "primary.main",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <Typography
                  variant="button"
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: 400,
                    fontSize: "1rem",
                  }}
                >
                  {item.text}
                </Typography>
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
