import User from '../models/user.model';


export const newUser = async (userDetails) => {
  try {
    console.log("User details in service ------>", userDetails);
    const data = await User.create(userDetails);
    console.log("After inserting into database ------>", data);
    return data;
  } catch (error) {
    console.error("Error while creating user:", error);
    throw error; 
  }
};

export const getUser = async (Email, Password) => {
    const user = await User.findOne({ Email });
    if (!user) {
      return { error: "User not found" };
    }
    if (user.Password !== Password) {  
      return { error: "Password is incorrect" };
    }
    return user; 
}; 

