import React, { useEffect, useRef, useState } from 'react';
import addComma from '../../unit/addComma';
import Product from '../product/product';
import { StyledCart } from './cart.styled';

const Cart = (props) => {
  const [productInfo, setProductInfo] = useState([
    { id: '1', name: '책상', price: 150000, count: 0 },
    { id: '2', name: '노트북', price: 2000000, count: 0 },
    { id: '3', name: '침대', price: 300000, count: 0 },
  ]);

  const onIncreament = (product) => {
    const products = productInfo.map((item) => {
      if (product.id === item.id) {
        item.count = item.count >= 9 ? 9 : item.count + 1;
      }
      return item;
    });
    setProductInfo(products);
  };

  const onDecreament = (product) => {
    const products = productInfo.map((item) => {
      if (product.id === item.id) {
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
          <Product key={item.id} productInfo={item} onDecreament={onDecreament} onIncreament={onIncreament} />
        ))}
        <span className='totalPrice'>총 가격: {addComma(getTotalPrice())} 원</span>
      </StyledCart>
    </>
  );
};

export default Cart;
