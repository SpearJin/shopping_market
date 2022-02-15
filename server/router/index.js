const express = require('express');
const router = express.Router();

const ProductRouter = require('./prodcut');
const CommentRouter = require('./comment');

router.use('/product', ProductRouter);
router.use('/comment', CommentRouter);

module.exports = router;
