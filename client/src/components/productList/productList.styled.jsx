import styled from 'styled-components';

export const StyledProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  > button {
    position: absolute;
    bottom: 5%;
    right: 5%;
    width: 50px;
    height: 20px;
    margin: 0 5px;
    border-radius: 12px;
    border: transparent;
    background-color: goldenrod;
    color: #fff;
    font-size: 0.6rem;
    cursor: pointer;
  }
  > button:hover {
    opacity: 0.8;
  }
  detailProduct && button {
    pointer-events: none;
  }
`;
