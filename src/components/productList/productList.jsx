import React, { useState } from 'react';
import { productData } from '../../data/productData.js';
import ProductDetail from '../productDetail/productDetail.jsx';
import ProductInfo from '../productInfo/productInfo';
import { StyledProductList } from './productList.styled.jsx';

const ProductList = (props) => {
  const [productList, setProductList] = useState(productData);
  const [detailProduct, setDetailProduct] = useState(null);

  const onClickDelete = (product) => {
    const products = productData.filter((item) => item._id !== product._id);
    setDetailProduct(null);
    setProductList(products);
  };

  return (
    <StyledProductList>
      {productList.map((product) => (
        <ProductInfo key={product._id} product={product} onClick={() => setDetailProduct(product)} />
      ))}
      {detailProduct && (
        <ProductDetail
          detailProduct={detailProduct}
          setDetailProduct={setDetailProduct}
          onClickDelete={onClickDelete}
        />
      )}
    </StyledProductList>
  );
};

export default ProductList;
