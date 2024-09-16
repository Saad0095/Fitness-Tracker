import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  isAuthenticated: localStorage.getItem("isAuthenticated")
    ? JSON.parse(localStorage.getItem("isAuthenticated"))
    : false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;

      if (username !== "" && password !== "") {
        state.user = username;
        state.isAuthenticated = true;
        state.error = null;
      } else {
        state.error = "Invalid credentials";
      }
    },
    register: (state, action) => {
      const { username, password } = action.payload;

      if (username && password) {
        state.user = username;
        state.isAuthenticated = true;
        state.error = null;
      } else {
        state.error = "Registration failed";
      }
    },

    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, register, logout } = authSlice.actions;
export default authSlice.reducer;
