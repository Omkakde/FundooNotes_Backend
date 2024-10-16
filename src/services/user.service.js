import User from '../models/user.model';



//create new user
export const newUser = async (userDetails) => {
  console.log("user detail in service ------>", userDetails );
  const data = await User.create(userDetails);
  console.log("after database in service ------>", userDetails );
  return data;
};


export const findUserByEmail = async (email, password) => {
  console.log("user login details in service ------>", { email, password });

  const user = await User.findOne({ email });

  if (!user) {
    console.log("User not found in service");
    return { error: 'User not found' };
  }

  if (user.password !== password) {
    console.log("Invalid password in service");
    return { error: 'Invalid password' };
  }

  console.log("User login successful in service");
  return { message: 'Successful login', user };
};