import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  fetchProducts } from '../../../store/productsSlice';
import Product from '../product';

import { fetchCategories } from '../../../store/categoriesSlice';

const ProductsList = () => {
  const[selectedCategory,setSelectedCategory]=useState("All");
  const[sortOrder,setSortOrder]=useState("asc")
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
const categories   = useSelector((state) => state.categories.categories);


  useEffect(() => {
    dispatch(fetchProducts({ selectedCategory ,sortOrder})); 
   
  }, [selectedCategory,sortOrder]);
  
  useEffect(()=>{
    dispatch( fetchCategories());

  },[])

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div>
      
      <div style={{display:'flex'}}>
     {categories?.length>0&& <label>
          Category:
             <select onChange={(e) =>{
               setSelectedCategory(e.target.value)
             }} value={selectedCategory}>

          
            
            {
              categories.map((cateObj)=><option value={cateObj}>{cateObj}</option>)
            }
          
          </select>
        </label>}
        
        <label>
          Sort by Price:
          <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </label>
</div>
      <div className="products-list">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      
    </div>
  );
};

export default ProductsList;








