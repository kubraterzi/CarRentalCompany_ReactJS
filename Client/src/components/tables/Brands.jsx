import React from "react";

import {
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import TableView from "../utilities/TableView";

const Brands = () => {
  return (
    <TableView
      filteredSearch={filteredSearch}
      setFilteredSearch={setFilteredSearch}
    >
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          marginTop: "1rem",
        }}
      >
        <Typography component="h2" variant="h5" color="secondary" gutterBottom>
          Recent Title
        </Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "1.15rem" }}>Brand</TableCell>
              <TableCell sx={{ fontSize: "1.15rem" }}>Brand Model</TableCell>
              <TableCell sx={{ fontSize: "1.15rem" }}>Color</TableCell>
              <TableCell sx={{ fontSize: "1.15rem" }}>Description</TableCell>
              <TableCell sx={{ fontSize: "1.15rem" }}>Model Year</TableCell>
              <TableCell sx={{ fontSize: "1.15rem" }}>Daily Price</TableCell>
              <TableCell align="right">Buttons</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCars.map((car) => (
              <TableRow key={car.carID}>
                <TableCell>{car.brandName}</TableCell>
                <TableCell>{car.brandModel}</TableCell>
                <TableCell>{car.colorName}</TableCell>
                <TableCell>{car.description}</TableCell>
                <TableCell>{car.modelYear}</TableCell>
                <TableCell>{car.dailyPrice}</TableCell>
                <TableCell align="right">Buttons</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {seeMoreLinkVisibility && (
          <Link
            color="secondary"
            onClick={navigateToRentals}
            sx={{ mt: 3, cursor: "pointer" }}
          >
            See more currently leased cars
          </Link>
        )}
      </Paper>
    </TableView>
  );
};

export default Brands;
