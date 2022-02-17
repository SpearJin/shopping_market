import React, { useState } from 'react';
import Login from '../login/login';
import { StyledNavbar } from './navbar.styled';

const Navbar = ({ setPage, isLogin, setIsLogin }) => {
  const [user, setUser] = useState([]);
  const [currentName, setCurrentName] = useState('');
  const [isDisplay, setIsDisplay] = useState(false);

  const loginPage = (
    <>
      <button onClick={() => setIsDisplay(true)}>로그인</button>
    </>
  );

  const loginOutPage = (
    <>
      <span className='login_name'>{currentName}님 환영합니다</span>
      <button onClick={() => setIsLogin(false)}>로그아웃</button>
    </>
  );

  let renderLogin = isLogin ? loginOutPage : loginPage;

  return (
    <StyledNavbar isLogin={isLogin}>
      {isLogin && (
        <div className='cart_btn'>
          <button onClick={() => setPage('list')}>상품</button>
          <button onClick={() => setPage('cart')}>장바구니</button>
        </div>
      )}
      <div className='login_btn'>
        {renderLogin}
        <Login
          isLogin={isLogin}
          isDisplay={isDisplay}
          setIsDisplay={setIsDisplay}
          user={user}
          setUser={setUser}
          setIsLogin={setIsLogin}
          setCurrentName={setCurrentName}
        />
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
