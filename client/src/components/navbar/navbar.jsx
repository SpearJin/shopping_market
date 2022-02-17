import React, { useState } from 'react';
import Login from '../login/login';
import { StyledNavbar } from './navbar.styled';

const Navbar = ({ setPage, isLogin }) => {
  const [isDisplay, setIsDisplay] = useState(false);

  const onClickHanlder = () => {};

  return (
    <StyledNavbar>
      <div className='cart_btn'>
        <button onClick={() => setPage('list')}>상품</button>
        <button onClick={() => setPage('cart')}>장바구니</button>
      </div>
      <div className='login_btn'>
        <button onClick={() => setIsDisplay(true)}>로그인</button>
        <Login isLogin={isLogin} isDisplay={isDisplay} setIsDisplay={setIsDisplay} />
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
