import { User as userInterface } from "../models/user/interfaces/User.interface";
import { User as userModel} from "../models/user/model/User.model";

export const createUser = async(user: userInterface) => {
  try {
    const newUser = await userModel.create(user);
    return newUser;
  } catch (error) {
    throw error;
  }
};

export const getAllUsers = async() => {
  try {
    const allUsers = await userModel.findAll();
    return allUsers;
  } catch (error) {
    throw error;
  }
}
