import express from "express";
import { idMiddleware } from "../middlewares/idMiddleware.js";
import { idTaskMiddleware } from "../middlewares/idTaskMiddleware.js";
import { tokenMiddleware } from "../middlewares/tokenMiddleware.js";
import { decodedEmailSamePersonEmailMiddleware } from "../middlewares/decodedEmailSamePersonEmailMiddleware.js";
import { taskPersonMiddleware } from "../middlewares/taskPersonMiddleware.js";
import { updatedCompletedPersonTaskController } from "../controllers/updatedCompletedPersonTaskController.js";

export const updatedCompletedPersonTask = express.Router();

updatedCompletedPersonTask.put(
  "/:id/:idTask",
  idMiddleware,
  idTaskMiddleware,
  tokenMiddleware,
  decodedEmailSamePersonEmailMiddleware,
  taskPersonMiddleware,
  updatedCompletedPersonTaskController
);
