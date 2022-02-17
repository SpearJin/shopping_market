import React, { useState } from 'react';
import { StyledLogin } from './login.styled';

const Login = ({ isLogin, isDisplay, setIsDisplay }) => {
  const [currentState, setCurrentState] = useState('login');

  let isDisplayNone = isDisplay;

  const loginPage = (
    <div className='login'>
      <h3>로그인</h3>
      <label className='login_inputs'>
        <input placeholder='아이디' />
        <input placeholder='비밀번호' />
      </label>
      <div>
        <button className='login_btn' onClick={() => setCurrentState('signup')}>
          회원가입
        </button>
        <button className='login_btn'>로그인</button>
      </div>
    </div>
  );

  const signUpPage = (
    <div className='signup'>
      <h3>회원가입</h3>
      <label className='signup_inputs'>
        <input placeholder='아이디' />
        <input placeholder='닉네임' />
        <input placeholder='비밀번호' />
      </label>
      <label className='sigup_gender'>
        성별:
        <input type='radio' name='gender' value='남' />
        남
        <input type='radio' name='gender' value='여' />여
      </label>
      <div>
        <button className='login_btn' onClick={() => setCurrentState('login')}>
          완료
        </button>
        <button className='login_btn' onClick={() => setCurrentState('login')}>
          취소
        </button>
      </div>
    </div>
  );

  let renderPage = currentState === 'login' ? loginPage : signUpPage;

  return (
    <StyledLogin isDisplayNone={isDisplayNone}>
      <div className='login_container'>
        <button className='detail_cancle' onClick={() => setIsDisplay(false)}>
          X
        </button>
        {renderPage}
      </div>
    </StyledLogin>
  );
};

export default Login;
