const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to a User schema (if applicable)
      required: true
    },
    username: {
      type: String,
      required: true
    }
  },
  post:{
    type:String
  },
  upvotes: {
    type: Number,
    default: 0
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

const Reply = mongoose.model('Reply', replySchema);

module.exports = Reply;
