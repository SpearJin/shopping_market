import styled from 'styled-components';

export const StyledProductInfo = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  padding: 1em;
  & > img {
    width: 200px;
    height: 200px;
  }
  & > .product_description {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 3em;
    font-size: 1.2rem;
    & > .name {
      margin: 1em;
      font-size: 1.4rem;
    }
  }
`;
