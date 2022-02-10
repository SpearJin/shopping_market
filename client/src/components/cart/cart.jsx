import React, { useEffect, useRef, useState } from 'react';
import useApiCall from '../../hooks/useApiCall';
import addComma from '../../unit/addComma';
import Product from '../product/product';
import { StyledCart } from './cart.styled';

const Cart = () => {
  const [productInfo, setProductInfo] = useState(null);
  const [payload, loading, error] = useApiCall('http://localhost:4000/product');

  const onIncreament = (product) => {
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

  const getTotalPrice = () => {
    if (!productInfo) {
      return;
    }
    let totalPrice = 0;
    productInfo.forEach((product) => {
      totalPrice += product.count * product.price;
    });
    return totalPrice;
  };

  useEffect(() => {
    getTotalPrice();
  });

  useEffect(() => {
    setProductInfo(payload);
  }, [payload]);

  if (loading) {
    return <>로딩중...</>;
  }
  if (error) {
    return <>{error.message}</>;
  }
  if (!productInfo) {
    return <></>;
  }

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
