import { Dispatch } from "redux";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

interface Redux {
  getState: any;
  dispatch: Dispatch<any>;
}

export const fetchCustomers = createAsyncThunk(
  "customers/fetchCustomers",
  async (params: { q: string }) => {
    const response = await axios.get("/api/customers", {
      params,
    });

    return response.data;
  }
);

export const addCustomer = createAsyncThunk(
  "customers/addCustomer",
  async (
    data: { [key: string]: number | string },
    { getState, dispatch }: Redux
  ) => {
    const response = await axios.post("/api/customers/add", {
      data,
    });
    dispatch(fetchCustomers(getState().customers.params));

    return response.data;
  }
);

export const deleteCustomer = createAsyncThunk(
  "customers/deleteCustomer",
  async (id: number, { getState, dispatch }: Redux) => {
    const response = await axios.delete("/api/customers/delete", {
      data: id,
    });
    dispatch(fetchCustomers(getState().customers.params));

    return response.data;
  }
);

export const customersSlice = createSlice({
  name: "customers",
  initialState: {
    params: {},
    customers: [],
    customerStats: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCustomers.fulfilled, (state, action) => {
      state.params = action.payload.params;
      state.customers = action.payload.data;
    });
  },
});

export default customersSlice.reducer;
