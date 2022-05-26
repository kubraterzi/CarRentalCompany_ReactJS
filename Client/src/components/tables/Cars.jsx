import React, { useEffect } from "react";

import {
  Button,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { fetchAllCars } from "../../redux/slices/cars/carsSlice";
import { useLocation, useNavigate } from "react-router-dom";
import TableView from "../utilities/TableView";
import CarModal from "../cars/modals/CarModal";

const Cars = () => {
  //constants
  const keys = [
    "brandName",
    "colorName",
    "brandModel",
    "description",
    "modelYear",
    "dailyPrice",
  ];

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [seeMoreLinkVisibility, setSeeMoreLinkVisibility] =
    React.useState(true);
  const [allCars, setAllCars] = React.useState([]);
  const [currentCar, setCurrentCar] = React.useState({});

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const handleOpen = (car) => {
    setCurrentCar(car.carID ? car : null);
    setOpen(true);
  };

  const navigateToRentals = () => {
    navigate("cars");
  };

  useEffect(() => {
    setSeeMoreLinkVisibility(!pathname.includes("cars"));
  }, [navigate]);
  const [filteredSearch, setFilteredSearch] = React.useState("");

  useEffect(() => {
    const fetchData = async () => {
      const getAllCars = await fetchAllCars();
      setAllCars(getAllCars);
    };
    fetchData();
  }, []);

  const filterBySearchBar = (data) => {
    return data.filter(
      (item) =>
        keys.some((key) =>
          item[key]?.toString().toLowerCase().includes(filteredSearch)
        ) // satırlarca or sorgusu yazmak yerine filtrelerken olabilecekleri listeleyen method some metodudur.
    );
  };

  const filteredCars = filterBySearchBar(allCars);

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
              <TableCell align="right">
                <Button onClick={handleOpen}>
                  <AddIcon
                    sx={{ color: "rgb(94, 94, 94)", fontSize: "large" }}
                  />
                </Button>
              </TableCell>
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
                <TableCell align="right">
                  <Button onClick={() => handleOpen(car)}>
                    <EditIcon
                      sx={{ color: "rgb(94, 94, 94)", fontSize: "large" }}
                    />
                  </Button>
                  <Button>
                    <DeleteIcon
                      sx={{ color: "rgb(94, 94, 94)", fontSize: "large" }}
                    />
                  </Button>
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

      <CarModal open={open} currentCar={currentCar} handleClose={handleClose} />
    </TableView>
  );
};

export default Cars;
