import React, { useEffect } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

import UserLayout from "../layouts/UserLayout";
import CarImagesSlider from "./../sliders/CarImagesSlider";
import { useParams } from "react-router-dom";
import { fetchCarDetailsByCarId } from "../../redux/slices/cars/carsSlice";

const CarDetail = (props) => {
  const { id } = useParams();

  const [currentCar, setCurrentCar] = React.useState({});

  useEffect(() => {
    const fetchData = async () => {
      const carDetails = await fetchCarDetailsByCarId(id);
      setCurrentCar(carDetails[0]);
    };

    fetchData();
  }, [id]);

  return (
    <UserLayout>
      <div style={{ width: "90%", margin: "1rem auto" }}>
        <div style={{ width: "90%", height: "370px", margin: "0 auto" }}>
          <CarImagesSlider carId={id} />
        </div>
        <div
          style={{
            marginTop: "10rem",
            backgroundColor: "#f0f0f1",
            padding: "1rem",
          }}
        >
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
                      {currentCar.brandName}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography sx={{ fontSize: "0.85rem" }}>Model</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography sx={{ fontSize: "1.15rem" }}>
                      {currentCar.brandModel}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography sx={{ fontSize: "0.85rem" }}>Color</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography sx={{ fontSize: "1.15rem" }}>
                      {currentCar.colorName}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography sx={{ fontSize: "0.85rem" }}>
                      Model Year
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography sx={{ fontSize: "1.15rem" }}>
                      {currentCar.modelYear}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography sx={{ fontSize: "0.85rem" }}>
                      Daily Price
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography>{currentCar.dailyPrice}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Typography sx={{ fontSize: "0.85rem" }}>
                      Description
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography sx={{ fontSize: "1.15rem" }}>
                      {currentCar.description}
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
