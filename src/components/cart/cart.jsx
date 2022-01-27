import React, { useState } from 'react';

const Cart = (props) => {
  const [quentity, setQuentity] = useState(0);

  const changeQuentiy = (e) => {
    const target = e.target;
    if (target.closest('.minus')) {
      const count = quentity === 0 ? 0 : quentity - 1;
      setQuentity(count);
    } else {
      const count = quentity >= 9 ? 9 : quentity + 1;
      setQuentity(count);
    }
  };

  return (
    <div>
      <span>책상</span>
      <button className='minus' onClick={changeQuentiy}>
        <i className='fas fa-minus'></i>
      </button>
      <span>{quentity}</span>
      <button className='plus' onClick={changeQuentiy}>
        <i className='fas fa-plus'></i>
      </button>
      <span>150000원</span>
    </div>
  );
};

export default Cart;
