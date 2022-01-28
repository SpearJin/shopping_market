import styled from 'styled-components';

export const StyledProduct = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5rem;

  .name {
    margin-right: 0.4em;
    font-size: 3rem;
  }

  .btn {
    margin: 0 0.6em;
    width: 2em;
    height: 2em;
    border-radius: 12px;
    border: transparent;
    background-color: goldenrod;
    color: #fff;
    cursor: pointer;
    font-size: 1.5rem;
  }

  .btn:hover {
    opacity: 0.8;
  }

  .count {
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    border-radius: 50%;
    background-color: green;
    color: #fff;
    font-size: 1.6rem;
    text-align: center;
  }
`;
