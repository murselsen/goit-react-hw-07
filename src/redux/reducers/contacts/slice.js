import { createSlice } from "@reduxjs/toolkit";

import {
  SLICE_NAME,
  FETCH_CONTACTS_PENDING,
  FETCH_CONTACTS_FULFILLED,
  FETCH_CONTACTS_REJECTED,
  ADD_CONTACT_PENDING,
  ADD_CONTACT_FULFILLED,
  ADD_CONTACT_REJECTED,
  DELETE_CONTACT_PENDING,
  DELETE_CONTACT_FULFILLED,
  DELETE_CONTACT_REJECTED,
} from "./contants";

const initialValues = {
  items: [],
  isLoading: false,
  error: null,
};
const contactsSlice = createSlice({
  name: SLICE_NAME,
  initialState: initialValues,
  reducers: {},
  extraReducers: (builder) => {
    // FETCH_CONTACTS işlemleri için ekstra reducer'lar
    builder.addCase(FETCH_CONTACTS_PENDING, (state) => {
      state.isLoading = true;
    });
    builder.addCase(FETCH_CONTACTS_FULFILLED, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    });
    builder.addCase(FETCH_CONTACTS_REJECTED, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // ADD_CONTACT işlemleri için ekstra reducer'lar
    builder.addCase(ADD_CONTACT_PENDING, (state) => {
      state.isLoading = true;
    });
    builder.addCase(ADD_CONTACT_FULFILLED, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    });
    builder.addCase(ADD_CONTACT_REJECTED, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // DELETE_CONTACT işlemleri için ekstra reducer'lar
    builder.addCase(DELETE_CONTACT_PENDING, (state) => {
      state.isLoading = true;
    });
    builder.addCase(DELETE_CONTACT_FULFILLED, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload.id
      );
    });
    builder.addCase(DELETE_CONTACT_REJECTED, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const selectContacts = (state) => {
  if (state.filters.search) {
    return state.contacts.items.filter((contact) =>
      contact.name.toLowerCase().includes(state.filters.search.toLowerCase())
    );
  }
  return state.contacts.items;
};

export const isLoading = (state) => state.contacts.isLoading;

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
