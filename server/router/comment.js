const express = require('express');
const router = express.Router();
const CommentModel = require('../models/comment');

// 댓글 불러오기
router.get('/:productId', async (req, res) => {
  const id = req.params.productId;
  const comments = await CommentModel.findOne({ productId: id }).exec();
  res.send(comments);
});

// 댓글 생성
router.post('/:productId', async (req, res) => {
  const id = req.params.productId;
  const { comment } = req.body;
  const commentModel = await CommentModel.findOne({ productId: id }).exec();

  if (commentModel === null) {
    await CommentModel.create({
      productId: id,
      comment: [comment],
    });
    res.send('create comment');
  } else {
    await CommentModel.updateOne({ productId: id }, { comment: [...commentModel.comment, comment] });
    res.send('add comment');
  }
});

// 댓글 수정
router.put('/:productId', async (req, res) => {
  const id = req.params.productId;
  const { comment, index } = req.body;
  const commentModel = await CommentModel.findOne({ productId: id }).exec();

  commentModel.comment[index] = comment;
  await CommentModel.updateOne({ productId: id }, { comment: [...commentModel.comment] });
  res.send('update comment');
});

// 댓글 삭제
router.delete('/:id/:index', async (req, res) => {
  const { id, index } = req.params;
  const commentModel = await CommentModel.findOne({ productId: id }).exec();

  commentModel.comment.splice(index, 1);
  await CommentModel.updateOne({ productId: id }, { comment: [...commentModel.comment] });
  res.send('delete comment');
});

module.exports = router;
