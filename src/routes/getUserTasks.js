import express from "express";
import { tokenMiddleware } from "../middlewares/tokenMiddleware.js";
import { idMiddleware } from "../middlewares/idMiddleware.js";
import { decodedEmailSamePersonEmailMiddleware } from "../middlewares/decodedEmailSamePersonEmailMiddleware.js";
import { getUserTasksController } from "../controllers/getUserTasksController.js";

export const getUserTasks = express.Router();

getUserTasks.get("/", idMiddleware);

getUserTasks.get(
  "/:id",
  idMiddleware,
  tokenMiddleware,
  decodedEmailSamePersonEmailMiddleware,
  getUserTasksController
);
