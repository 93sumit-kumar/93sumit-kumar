const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
   name: {
      type: String,
      required: [true, 'Name required!'],
      trim: true,
      minLength: [3, 'Name too short!'],
      maxLength: [15, 'Name too long!']
   },
   email: {
      type: String,
      required: [true, 'Email required!'],
      lowercase: [true, 'Email only lowercase!']
   },
   password: {
      type: String,
      required: [true, 'Password required!'],
      minlength: [4, 'Password too short!']
   },
   mobile: {
      type: Number,
      required: true,
      min: [10, 'Mobile no too short!'],
      max: [13, 'Mobile no not more then 13 digits']
   },
   address: {
      type: String
   }
});

module.exports = mongoose.model('userData', userSchema);
