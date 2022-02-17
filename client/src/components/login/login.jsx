import React, { useRef, useState } from 'react';
import { StyledLogin } from './login.styled';

const Login = ({ user, setUser, isDisplay, setCurrentName, setIsDisplay, setIsLogin }) => {
  const [currentState, setCurrentState] = useState('login');

  let userId = useRef(null);
  let userName = useRef(null);
  let userPassword = useRef(null);
  let userGender = useRef(null);

  let isDisplayNone = isDisplay;

  const onClickSignUp = () => {
    const users = [
      ...user,
      {
        userId: userId.current.value,
        userName: userName.current.value,
        userPassword: userPassword.current.value,
        userGender: userPassword.current.value,
      },
    ];
    setUser(users);
    setCurrentState('login');
  };

  const onClickLogin = () => {
    user.forEach((item) => {
      if (item.userId === userId.current.value && item.userPassword === userPassword.current.value) {
        setCurrentName(item.userName);
        setIsDisplay(false);
        setIsLogin(true);
      }
    });
  };

  const loginPage = (
    <div className='login'>
      <h3>로그인</h3>
      <label className='login_inputs'>
        <input placeholder='아이디' ref={userId} />
        <input placeholder='비밀번호' ref={userPassword} />
      </label>
      <div>
        <button className='login_btn' onClick={() => setCurrentState('signup')}>
          회원가입
        </button>
        <button className='login_btn' onClick={onClickLogin}>
          로그인
        </button>
      </div>
    </div>
  );

  const signUpPage = (
    <div className='signup'>
      <h3>회원가입</h3>
      <label className='signup_inputs'>
        <input placeholder='아이디' ref={userId} />
        <input placeholder='닉네임' ref={userName} />
        <input placeholder='비밀번호' ref={userPassword} />
      </label>
      <label className='sigup_gender'>
        성별:
        <input type='radio' name='gender' value='남' ref={userGender} />
        남
        <input type='radio' name='gender' value='여' ref={userGender} />여
      </label>
      <div>
        <button className='login_btn' onClick={onClickSignUp}>
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
