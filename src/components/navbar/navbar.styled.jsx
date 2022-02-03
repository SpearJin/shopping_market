import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 50px;
  background-color: #333333;
  color: #fff;
  text-align: center;
  font-size: 1.2rem;
  button {
    margin: 0 0.2em;
    border-radius: 12px;
    background-color: lightgray;
    font-size: 0.8rem;
    cursor: pointer;
  }
  button:hover {
    opacity: 0.8;
  }
`;
