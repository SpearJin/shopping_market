import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyledLogin } from './login.styled';

const Login = ({ isDisplay, setCurrentName, setIsDisplay, setIsLogin }) => {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userGender, setUserGender] = useState('');

  const [currentState, setCurrentState] = useState('login');
  const [error, setError] = useState(null);

  let isDisplayNone = isDisplay;

  useEffect(() => {
    setUserId('');
    setUserName('');
    setUserPassword('');
    setUserGender('');
    setError(null);
  }, [isDisplay, currentState]);

  const onClickSignUp = async () => {
    try {
      await axios.post('http://localhost:4000/user/signup', {
        userId,
        userName,
        userPassword,
        userGender,
      });
      setCurrentState('login');
    } catch (error) {
      setError(error.response.data);
    }
  };

  const onClickLogin = async () => {
    try {
      const userInfo = await axios.post('/user/login', {
        userId,
        userPassword,
      });

      if (userInfo) {
        setCurrentName(userInfo.data.userName);
        setIsDisplay(false);
        setIsLogin(true);
      }
    } catch (error) {
      setError(error.response.data);
    }
  };

  const loginPage = (
    <div className='login'>
      <h3>로그인</h3>
      <label className='login_inputs'>
        <input placeholder='아이디' onChange={(e) => setUserId(e.target.value)} />
        <input type='password' placeholder='비밀번호' onChange={(e) => setUserPassword(e.target.value)} />
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
      <div className='signup_inputs'>
        <input placeholder='아이디' onChange={(e) => setUserId(e.target.value)} />
        <input placeholder='닉네임' onChange={(e) => setUserName(e.target.value)} />
        <input placeholder='비밀번호' onChange={(e) => setUserPassword(e.target.value)} />
      </div>
      <label name='gender' className='sigup_gender' onChange={(e) => setUserGender(e.target.value)}>
        성별:
        <input type='radio' name='gender' value='남' />
        남
        <input type='radio' name='gender' value='여' />여
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
