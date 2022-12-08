import { User as userInterface } from "../../../models/user/interfaces/User.interface";
import { User as userModel } from "../../../models/user/model/User.model";
import { UpdateParams } from "../interfaces/Update.interface";

export const createUser = async (user: userInterface) => {
  try {
    const newUser = await userModel.create(user);
    return newUser;
  } catch (error) {
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    const allUsers = await userModel.findAll({where: {is_deleted: false}});
    return allUsers;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id: string) => {
  try {
    const user = await userModel.findOne({ where: { id, is_deleted: false } });
    if (user) {
      user.update({ is_deleted: true });
      return user;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id: string, updateInfo: UpdateParams) => {
  try {
    const user = await userModel.findOne({where: {id}});
    if(user){
      user.update(updateInfo);
      return user;
    } else {
      return null
    }
  } catch (error) {
    throw error;
  }
}
