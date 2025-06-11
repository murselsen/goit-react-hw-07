import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { SLICE_NAME } from "./contants";

const initialValues = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: SLICE_NAME,
  initialState: initialValues,
  reducers: {},
  extraReducers: (builder) => {},
});

const contactsPersistConfig = {
  key: "contacts", // Local storage'da kullanılacak anahtar
  storage, // Depolama yöntemi (localStorage)
  whitelist: ["items"], // Sadece items dizisini persist et
};

// Persist edilmiş reducer oluştur
const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsSlice.reducer
);

export const selectContacts = (state) => {
  if (state.filters.search) {
    return state.contacts.items.filter((contact) =>
      contact.name.toLowerCase().includes(state.filters.search.toLowerCase())
    );
  }
  return state.contacts.items;
};
export const { addContact, deleteContact } = contactsSlice.actions;
export default persistedContactsReducer;
