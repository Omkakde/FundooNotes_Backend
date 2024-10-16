
import { required } from '@hapi/joi';
import { Schema, model } from 'mongoose';


const userSchema = new Schema(
  {
    First_Name: {
      type: String,
      required:true
    },
    Last_Name: {
      type: String,
      required:true
    },
    Email: {
      type: String,
      required:true
  
    },
    Password: {
      type: String,
      required:true
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
