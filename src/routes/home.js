import express from "express";

import { idMiddleware } from "../middlewares/idMiddleware.js";
import { tokenMiddleware } from "../middlewares/tokenMiddleware.js";
import { decodedEmailSamePersonEmailMiddleware } from "../middlewares/decodedEmailSamePersonEmailMiddleware.js";
import { homeController } from "../controllers/homeController.js";

export const home = express.Router();

home.post(
  "/:id",
  idMiddleware,
  tokenMiddleware,
  decodedEmailSamePersonEmailMiddleware,
  homeController
);
