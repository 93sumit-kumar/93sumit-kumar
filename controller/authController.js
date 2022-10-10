const User = require('../../../iaura-assignment/src/models/userModels');

// Login method
exports.login = async (req, res) => {
   try {
      console.log('Login ', req.body);
      const { username, passwrod } = req.body;
      const user = await User.findOne({ username });
      console.log('User', user);
      res.send('Hello user', username);
   } catch (error) {
      console.log('Err! ', error);
   }
};
