import { Person } from "../models/Person.js";

import bcrypt from "bcrypt";

export const loginMiddleware = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(403).json({
      message: "Campo obrigatório não preenchido, tente novamente!",
    });

  try {
    const personExist = await Person.findOne({ email: email }).select(
      "+password"
    );

    if (!personExist)
      return res
        .status(401)
        .json({ message: "Login e/ou senha inválido, tente novamente!" });

    req.user = personExist;

    const equalsPassword = await bcrypt.compare(password, req.user.password);

    if (!equalsPassword)
      return res
        .status(401)
        .json({ message: "Login e/ou senha inválido, tente novamente!" });

    next();
  } catch (err) {
    console.error("Login Midleware ERROR:", err);
  }
};
