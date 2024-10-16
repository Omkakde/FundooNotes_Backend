import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';
import { findUserByEmail } from './../services/user.service';
// fetching, creating, updating, or deleting users
//The route file connects the routes to the corresponding controller methods.


export const registerUser = async (req, res, next) => {
  try {
    console.log("user data in controller ------------>  ",req.body);
    const data = await UserService.newUser(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User created successfully'
    });
  } catch (error) {
    console.log("error in create user");
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { Email, Password } = req.body;
    if (!Email || !Password) return res.status(400).json({ message: 'Email and password are required' });

    const result = await UserService.getUser(Email, Password);
    if (result.error) return res.status(401).json({ message: result.error });

    res.status(200).json({ data: result.user, message: 'Login successful' });
  } catch (error) {
    next(error);
  }
};
