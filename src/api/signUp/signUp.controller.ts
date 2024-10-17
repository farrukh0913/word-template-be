import User from './signUp.modal'
import jwt from 'jsonwebtoken';
import * as jwtTokenKey from '../../app'

export const createUser = async function (req, res) {
    const request = req.body;
    const { name, email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if(!user){
        const createdRequest = await User.create(request);
        if (createdRequest) {
          res.status(200).json({ status: "success", message: "User created successfully." });
        } else {
          res.status(400).json({ status: "Error", message: "Error in created user." });
        }
      } else {
        res.status(400).json({ status: "Error", message: "User already exists." });
      }
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err });
    }
  };

export const login = async function (req, res) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ status: 'Error', message: 'User not found.' });
      }
      if (password !== user.password) {
        return res.status(400).json({ status: 'Error', message: 'Invalid credentials.' });
      }
      const payload = {
        name: user.name,
        email: user.email,
      };
  
      const token = jwt.sign(payload, jwtTokenKey.TOKEN_KEY);
      const data = {
        name: user.name,
        token: token
      }
      return res.status(200).json({
        status: 'success',
        message: 'Login successful.',
        data,
      });
  
    } catch (err) {
      return res.status(500).json({ message: 'Server error', error: err });
    }
  };