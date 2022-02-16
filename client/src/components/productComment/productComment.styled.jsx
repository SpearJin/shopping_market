import styled from 'styled-components';

export const StyledProductComment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 5%;
  width: 50%;
  height: 22%;
  border-radius: 8px;
  background-color: beige;
  text-align: center;

  > .info_add {
    display: flex;
    position: sticky;
    top: 0;
    width: 100%;
    > .info_input {
      width: 100%;
      height: 2em;
      margin-right: 0.4em;
      padding: 0 0.5em;
      border: 1px solid lightgray;
      border-radius: 8px;
      font-size: 1rem;
      outline: none;
    }
    > .info_btn {
      width: 2.5em;
      height: 2.5em;
      padding: 0.2em;
    }
  }

  > .comment_list {
    width: 100%;
    margin-top: 1em;
    padding: 0;
    list-style: none;
    overflow-y: auto;
  }

  .btn {
    padding: 0.5em;
    border-radius: 8px;
    border: none;
    background-color: green;
    color: white;
    font-size: 0.8rem;
    cursor: pointer;
  }
  .btn:hover {
    opacity: 0.8;
  }
`;
