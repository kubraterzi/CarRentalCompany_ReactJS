import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllColors = createAsyncThunk("colors/getall", async () => {
  const response = await axios(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/colors/getall`
  );
  return response.data.data;
});

const colorsSlice = createSlice({
  name: "colors",
  initialState: {
    items: [],
    currentColor: {},
  },
  reducers: {
    setCurrentColor: (state, action) => {
      state.currentColor = action.payload;
    },
  },
  extraReducers: {
    [fetchAllColors.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.items = action.payload;
    },
  },
});

export const { setCurrentColor } = colorsSlice.actions;
export default colorsSlice.reducer;
