import React, { useState } from 'react';
import axios from 'axios';
import addComma from '../../unit/addComma';
import { StyledDetailInfo, StyledProductDetail } from './productDetail.styled';
import ProductComment from '../productComment/productComment';

const ProductDetail = ({ detailProduct, setDetailProduct, fetchData }) => {
  const [currentState, setCurrentState] = useState(null);
  const [name, setName] = useState(detailProduct.title);
  const [img, setImg] = useState(detailProduct.imgLink);
  const [detail, setDetail] = useState(detailProduct.detail);
  const [price, setPrice] = useState(detailProduct.price);

  const isDisplayNone = detailProduct === null;

  // 상품 수정
  const onClickUpdate = async () => {
    await axios.put(`/product/${detailProduct._id}`, {
      title: name,
      imgLink: img,
      detail,
      price,
    });
    fetchData();
    setDetailProduct(null);
  };

  // 상품 삭제
  const onClickDelete = async () => {
    await axios.delete(`/product/${detailProduct._id}`);
    fetchData();
    setDetailProduct(null);
  };

  const defaultState = (
    <>
      <button className='detail_cancle' onClick={() => setDetailProduct(null)}>
        X
      </button>
      <img src={img} alt='img' />
      <div className='info'>
        <span className='name'>{name}</span>
        <span className='detail'>{detail}</span>
        <span className='price'>{addComma(price)}원</span>
      </div>
      <div className='detail_btns'>
        <button className='btn' onClick={() => setCurrentState('update')}>
          수정
        </button>
        <button className='btn' onClick={() => onClickDelete(detailProduct)}>
          삭제
        </button>
      </div>
    </>
  );

  const updateState = (
    <>
      <button className='detail_cancle' onClick={() => setDetailProduct(null)}>
        X
      </button>
      <img src={img} alt='img' />
      <div className='info update'>
        <input type='text' placeholder={name} onChange={(e) => setName(e.target.value)} />
        <input type='text' placeholder={detail} onChange={(e) => setDetail(e.target.value)} />
        <input type='text' placeholder={addComma(price)} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div className='detail_btns'>
        <button className='btn' onClick={onClickUpdate}>
          완료
        </button>
        <button className='btn' onClick={() => setCurrentState(null)}>
          취소
        </button>
      </div>
    </>
  );

  const renderState = currentState === 'update' ? updateState : defaultState;

  return (
    <StyledProductDetail isDisplayNone={isDisplayNone}>
      <StyledDetailInfo>
        {renderState}
        <ProductComment productId={detailProduct._id} />
      </StyledDetailInfo>
    </StyledProductDetail>
  );
};

export default ProductDetail;
