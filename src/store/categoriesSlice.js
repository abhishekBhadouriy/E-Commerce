import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, URL_CATEGORIES, URL_PRODUCTS } from "../constants/apiUrls";
import { Service } from "../services";

export const fetchCategories = createAsyncThunk(
  "categories",
  async () => {
    const url=`${URL_CATEGORIES}`
    const data = await Service.send({
      baseurl: BASE_URL,
      url,
      method: "GET",

    });
    //console.log("cate data: ",data);
    
    return {
      categories:["All", ...data.data],
      
    };
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    status: null, 
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload.categories;
        
        state.status = "success";
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default categoriesSlice.reducer;
