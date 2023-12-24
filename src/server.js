import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import { login } from "./routes/login.js";
import { signUp } from "./routes/signUp.js";
import { home } from "./routes/home.js";
import { getUser } from "./routes/getUser.js";
import { getUserTasks } from "./routes/getUserTasks.js";
import { Database } from "./database/index.js";
import { updatedCompletedPersonTask } from "./routes/updatedCompletedPersonTask.js";

dotenv.config();

export const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS, HEAD"
  );
  res.header(
    "Access-Control-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use("/", login);
app.use("/home", home);
app.use("/signUp", signUp);
app.use("/getUser", getUser);
app.use("/getUserTasks", getUserTasks);
app.use("/updatedCompletedPersonTask", updatedCompletedPersonTask);

app.use((req, res, next) => {
  const erro = new Error("Route not Found.");
  erro.status = 404;

  next(erro);
});

app.use((error, req, res) => {
  res.status(error.status || 500);

  return res.json({ message: "server" + error.message });
});

app.listen(port, () => {
  Database();
  console.log(`Conectado na porta ${port}`);
});
