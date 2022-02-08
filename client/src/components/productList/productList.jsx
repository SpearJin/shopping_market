import React, { useState } from 'react';
import { productData } from '../../data/productData.js';
import ProductDetail from '../productDetail/productDetail.jsx';
import ProductInfo from '../productInfo/productInfo';
import { StyledProductList } from './productList.styled.jsx';

const ProductList = () => {
  const [productList, setProductList] = useState(productData);
  const [detailProduct, setDetailProduct] = useState(null);

  console.log(productList);
  return (
    <StyledProductList>
      {productList.map((product) => (
        <ProductInfo key={product._id} product={product} onClick={() => setDetailProduct(product)} />
      ))}
      {detailProduct && (
        <ProductDetail
          detailProduct={detailProduct}
          setDetailProduct={setDetailProduct}
          productList={productList}
          setProductList={setProductList}
        />
      )}
    </StyledProductList>
  );
};

export default ProductList;
