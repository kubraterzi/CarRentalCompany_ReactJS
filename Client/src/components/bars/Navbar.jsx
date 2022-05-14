import React from "react";

import { Outlet, useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CarRentalIcon from "@mui/icons-material/CarRental";

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <div className="navbar">
      <AppBar position="static" sx={{ backgroundColor: "#222222" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <CarRentalIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                fontSize: "xx-large",
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                ml: 1,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              KT Rental
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                marginLeft: "1rem",
              }}
            >
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => navigate("/")}
              >
                {" "}
                Home{" "}
              </Button>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => navigate("about")}
              >
                {" "}
                About{" "}
              </Button>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => navigate("contact")}
              >
                {" "}
                Contact{" "}
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <button
                className="auth-buttons"
                id="login-button"
                onClick={() => navigate("/signin")}
              >
                {" "}
                Sign{" "}
              </button>
              {/* <button className="auth-buttons" id="login-button">Sign Up</button> */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </div>
  );
};

export default Navbar;
