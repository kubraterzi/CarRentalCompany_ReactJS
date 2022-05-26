import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

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
import { fetchAllRentals } from "../../redux/slices/rentals/rentalsSlice";

const Rentals = () => {
  const keys = ["carName", "customerInfo", "companyName", "rentDate"];

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allRentals = useSelector((state) => state.rentals.items);

  const [filteredSearch, setFilteredSearch] = React.useState("");

  const filterBySearchBar = (data) => {
    return data.filter(
      (item) =>
        keys.some((key) =>
          item[key]?.toString().toLowerCase().includes(filteredSearch)
        ) // satırlarca or sorgusu yazmak yerine filtrelerken olabilecekleri listeleyen method some metodudur.
    );
  };

  useEffect(() => {
    dispatch(fetchAllRentals());
  }, []);

  const filteredCars = filterBySearchBar(allRentals);

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
              <TableCell sx={{ fontSize: "1.15rem" }}>Customer</TableCell>
              <TableCell sx={{ fontSize: "1.15rem" }}>Company name</TableCell>
              <TableCell sx={{ fontSize: "1.15rem" }}>Rent Date</TableCell>
              <TableCell sx={{ fontSize: "1.15rem" }}>Return Date</TableCell>
              <TableCell sx={{ fontSize: "1.15rem" }}>buttons</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCars.map((rental) => (
              <TableRow key={rental.rentalID}>
                <TableCell>{rental.carName}</TableCell>
                <TableCell>{rental.customerInfo}</TableCell>
                <TableCell>{rental.companyName}</TableCell>
                <TableCell>{rental.rentDate}</TableCell>
                <TableCell>
                  {rental.returnDate !== null
                    ? rental.returnDate
                    : "Not Delivered"}
                </TableCell>
                <TableCell align="right">buttons</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </TableView>
  );
};

export default Rentals;
