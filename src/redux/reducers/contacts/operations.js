import { createAsyncThunk } from "@reduxjs/toolkit";
import { FETCH_CONTACTS } from "./contants";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
  FETCH_CONTACTS,
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://6849397645f4c0f5ee708189.mockapi.io/contacts"
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
