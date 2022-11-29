import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import userRouter from "./controllers/v1/User.controller";
import { DBConnection } from "./models/Index.model";

// * Env Config
dotenv.config();
const PORT = process.env.PORT!;
const HOST = process.env.HOST!;
const DB_NAME = process.env.DB_NAME!;
const DB_USER = process.env.DB_USER!;
const DB_PASSWORD = process.env.DB_PASS!;

// * Express Instance
const app: Express = express();

// * API Routes
app.use("/user", userRouter);

try {
  const initSequelize = async() => {DBConnection({db_name: DB_NAME, db_username: DB_USER, db_password: DB_PASSWORD, db_host: HOST})};
  initSequelize()
  .then(() => {
    console.log("Connection to DB was successful!");
    app.listen(PORT, () => {
      console.log(`⚡️[server]: Server is running at https://${HOST}:${PORT}`);
    });
  })
} catch (error) {
  console.log(error);
}


