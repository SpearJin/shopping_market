import styled from 'styled-components';

export const StyledCart = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 0;
  margin: 0;
  width: 80%;
  height: 80%;
  border-radius: 12px;
  background-color: lightgray;
  box-shadow: 2px 3px 4px 3px gray;

  .totalPrice {
    width: 10em;
    font-size: 1.2rem;
    transform: translateX(100%);
  }
`;
