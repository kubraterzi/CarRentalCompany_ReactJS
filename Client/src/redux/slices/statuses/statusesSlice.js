import { createSlice } from "@reduxjs/toolkit";

const statusesSlice = createSlice({
  name: "statuses",
  initialState: {
    currentStatus: "",
  },
  reducers: {
    setCurrentStatus: (state, action) => {
      state.currentStatus = action.payload;
    },
  },
});

export const { setCurrentStatus } = statusesSlice.actions;
export default statusesSlice.reducer;
