import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/wat_ai_icon.svg";
import Box from "@mui/material/Box";

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Toolbar sx={{ justifyContent: "center", position: "relative", py: 4 }}>
        <RouterLink
          to="/"
          style={{
            position: "absolute",
            left: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Logo style={{ height: "40px" }} />
        </RouterLink>
        <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
          {["About", "Team", "Projects", "Events", "Contact", "Apply"].map(
            (text, index) => (
              <Button
                key={index}
                color="inherit"
                component={RouterLink}
                to={`/${text.toLowerCase()}`}
                sx={{
                  color: "primary.main",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <Typography
                  variant="button"
                  sx={{ textTransform: "capitalize", fontWeight: 400 }}
                >
                  {text}
                </Typography>
              </Button>
            )
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
