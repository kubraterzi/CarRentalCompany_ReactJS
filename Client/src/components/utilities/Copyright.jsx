import React from "react";
import { Typography, Link } from "@mui/material";

const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="secondary"
      align="center"
      {...props}
      sx={{ pt: 4 }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        KT Car Rental
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
