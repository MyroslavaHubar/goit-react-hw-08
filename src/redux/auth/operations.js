import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

const setAuthHeders = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const apiLogin = createAsyncThunk(
  "auth/login",
  async (FormData, thunkApi) => {
    try {
      const { data } = await instance.post("users/login", FormData);
      //   console.log("data: ", data);
      setAuthHeders(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiRegister = createAsyncThunk(
  "auth/register",
  async (FormData, thunkApi) => {
    try {
      const { data } = await instance.post("users/signup", FormData);
      setAuthHeders(data.token);
      console.log("data: ", data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
