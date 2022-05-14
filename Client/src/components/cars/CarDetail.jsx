import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

import Slide from "../utilities/Slide";
import UserLayout from "../layouts/UserLayout";

const CarDetail = () => {
  return (
    <UserLayout>
      <div style={{ width: "90%", margin: "1rem auto" }}>
        <div style={{ width: "90%", height: "370px", margin: "0 auto" }}>
          <Slide />
        </div>
        <div style={{ marginTop: "10rem" }}>
          <Typography variant="h6" align="left">
            Details
          </Typography>
          <TableContainer sx={{ marginTop: "1rem" }}>
            <Table sx={{ width: "100%" }} size="small">
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography sx={{ fontSize: "0.85rem" }}>Brand</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography sx={{ fontSize: "1.15rem" }}>
                      Mercedes
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography sx={{ fontSize: "0.85rem" }}>Model</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography sx={{ fontSize: "1.15rem" }}>
                      Coupe 3
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="rent-button-container">
          <button className="rent-buttons" id="login-button">
            Rent
          </button>
        </div>
      </div>
    </UserLayout>
  );
};

export default CarDetail;
