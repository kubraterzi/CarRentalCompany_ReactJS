import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setAuthorizationToken } from "./../../../helpers/setAuthorizationToken";

export const login = createAsyncThunk("auth/login", async (user) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/auth/login`,
    user
  );

  if (response.data.successStatus) {
    const { token } = response.data.data;
    localStorage.setItem("token", token);
    setAuthorizationToken(token);
  }
  return response.data.data;
});

export const logout = () => {
  localStorage.removeItem("token");
  setAuthorizationToken(false);
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUserToken: "",
    currentUser: {},
  },
  reducers: {},
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.currentUserToken = action.payload;
    },
  },
});

export default authSlice.reducer;
