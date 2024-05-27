import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosGetWithHeaders } from "../helpers/axiosWithHeaders";


export const loginadmin = createAsyncThunk("loginadmin", async (args, { dispatch }) => {
  const response = await axios.post(
    "http://localhost:5000/auth/login/admin",
    args
  );
  localStorage.setItem("token", response.data);
  dispatch(getMe());
});
export const loginuser = createAsyncThunk("loginuser", async (args, { dispatch }) => {
  const response = await axios.post(
    "http://localhost:5000/auth/login/user",
    args
  );
  console.log();
  localStorage.setItem("token", response.data.token);
  dispatch(getMe());
});
export const logininsr = createAsyncThunk("logininsr", async (args, { dispatch }) => {
  const response = await axios.post(
    "http://localhost:5000/auth/login/insurance-member",
    args
  );
  localStorage.setItem("token", response.data.token);
  dispatch(getMe());
});
export const loginsell = createAsyncThunk("loginsell", async (args, { dispatch }) => {
  const response = await axios.post(
    "http://localhost:5000/auth/login/agent-member",
    args
  );
  localStorage.setItem("token", response.data.token);
  dispatch(getMe());
});
export const loginrepair = createAsyncThunk("loginrepair", async (args, { dispatch }) => {
  const response = await axios.post(
    "http://localhost:5000/auth/login/repair-member",
    args
  );
  localStorage.setItem("token", response.data.token);
  dispatch(getMe());
});
export const getMe = createAsyncThunk("getMe", async () => {
  const response = await axiosGetWithHeaders('user/me')
  return response.data; 
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    me: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMe.fulfilled, (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload.id));
      state.me = action.payload;
    });
  },
});
export default authSlice.reducer;
