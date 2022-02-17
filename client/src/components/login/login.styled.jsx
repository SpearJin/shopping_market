import styled from 'styled-components';

export const StyledLogin = styled.div`
  display: ${({ isDisplayNone }) => (isDisplayNone ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);

  > .login_container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 85%;
    height: 85%;
    border-radius: 6px;
    background-color: white;
    transform: translate(-50%, -50%);

    > .detail_cancle {
      position: absolute;
      top: 0;
      right: 0;
      margin: 0;
      border-radius: 6px;
      cursor: pointer;
    }

    > .login {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      color: black;
      > .login_inputs {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0.5em;
        > input {
          width: 12em;
          height: 2em;
          margin: 0.5em 0;
          padding: 0 0.2em;
          font-size: 1rem;
          outline: none;
        }
      }
    }

    > .signup {
      display: flex;
      flex-direction: column;
      color: black;
      > .signup_inputs {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0.5em;
        > input {
          width: 12em;
          height: 2em;
          margin: 0.5em 0;
          padding: 0 0.2em;
          font-size: 1rem;
          outline: none;
        }
      }
      > .sigup_gender {
        font-size: 1rem;
        margin-bottom: 1em;
      }
    }
    .login_btn {
      width: 5em;
      height: 3.5em;
      background-color: green;
      color: white;
      border: transparent;
    }
  }
`;
