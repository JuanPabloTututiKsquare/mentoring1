import express, { Request, Response } from "express";
import { getAllUsers } from "../../services/UserService";

const userRouter = express.Router();

userRouter.get("/", (req: Request, res: Response) => {
    const users = getAllUsers();
    if(users.length > 0){
        return res.status(200).json(users);
    }
});

export default userRouter;
