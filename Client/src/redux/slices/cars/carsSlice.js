import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllCars = async () => {
  const response = await axios(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/cars/getcardetails`
  );
  return response.data.data;
};

export const fetchCarDetailsByCarId = async (carId) => {
  const response = await axios(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/cars/getcardetailsbycar?carId=${carId}`
  );
  return response.data.data;
};

export const fetchFilteredCars = async ({
  brandId = undefined,
  colorId = undefined,
  status = undefined,
}) => {
  let newPath = "/cars/getWithFilter?";

  if (brandId !== undefined) {
    newPath += `brandId=${brandId}&`;
  }
  if (colorId !== undefined) {
    newPath += `colorId=${colorId}&`;
  }
  if (status !== undefined) {
    newPath += `status=${status}&`;
  } else {
  }
  const response = await axios(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}${newPath}`
  );
  return response.data.data;
};

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    currentCar: {},
  },
  reducers: {},
  extraReducers: {
    [fetchAllCars.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.items = action.payload;
    },
    [fetchCarDetailsByCarId.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.items = action.payload;
    },
    [fetchFilteredCars.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.items = action.payload;
    },
  },
});

export default carsSlice.reducer;
