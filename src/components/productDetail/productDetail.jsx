import React from 'react';
import addComma from '../../unit/addComma';
import { StyledDetailInfo, StyledProductDetail } from './productDetail.styled';

const ProductDetail = ({ detailProduct, setDetailProduct, onClickDelete }) => {
  const { name, productImg, detail, price } = detailProduct;
  const isDisplayNone = detailProduct === null;

  return (
    <StyledProductDetail isDisplayNone={isDisplayNone}>
      <StyledDetailInfo>
        <button className='detail_cancle' onClick={() => setDetailProduct(null)}>
          X
        </button>
        <img src={productImg} alt='img' />
        <div className='info'>
          <span className='name'>{name}</span>
          <span className='detail'>{detail}</span>
          <span className='price'>{addComma(price)}원</span>
        </div>
        <div className='detail_btns'>
          <button className='btn'>수정</button>
          <button className='btn' onClick={() => onClickDelete(detailProduct)}>
            삭제
          </button>
        </div>
      </StyledDetailInfo>
    </StyledProductDetail>
  );
};

export default ProductDetail;
