import React, { useState } from 'react';
import addComma from '../../unit/addComma';
import { StyledDetailInfo, StyledProductDetail } from './productDetail.styled';

const ProductDetail = ({ detailProduct, setDetailProduct, productList, setProductList }) => {
  const [currentState, setCurrentState] = useState(null);
  const [name, setName] = useState(detailProduct.name);
  const [img, setImg] = useState(detailProduct.productImg);
  const [detail, setDetail] = useState(detailProduct.detail);
  const [price, setPrice] = useState(detailProduct.price);

  const isDisplayNone = detailProduct === null;

  const onClickCreate = () => {
    const products = [
      ...productList,
      {
        _id: Date.now(),
        productImg: img,
        name,
        detail,
        price,
        count: 0,
      },
    ];
    setProductList(products);
    setDetailProduct(null);
  };

  // 상품 수정
  const onClickUpdate = () => {
    const products = productList.map((item) => {
      if (detailProduct._id === item._id) {
        return {
          ...item,
          name,
          detail,
          price,
        };
      }
      return item;
    });
    setProductList(products);
    setCurrentState(null);
  };

  // 상품 삭제
  const onClickDelete = () => {
    const products = productList.filter((item) => item._id !== detailProduct._id);
    setDetailProduct(null);
    setProductList(products);
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
        <button className='btn' onClick={() => setCurrentState('create')}>
          추가
        </button>
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

  const createState = (
    <>
      <button className='detail_cancle' onClick={() => setDetailProduct(null)}>
        X
      </button>
      <div className='info update'>
        <input type='text' placeholder='이미지 주소' onChange={(e) => setImg(e.target.value)} />
        <input type='text' placeholder='상품명' onChange={(e) => setName(e.target.value)} />
        <input type='text' placeholder='상품정보' onChange={(e) => setDetail(e.target.value)} />
        <input type='text' placeholder='가격' onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div className='detail_btns'>
        <button className='btn' onClick={onClickCreate}>
          완료
        </button>
        <button className='btn' onClick={() => setCurrentState(null)}>
          취소
        </button>
      </div>
    </>
  );

  const renderState = currentState === 'update' ? updateState : currentState === 'create' ? createState : defaultState;

  return (
    <StyledProductDetail isDisplayNone={isDisplayNone}>
      <StyledDetailInfo>{renderState}</StyledDetailInfo>
    </StyledProductDetail>
  );
};

export default ProductDetail;
