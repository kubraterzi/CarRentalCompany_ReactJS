import React from "react";

import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

import Slide from "../utilities/Slide";

const CarItemCard = () => {
  let navigate = useNavigate();

  const buttonStyle = {
    fontSize: "0.65rem",
    color: "#fff",
    backgroundColor: "#363636",
    ":hover": { color: "#222222", backgroundColor: "#ccc" },
  };
  return (
    <Card sx={{ width: 300, marginLeft: "2rem", marginBottom: "2rem" }}>
      <CardMedia
      // component="img"
      // alt="green iguana"
      // height="200"
      // width="200"
      // image={bmw}
      >
        <Slide />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom component="div" sx={{ fontSize: "1.25rem" }}>
          Lizard
        </Typography>

        <TableContainer component={Paper} sx={{ marginTop: "1rem" }}>
          <Table sx={{ width: "100%" }}>
            <TableBody>
              <TableRow sx={{ padding: 0 }}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontSize: "0.75rem" }}
                >
                  Model
                </TableCell>
                <TableCell align="right" sx={{ fontSize: "0.85rem" }}>
                  2018
                </TableCell>
              </TableRow>
              <TableRow sx={{}}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontSize: "0.75rem" }}
                >
                  Color
                </TableCell>
                <TableCell align="right" sx={{ fontSize: "0.85rem" }}>
                  White
                </TableCell>
              </TableRow>
              <TableRow sx={{}}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontSize: "0.75rem" }}
                >
                  Daily Price
                </TableCell>
                <TableCell align="right" sx={{ fontSize: "0.85rem" }}>
                  $180
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <CardActions sx={{ float: "right" }}>
        <Button sx={buttonStyle}>Rent</Button>
        <Button sx={buttonStyle} onClick={() => navigate("/cars/id")}>
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default CarItemCard;
