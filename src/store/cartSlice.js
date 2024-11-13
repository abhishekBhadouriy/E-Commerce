import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

      state.totalQuantity++;
      state.totalPrice += newItem.price;
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
    
      if (existingItem) {
        // Subtract total price of the item with all quantities
        state.totalPrice -= existingItem.price * existingItem.quantity;
        
        // Remove the item entirely
        state.items = state.items.filter((item) => item.id !== id);
        state.totalQuantity -= existingItem.quantity; // Adjust the total quantity
      }
    },
    
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
