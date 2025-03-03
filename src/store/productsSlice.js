import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, URL_PRODUCTS } from "../constants/apiUrls";
import { Service } from "../services";

export const fetchProducts = createAsyncThunk(
  "products",
  async ({ page = 1, limit = 30 ,selectedCategory,sortOrder} = {}) => {
    const url=selectedCategory=="All"?`${URL_PRODUCTS}?sort=${sortOrder}`:`${URL_PRODUCTS}/category/${selectedCategory}?sort=${sortOrder}`
    const data = await Service.send({
      baseurl: BASE_URL,
      url,
      method: "GET",

    });
    console.log("data: ",data);
    
    return {
      products: data.data,
      
    };
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: null, 
    product: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload.products;
        state.total = action.payload.total;
        state.status = "success";
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default productsSlice.reducer;
