import styled from 'styled-components';

export const StyledProductDetail = styled.div`
  display: ${({ isDisplayNone }) => (isDisplayNone ? 'none' : 'block')};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const StyledDetailInfo = styled.div`
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
    cursor: pointer;
  }
  > img {
    width: 300px;
    height: 300px;
  }
  > .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    height: 50%;
    > span {
      display: block;
      font-size: 1.5rem;
    }
    > .name {
      font-size: 2.5rem;
    }
  }
  > .detail_btns {
    display: flex;
    justify-content: space-around;
    > .btn {
      width: 70px;
      height: 50px;
      margin: 0 5px;
      border-radius: 12px;
      border: transparent;
      background-color: goldenrod;
      color: #fff;
      cursor: pointer;
    }
    > .btn:hover {
      opacity: 0.8;
    }
  }
`;
