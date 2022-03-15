import axios from 'axios';
import React, { useState } from 'react';
import { StyledProductAdd } from './productAdd.styled';

const ProductAdd = ({ addProduct, setAddProduct, fetchData }) => {
  const [name, setName] = useState();
  const [img, setImg] = useState();
  const [detail, setDetail] = useState();
  const [price, setPrice] = useState();

  let isDisplayNone = addProduct;

  const onClickCreate = async () => {
    await axios.post('http://localhost:3000/product', {
      title: name,
      imgLink: img,
      detail,
      price,
    });
    fetchData();
    setAddProduct(true);
  };

  return (
    <StyledProductAdd isDisplayNone={isDisplayNone}>
      <div className='productAdd_container'>
        <button className='detail_cancle' onClick={() => setAddProduct(true)}>
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
          <button className='btn' onClick={() => setAddProduct(true)}>
            취소
          </button>
        </div>
      </div>
    </StyledProductAdd>
  );
};

export default ProductAdd;
