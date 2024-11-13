import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, URL_PRODUCTS } from "../constants/apiUrls";
import { Service } from "../services";

export const fetchProductDetails = createAsyncThunk(
  "productDetails/fetchProduct",
  async (id) => {
    const url = `${URL_PRODUCTS}/${id}`;
    console.log("url:  ",url);
    
    const data = await Service.send({
      baseurl: BASE_URL,
      url,
      method: "GET",
    });
console.log("data: ",data);

    return {
      product: data.data,  // Assuming the response contains the product details.
    };
  }
);

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {
    product: null,
    status: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.product = action.payload.product;
        state.status = "success";
      })
      .addCase(fetchProductDetails.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default productDetailsSlice.reducer;
