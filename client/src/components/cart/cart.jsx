import React, { useEffect, useRef, useState } from 'react';
import addComma from '../../unit/addComma';
import Product from '../product/product';
import { productData } from '../../data/productData.js';
import { StyledCart } from './cart.styled';

const Cart = (props) => {
  const [productInfo, setProductInfo] = useState(productData);

  const onIncreament = (product) => {
    console.log(product);
    const products = productInfo.map((item) => {
      if (product._id === item._id) {
        item.count = item.count >= 9 ? 9 : item.count + 1;
      }
      return item;
    });
    setProductInfo(products);
  };

  const onDecreament = (product) => {
    const products = productInfo.map((item) => {
      if (product._id === item._id) {
        item.count = item.count <= 0 ? 0 : item.count - 1;
      }
      return item;
    });
    setProductInfo(products);
  };

  useEffect(() => {
    getTotalPrice();
  });

  const getTotalPrice = () => {
    let totalPrice = 0;
    productInfo.forEach((product) => {
      totalPrice += product.count * product.price;
    });
    return totalPrice;
  };

  return (
    <>
      <h1>장바구니</h1>
      <StyledCart>
        {productInfo.map((item) => (
          <Product key={item._id} productInfo={item} onDecreament={onDecreament} onIncreament={onIncreament} />
        ))}
        <span className='totalPrice'>총 가격: {addComma(getTotalPrice())} 원</span>
      </StyledCart>
    </>
  );
};

export default Cart;