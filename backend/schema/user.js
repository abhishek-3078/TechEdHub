const mongoose = require('mongoose');
const {Schema} = mongoose;
const userSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  fieldOfInterest:{
    type:[String]
  }
}, {
  timestamps: true // Enable timestamps
});

const User = mongoose.model('Users', userSchema);

module.exports = User;
