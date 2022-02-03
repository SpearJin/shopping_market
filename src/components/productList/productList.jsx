import React, { useState } from 'react';
import { productData } from '../../data/productData.js';
import ProductDetail from '../productDetail/productDetail.jsx';
import ProductInfo from '../productInfo/productInfo';
import { StyledProductList } from './productList.styled.jsx';

const ProductList = (props) => {
  const [detailProduct, setDetailProduct] = useState(null);
  return (
    <StyledProductList>
      {productData.map((product) => (
        <ProductInfo key={product._id} product={product} onClick={() => setDetailProduct(product)} />
      ))}
      {detailProduct && <ProductDetail detailProduct={detailProduct} setDetailProduct={setDetailProduct} />}
    </StyledProductList>
  );
};

export default ProductList;
