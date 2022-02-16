import styled from 'styled-components';

export const StyledComment = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.2em 0.5em;
  list-style: none;

  > .update_input {
    flex: 1;
    margin-right: 0.4em;
    border: 1px solid lightgray;
    border-radius: 8px;
  }

  .btn {
    margin-right: 0.2em;
  }
`;
