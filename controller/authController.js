const User = require('../model/userModel');
const jwt = require('jsonwebtoken');
const localStorage = require('localStorage');
const bcrypt = require('bcrypt');
// Bycrupt password

async function hashPasword(password) {
   return await bcrypt.hash(password, 10);
}

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

// signup method
exports.signup = async (req, res) => {
   try {
      console.log("Signup method")
      const {name, username,password, rePassword,mobile, address} = req.body;
      if(password !== rePassword){
         res.send("Password is not maching with Repassword!")
      }
      const hashedPassword = await hashPasword(password);
      const user = new User({
         name,
         username,
         password,
         mobile,
         address
      })
      await user.save()
   } catch (error) {
      console.log("Err! ", error)
   }
}
