import { createAsyncThunk } from "@reduxjs/toolkit";
import { ADD_CONTACT, DELETE_CONTACT, FETCH_CONTACTS } from "./contants";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
  FETCH_CONTACTS,
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://6849397645f4c0f5ee708189.mockapi.io/contacts"
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  ADD_CONTACT,
  async (payload, thunkAPI) => {
    try {
      console.log("Payload in addContact:", payload);

      const response = await axios.post(
        "https://6849397645f4c0f5ee708189.mockapi.io/contacts",
        payload,
        {
          "Content-Type": "application/json",
          Accept: "application/json",
        }
      );
      console.log("Response from addContact:", response);
      return response.data;
    } catch (error) {
      console.error("Error in addContact:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  DELETE_CONTACT,
  async (payload, thunkAPI) => {
    try {
      const contactId = payload.id; // Assuming payload is the contact ID
      const response = await axios.delete(
        `https://6849397645f4c0f5ee708189.mockapi.io/contacts/${contactId}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
