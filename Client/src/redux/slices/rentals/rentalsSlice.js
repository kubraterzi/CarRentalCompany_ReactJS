import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllRentals = createAsyncThunk(
  "rentals/getrentaldetails",
  async () => {
    const response = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/rentals/getrentaldetails`
    );
    return response.data.data;
  }
);

export const fetchUndeliveredCars = createAsyncThunk(
  "rentals/getundeliveredcardetails",
  async () => {
    const response = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/rentals/getrentaldetails`
    );
    return response.data.data.filter((rental) => rental.returnDate === null);
  }
);

export const fetchRentableCars = createAsyncThunk(
  "rentals/getrentablecardetails",
  async () => {
    const response = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/rentals/getrentaldetails`
    );
    return response.data.data.filter((rental) => rental.returnDate !== null);
  }
);

const rentalsSlice = createSlice({
  name: "rentals",
  initialState: {
    items: [],
    undeliveredCars: [],
    rentableCars: [],
  },
  reducers: {},
  extraReducers: {
    [fetchAllRentals.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.items = action.payload;
    },
    [fetchUndeliveredCars.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.undeliveredCars = action.payload;
    },
    [fetchRentableCars.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.rentableCars = action.payload;
    },
  },
});

export const {} = rentalsSlice.actions;
export default rentalsSlice.reducer;
