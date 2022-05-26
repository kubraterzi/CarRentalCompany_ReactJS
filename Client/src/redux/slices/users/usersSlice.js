import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllUsers = createAsyncThunk("users/getall", async () => {
  const response = await axios(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/users/getall`
  );
  return response.data.data;
});

const usersSlice = createSlice({
  name: "rentals",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetchAllUsers.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.items = action.payload;
    },
  },
});

export const {} = usersSlice.actions;
export default usersSlice.reducer;
