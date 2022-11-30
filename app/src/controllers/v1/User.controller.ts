import express, { Request, Response } from "express";
import { createUser, getAllUsers } from "../../services/User.service";

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

export default userRouter;
