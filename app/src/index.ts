import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send("Hola mundo");
})

app.get('/user', (req: Request, res: Response) => {
    res.send("Usuarios");
})

const port = process.env.PORT;
const host = process.env.HOST;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://${host}:${port}`);
});