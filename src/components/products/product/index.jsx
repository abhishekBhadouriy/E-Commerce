import React from 'react';
import { useDispatch } from 'react-redux';
// import { addItemToCart } from '../../../store/cartSlice';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

const viewProductDetail = () => {
    navigate(`/product/${product.id}`);
  };


  return (
    <div className="product" onClick={viewProductDetail}>
     <img  className={"image"}src={product.image}  />
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default Product;
