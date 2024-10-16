import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';
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
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    console.log("user data in controller ------------> ", req.body);
    const { email, password } = req.body;

    const result = await UserService.findUserByEmail(email, password);

    if (result.error) {
      const status = result.error === 'User not found'
        ? HttpStatus.NOT_FOUND
        : HttpStatus.UNAUTHORIZED;

      return res.status(status).json({
        code: status,
        message: result.error
      });
    }

    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      message: result.message,
      user: result.user 
    });
  } catch (error) {
    next(error); 
  }
};