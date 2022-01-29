import styled from 'styled-components';

export const StyledProductInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 3em 0;
  & > img {
    width: 250px;
    height: 250px;
  }
  & > .product_description {
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
  }
`;
