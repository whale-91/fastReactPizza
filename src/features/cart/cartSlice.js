import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  //   cart: {
  //     pizzaId: 12,
  //     name: "mediteranian",
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      //   state.cart.push(action.payload);
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },

    increaseItemQuantity(state, action) {
      const item = state.cart.find((e) => e.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((e) => e.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.price;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
export const getTotalQuantity = (e) =>
  e.cart.cart.reduce((acc, cur) => acc + cur.quantity, 0);
export const getTotalPrice = (e) =>
  e.cart.cart.reduce((acc, cur) => acc + cur.totalPrice, 0);
export const getCart = (e) => e.cart.cart;
export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
