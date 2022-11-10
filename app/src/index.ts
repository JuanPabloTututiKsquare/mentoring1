import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import userRouter from "./controllers/v1/User";

dotenv.config();

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hola mundo");
});

app.use("/user", userRouter);

const port = process.env.PORT;
const host = process.env.HOST;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://${host}:${port}`);
});
