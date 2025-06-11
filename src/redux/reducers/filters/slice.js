import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.search = action.payload;
    },
  },
  selectors: {
    selectNameFilter: (state) => state.search,
  },
});

export default filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
