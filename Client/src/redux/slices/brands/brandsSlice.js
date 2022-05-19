import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllBrands = createAsyncThunk("brands/getall", async () => {
  const response = await axios(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/brands/getall`
  );
  return response.data.data;
});

const brandsSlice = createSlice({
  name: "brands",
  initialState: {
    items: [],
    currentBrand: {},
  },
  reducers: {
    setCurrentBrand: (state, action) => {
      state.currentBrand = action.payload;
    },
  },
  extraReducers: {
    [fetchAllBrands.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.items = action.payload;
    },
  },
});

export const { setCurrentBrand } = brandsSlice.actions;
export default brandsSlice.reducer;
