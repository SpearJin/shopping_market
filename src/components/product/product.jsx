import React from 'react';
import { StyledProduct } from './product.styled';
import addComma from '../../unit/addComma.js';

const Product = ({ productInfo, onDecreament, onIncreament }) => {
  const { name, price, count } = productInfo;

  return (
    <StyledProduct>
      <span className='name'>{name}</span>
      <div className='btn_container'>
        <button className='btn minus' onClick={() => onDecreament(productInfo)}>
          <i className='fas fa-minus'></i>
        </button>
        <span className='count'>{count}</span>
        <button className='btn plus' onClick={() => onIncreament(productInfo)}>
          <i className='fas fa-plus'></i>
        </button>
      </div>
      <span className='price'>{addComma(price * count)}원</span>
    </StyledProduct>
  );
};

export default Product;
