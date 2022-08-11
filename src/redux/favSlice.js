import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "fav",
  initialState: {
    products: [],
    quantity: 0,

  },
  reducers: {
    addFavProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
    },
    removeFavProduct: (state, action) => {
      state.quantity -= 1;
      state.products.pop(action.payload);
    },
    productFavRemoval: (state) => {
      state.products = [];
      state.quantity = 0;

    }
  },
});

export const { addFavProduct , removeFavProduct , productFavRemoval} = favSlice.actions;
export default favSlice.reducer;
