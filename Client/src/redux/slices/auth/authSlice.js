import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { isExpired, decodeToken } from "react-jwt";
import {
  getToken,
  removeToken,
  saveToken,
} from "./../../../helpers/localStorageOperations";

export const login = createAsyncThunk("auth/login", async (user) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/auth/login`,
    user
  );

  return response.data.data;
});

export const getUser = (token) => {
  const decodedToken = decodeToken(token);
  let user = {};
  const tokenFeatures = {
    id: "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier",
    email: "email",
    name: "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name",
    role: "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",
  };
  Object.keys(tokenFeatures).forEach((feat) => {
    user = {
      ...user,
      [feat]: decodedToken[tokenFeatures[feat]],
    };
  });
  return user;
};

export const loggedIn = () => {
  if (getToken()) {
    return !isExpired(getToken());
  }
  return false;
};

export const isAdmin = (user) => {
  const isLoggedIn = loggedIn();
  if (!isLoggedIn) {
    return false;
  }
  const claims = user.roles?.split(",");
  return claims.map((claim) => claim.toLowerCase()).includes("admin");
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: {},
    isAuth: false,
    isAdmin: false,
  },
  reducers: {
    logout: (state) => {
      removeToken();
      state.isAuth = false;
    },
    checkToken: (state, action) => {
      const token = action.payload;
      if (!token) {
        state.currentUser = {};
        state.isAuth = false;
        state.isAdmin = false;
        return;
      }
      const loggedInUser = getUser(token);
      state.currentUser = loggedInUser;
      state.isAuth = true;
      state.isAdmin = isAdmin(loggedInUser);
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      const currentToken = action.payload.token;
      saveToken(currentToken);
      state.isAuth = true;
    },
  },
});

// export const {actions: authActions} = authSlice

export const { logout, checkToken } = authSlice.actions;

export default authSlice.reducer;
