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
import { fetchRentableCars } from "../../redux/slices/rentals/rentalsSlice";

const RentableCars = () => {
  const keys = ["carName", "customerInfo", "companyName", "rentDate"];

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentlyLeasedCars = useSelector(
    (state) => state.rentals.rentableCars
  );

  const [seeMoreLinkVisibility, setSeeMoreLinkVisibility] =
    React.useState(true);
  const [filteredSearch, setFilteredSearch] = React.useState("");

  const navigateToRentals = () => {
    navigate("undelivered");
  };

  const filterBySearchBar = (data) => {
    return data.filter(
      (item) =>
        keys.some((key) =>
          item[key]?.toString().toLowerCase().includes(filteredSearch)
        ) // satırlarca or sorgusu yazmak yerine filtrelerken olabilecekleri listeleyen method some metodudur.
    );
  };

  const filteredCars = filterBySearchBar(currentlyLeasedCars);

  useEffect(() => {
    dispatch(fetchRentableCars());
  }, []);

  useEffect(() => {
    setSeeMoreLinkVisibility(!pathname.includes("undelivered"));
  }, [navigate]);

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
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCars.map((car) => (
              <TableRow key={car.rentalID}>
                <TableCell>{car.carName}</TableCell>
                <TableCell>{car.customerInfo}</TableCell>
                <TableCell>{car.companyName}</TableCell>
                <TableCell>{car.rentDate}</TableCell>
                <TableCell>
                  {car.returnDate !== null ? car.returnDate : "Not Delivered"}
                </TableCell>
                <TableCell align="right">
                  <Link
                    color="secondary"
                    href="#"
                    // onClick={preventDefault}
                    sx={{ mt: 3 }}
                  >
                    See more rental details...
                  </Link>
                </TableCell>
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

export default RentableCars;
