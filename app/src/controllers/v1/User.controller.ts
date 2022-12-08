import express, { Request, Response } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
} from "../../services/user/services/User.service";

const userRouter = express.Router();

userRouter.get("/", async (req: Request, res: Response) => {
  try {
    const allUsers = await getAllUsers();
    return res.status(200).json({ message: "OK", data: allUsers });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Ups! Something went wrong :(", error });
  }
});

userRouter.post("/", async (req: Request, res: Response) => {
  const { first_name, last_name, email } = req.body;
  try {
    const newUser = await createUser({ first_name, last_name, email });
    return res.status(201).send({
      message: "The user was created successfully!",
      data: newUser,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Ups! Something went wrong :(", error });
  }
});

userRouter.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedUser = await deleteUser(id);
    if (deletedUser) {
      console.log(`The user with id: ${id} was deleted!`);
      return res.status(200).json({
        message: "The user was deleted successfully",
        data: deletedUser,
      });
    } else {
      return res.status(404).json({ message: "User not found!" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Ups! Something went wrong :(", error });
  }
});

userRouter.patch("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { first_name, last_name, email } = req.body;
  try {
    const updatedUser = await updateUser(id, { first_name, last_name, email });
    return res.status(200).json({
      message: "The user was updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Ups! Something went wrong :(", error });
  }
});

export default userRouter;
