import styled from 'styled-components';

export const StyledProductDetail = styled.div`
  display: ${({ isDisplayNone }) => (isDisplayNone ? 'none' : 'block')};
  position: fixed;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.2);
`;
