import React from 'react';
import addComma from '../../unit/addComma';
import { StyledProductInfo } from './productInfo.styled';

const ProductInfo = ({ product, onClick }) => {
  const { name, productImg, price } = product;

  return (
    <StyledProductInfo onClick={onClick}>
      <img src={productImg} alt='phone' />
      <div className='product_description'>
        <span className='name'>{name}</span>
        <span className='price'>{addComma(price)}원</span>
      </div>
    </StyledProductInfo>
  );
};

export default ProductInfo;
