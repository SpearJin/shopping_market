const express = require('express');
const router = express.Router();
const argon2 = require('argon2');
const UserModel = require('../models/user');

// 회원가입 정보 보기
router.get('/', async (req, res) => {
  const users = await UserModel.find({}).exec();
  res.send(users);
});

// 회원가입
router.post('/signup', async (req, res) => {
  const { userId, userName, userPassword, userGender } = req.body;
  if (!userId) {
    res.status(403).send('아이디를 입력하세요');
    return;
  }

  if (!userName) {
    res.status(403).send('닉네임을 입력하세요');
    return;
  }

  if (!userPassword) {
    res.status(403).send('패스워드를 입력하세요');
    return;
  }

  if (!userGender) {
    res.status(403).send('성별을 선택하세요');
    return;
  }

  const hash = await argon2.hash(userPassword);

  await UserModel.create({
    userId,
    userName,
    userPassword: hash,
    userGender,
  });
  res.send('회원가입 성공!!');
});

// 로그인
router.post('/login', async (req, res) => {
  const { userId, userPassword } = req.body;
  const userInfo = await UserModel.findOne({ userId }).exec();
  if (!userInfo) {
    res.status(403).send('일치는 아이디 없습니다');
    return;
  }
  const verifyPassword = await argon2.verify(userInfo?.userPassword, userPassword);
  if (verifyPassword) {
    res.send(userInfo);
  } else {
    res.status(403).send('비밀번호가 틀립니다');
    return;
  }
});

module.exports = router;
