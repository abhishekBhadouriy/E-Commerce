


import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "../../store/productDetailSlice"
import { addItemToCart } from "../../store/cartSlice";
import { Navbar } from "../../components";
import './styles.css';
const ProductDetails = () => {
    
    const addToCartHandler = () => {
        dispatch(addItemToCart(product));
      };
  const { id } = useParams();
  const dispatch = useDispatch();

  // Accessing the product details and status from the Redux store
  const { product, status } = useSelector((state) => state.productDetails );

  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetails(id));
    }
  }, [id, dispatch]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error loading product details.</p>;
  }

  return product ? (
    <div>
        <Navbar />
      <h2>{product.title}</h2>
      <img className="image-detail" src={product.image} alt={product.title} />
      <p className="descri">{product.description}</p>
      <p className="price">Price: ${product.price}</p>
      <button className="addToCart" onClick={addToCartHandler}>Add to Cart</button>
    </div>
  ) : (
    <p>No product found</p>
  );
};

export { ProductDetails };



  