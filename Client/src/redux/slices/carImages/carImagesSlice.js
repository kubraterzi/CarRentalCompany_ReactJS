import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCarImages = async (carId) => {
  const response = await axios(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/carimages/getimagesbycar?carId=${carId}`
  );
  return response.data.data;
};

const carImagesSlice = createSlice({
  name: "carImages",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetchCarImages.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.items = action.payload;
    },
  },
});

export default carImagesSlice.reducer;
