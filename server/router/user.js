const express = require('express');
const router = express.Router();
const UserModel = require('../models/user');

// 회원가입 정보 보기
router.get('/', async (req, res) => {
  const users = await UserModel.find({}).exec();
  res.send(users);
});

// 회원가입
router.post('/signup', async (req, res) => {
  const { userId, userName, userPassword, userGender } = req.body;
  await UserModel.create({
    userId,
    userName,
    userPassword,
    userGender,
  });
  res.send('회원가입 성공!!');
});

// 로그인
router.post('/login', async (req, res) => {
  try {
    const { userId, userPassword } = req.body;
    const userInfo = await UserModel.findOne({ userId, userPassword });
    if (userInfo) {
      res.send(userInfo);
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
