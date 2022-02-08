import React from 'react';
import { StyledNavbar } from './navbar.styled';

const Navbar = ({ setPage }) => (
  <StyledNavbar>
    <button onClick={() => setPage('list')}>상품</button>
    <button onClick={() => setPage('cart')}>장바구니</button>
  </StyledNavbar>
);

export default Navbar;
