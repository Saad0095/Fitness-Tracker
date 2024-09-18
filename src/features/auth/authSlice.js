import { createSlice } from "@reduxjs/toolkit";
import Register from "./Register";

const initialState = {
  username: localStorage.getItem("username")
    ? JSON.parse(localStorage.getItem("username"))
    : null,
  password: localStorage.getItem("email")
    ? JSON.parse(localStorage.getItem("email"))
    : null,
  password: localStorage.getItem("password")
    ? JSON.parse(localStorage.getItem("password"))
    : null,
  isRegistered: localStorage.getItem("isRegistered")
    ? JSON.parse(localStorage.getItem("isRegistered"))
    : false,
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
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
    },

    register: (state, action) => {
      const { username, email, password } = action.payload;
      state.username = username;
      state.password = password;
      state.email = email;
      state.isRegistered = true;

      localStorage.setItem("isRegistered", JSON.stringify(true));
      localStorage.setItem("username", JSON.stringify(username));
      localStorage.setItem("email", JSON.stringify(email));
      localStorage.setItem("password", JSON.stringify(password));
    },

    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.setItem("isAuthenticated", JSON.stringify(false));
    },
  },
});

export const { login, logout, register } = authSlice.actions;
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
