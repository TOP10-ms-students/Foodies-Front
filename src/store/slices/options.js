import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  areas: [],
  categories: [],
};

export const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    setAreas: (state, action) => {
      state.areas = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setAreas, setCategories } = optionsSlice.actions;

export default optionsSlice.reducer;
