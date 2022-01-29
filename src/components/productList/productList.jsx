import React from 'react';
import { productData } from '../../data/productData.js';
import ProductInfo from '../productInfo/productInfo';
import { StyledProductList } from './productList.styled.jsx';

const ProductList = (props) => {
  return (
    <StyledProductList>
      {productData.map((product) => (
        <ProductInfo product={product} />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
