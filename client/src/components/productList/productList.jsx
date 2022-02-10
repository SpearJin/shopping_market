import React, { useEffect, useState } from 'react';
// import { productData } from '../../data/productData.js';
import useApiCall from '../../hooks/useApiCall.js';
import ProductDetail from '../productDetail/productDetail.jsx';
import ProductInfo from '../productInfo/productInfo';
import { StyledProductList } from './productList.styled.jsx';

const ProductList = () => {
  const [productList, setProductList] = useState(null);
  const [detailProduct, setDetailProduct] = useState(null);
  const [payload, loading, error, fetchData] = useApiCall('http://localhost:4000/product');

  useEffect(() => {
    setProductList(payload);
  }, [payload]);

  if (loading) {
    return <>로딩중...</>;
  }
  if (error) {
    return <>{error.message}</>;
  }
  if (!productList) {
    return <></>;
  }

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
          fetchData={fetchData}
        />
      )}
    </StyledProductList>
  );
};

export default ProductList;
