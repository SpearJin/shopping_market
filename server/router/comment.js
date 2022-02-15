const express = require('express');
const router = express.Router();
const CommentModel = require('../models/comment');

router.use('/', async (req, res) => {
  const comments = await CommentModel.find({}).exec();
  res.send(comments);
});

module.exports = router;
