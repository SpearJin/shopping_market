import React from 'react';
import { StyledProductDetail } from './productDetail.styled';

const ProductDetail = ({ detailProduct, setDetailProduct }) => {
  const isDisplayNone = detailProduct === null;
  return (
    <StyledProductDetail isDisplayNone={isDisplayNone}>
      {JSON.stringify(detailProduct)}
      <button onClick={() => setDetailProduct(null)}>X</button>
    </StyledProductDetail>
  );
};

export default ProductDetail;
