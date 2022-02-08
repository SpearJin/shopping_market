import styled from 'styled-components';

export const StyledProductInfo = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 0.5em 3em;

  margin: 1em;
  border-radius: 12px;
  border: 1px solid lightgray;
  cursor: pointer;
  & > img {
    width: 200px;
    height: 200px;
    border-radius: 20px;
    object-fit: cover;
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
