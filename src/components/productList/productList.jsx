import React, { useState } from 'react';
import { productData } from '../../data/productData.js';
import ProductDetail from '../productDetail/productDetail.jsx';
import ProductInfo from '../productInfo/productInfo';
import { StyledProductList } from './productList.styled.jsx';

const ProductList = (props) => {
  const [detailProduct, setDetailProduct] = useState('dsds');

  return (
    <StyledProductList>
      {productData.map((product) => (
        <ProductInfo key={product._id} product={product} />
      ))}
      <ProductDetail detailProduct={detailProduct} setDetailProduct={setDetailProduct} />
    </StyledProductList>
  );
};

export default ProductList;
