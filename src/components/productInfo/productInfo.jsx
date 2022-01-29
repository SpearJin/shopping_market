import React from 'react';
import img1 from '../../images/img1.jpeg';
import { StyledProductInfo } from './product.styled';

const ProductInfo = (props) => (
  <StyledProductInfo>
    <img src={img1} alt='phone' />
    <div className='product_description'>
      <span>휴대폰</span>
      <span>990000원</span>
    </div>
  </StyledProductInfo>
);

export default ProductInfo;
