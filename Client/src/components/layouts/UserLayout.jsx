import React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Navbar from "../bars/Navbar";
import BrandsSidebar from "../bars/BrandsSidebar";
import ColorsSidebar from "../bars/ColorsSidebar";
import { Outlet } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const UserLayout = (props) => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          flexGrow: 1,
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "1rem",
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Grid item xs={12} sx={{ marginBottom: "1rem" }}>
              <Item>
                {" "}
                <BrandsSidebar />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                {" "}
                <ColorsSidebar />
              </Item>
            </Grid>
          </Grid>
          <Grid item xs={9}>
            <Outlet />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default UserLayout;
