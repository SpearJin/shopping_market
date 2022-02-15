const { Schema, model } = require('mongoose');

const CommentSchema = new Schema({
  productId: {
    type: String,
  },
  comment: {
    type: String,
  },
});

module.exports = model('comment', CommentSchema);
