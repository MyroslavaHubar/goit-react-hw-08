import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../API/server";

const setAuthHeders = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = null;
};

export const apiLogin = createAsyncThunk(
  "auth/login",
  async (FormData, thunkApi) => {
    try {
      const { data } = await instance.post("users/login", FormData);
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
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiRefresh = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      setAuthHeders(token);
      const { data } = await instance.get("users/current");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkApi) => {
      const state = thunkApi.getState();
      const token = state.auth.token;
      if (token) return true;
      return false;
    },
  }
);

export const apiLogOut = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      await instance.post("/users/logout");
      clearAuthHeader();
      return;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
