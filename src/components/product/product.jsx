import React from 'react';

const Product = ({ productInfo, onDecreament, onIncreament }) => {
  const { name, price, count } = productInfo;

  return (
    <li>
      <span>{name}</span>
      <button className='minus' onClick={() => onDecreament(productInfo)}>
        <i className='fas fa-minus'></i>
      </button>
      <span>{count}</span>
      <button className='plus' onClick={() => onIncreament(productInfo)}>
        <i className='fas fa-plus'></i>
      </button>
      <span>{price}원</span>
    </li>
  );
};

export default Product;
