import { createSlice } from "@reduxjs/toolkit";
import Register from "./Register";

const initialState = {
  username: localStorage.getItem("username")
    ? JSON.parse(localStorage.getItem("username"))
    : null,
  password: localStorage.getItem("password")
    ? JSON.parse(localStorage.getItem("password"))
    : null,
  isAuthenticated: localStorage.getItem("isAuthenticated")
    ? JSON.parse(localStorage.getItem("isAuthenticated"))
    : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },

    register: (state, action) => {
      const { username, password } = action.payload;
      state.username = username;
      state.password = password;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.username = null;
    },
  },
});

export const { login, logout,register } = authSlice.actions;
export default authSlice.reducer;

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       const { username, password } = action.payload;

//       if (username !== "" && password !== "") {
//         state.user = username;
//         state.isAuthenticated = true;
//         state.error = null;
//       } else {
//         state.error = "Invalid credentials";
//       }
//     },
//     register: (state, action) => {
//       const { username, password } = action.payload;

//       if (username && password) {
//         state.user = username;
//         state.isAuthenticated = true;
//         state.error = null;
//       } else {
//         state.error = "Registration failed";
//       }
//     },

//     logout: (state) => {
//       state.user = null;
//       state.isAuthenticated = false;
//     },
//   },
// });
