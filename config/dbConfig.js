const mongoose = require('mongoose');
// Database connection
const conn = mongoose
   .connect('mongodb://127.0.0.1:27017/library-management')
   .then(() => {
      console.log('Database connected!');
   });

module.exports = conn;
