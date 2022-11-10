import User, { findAll } from "../models/user/model/User"

export const getAllUsers = () => {
    const users = findAll();
    return users;
}