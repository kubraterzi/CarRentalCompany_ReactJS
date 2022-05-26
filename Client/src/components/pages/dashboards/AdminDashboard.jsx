import React from "react";

import UndeliveredCars from "../../tables/UndeliveredCars";
import Copyright from "../../utilities/Copyright";

import { Container, Grid, Paper } from "@mui/material";

const AdminDashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            {/* <Chart /> */}
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            {/* <Deposits /> */}
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <UndeliveredCars />
        </Grid>
      </Grid>
      <Copyright />
    </Container>
  );
};

export default AdminDashboard;
