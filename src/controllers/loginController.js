import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { Person } from "../models/Person.js";

dotenv.config();

export const loginController = async (req, res, next) => {
  const jwToken = jwt.sign({ email: req.user.email }, process.env.JWT_KEY, {
    expiresIn: "15m",
  });

  await Person.updateOne(
    { email: req.user.email },
    { $set: { token: jwToken, last_login: new Date() } }
  );

  return res.status(200).json({ message: "Usuário autenticado com sucesso!" });
};
