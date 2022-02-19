import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { StyledLogin } from './login.styled';

const Login = ({ isDisplay, setCurrentName, setIsDisplay, setIsLogin }) => {
  const [currentState, setCurrentState] = useState('login');
  const [error, setError] = useState(null);

  let userId = useRef(null);
  let userName = useRef(null);
  let userPassword = useRef(null);
  let userGender = useRef(null);

  let isDisplayNone = isDisplay;

  useEffect(() => {
    userId.current.value = '';
    userPassword.current.value = '';
    setError(null);
  }, [isDisplay, currentState]);

  const onClickSignUp = async () => {
    console.log(userGender.current.value);
    try {
      await axios.post('http://localhost:4000/user/signup', {
        userId: userId.current.value,
        userName: userName.current.value,
        userPassword: userPassword.current.value,
        userGender: userPassword.current.textContent,
      });
      setCurrentState('login');
    } catch (error) {
      setError(error.response.data);
    }
  };

  const onClickLogin = async () => {
    try {
      const userInfo = await axios.post('http://localhost:4000/user/login', {
        userId: userId.current.value,
        userPassword: userPassword.current.value,
      });
      console.log(userInfo);
      if (userInfo) {
        setCurrentName(userInfo.data.userName);
        setIsDisplay(false);
        setIsLogin(true);
      }
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data);
    }
  };

  const loginPage = (
    <div className='login'>
      <h3>로그인</h3>
      <label className='login_inputs'>
        <input placeholder='아이디' ref={userId} />
        <input type='password' placeholder='비밀번호' ref={userPassword} />
      </label>
      <div>
        <button className='login_btn' onClick={() => setCurrentState('signup')}>
          회원가입
        </button>
        <button className='login_btn' onClick={onClickLogin}>
          로그인
        </button>
        <p className='error'>{error ? error : ''}</p>
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
      <label name='gender' className='sigup_gender' ref={userGender}>
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
        <p className='error'>{error ? error : ''}</p>
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
