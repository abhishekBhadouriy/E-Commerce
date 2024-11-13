import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productsReducer from './productsSlice';
import productDetailReducer from './productDetailSlice';
import categoriesReducer from './categoriesSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    productDetails:productDetailReducer,
    categories:categoriesReducer,
  },
});

export default store;
