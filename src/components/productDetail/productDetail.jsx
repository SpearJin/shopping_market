import React from 'react';
import addComma from '../../unit/addComma';
import { StyledDetailInfo, StyledProductDetail } from './productDetail.styled';

const ProductDetail = ({ detailProduct, setDetailProduct }) => {
  const { name, productImg, detail, price } = detailProduct;
  const isDisplayNone = detailProduct === null;

  const test = () => {
    console.log('ss');
  };
  return (
    <StyledProductDetail isDisplayNone={isDisplayNone}>
      <StyledDetailInfo onBlur={test}>
        <button onClick={() => setDetailProduct(null)}>X</button>
        <img src={productImg} alt='img' />
        <div className='info'>
          <span className='name'>{name}</span>
          <span className='detail'>{detail}</span>
          <span className='price'>{addComma(price)}원</span>
        </div>
      </StyledDetailInfo>
    </StyledProductDetail>
  );
};

export default ProductDetail;
