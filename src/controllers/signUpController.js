import bcrypt from "bcrypt";

import { v4 as uuidv4 } from "uuid";
import { Person } from "../models/Person.js";

export const signUpController = async (req, res, next) => {
  const { name, lastName, email, password } = req.body;

  if (!name) return res.status(401).json({ message: "Nome é obrigatório!" });
  if (!lastName)
    return res.status(401).json({ message: "Último nome é obrigatório!" });
  if (!email) return res.status(401).json({ message: "E-mail é obrigatório!" });
  if (!password)
    return res.status(401).json({ message: "Senha é obrigatória!" });

  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);

  const person = {
    _id: uuidv4(),
    name: name,
    lastName: lastName,
    email: email,
    password: hashPassword,
    created_at: new Date(),
  };

  try {
    await Person.create(person);

    return res.status(201).json({ person });
  } catch (error) {
    return res.status(500).json({ message: "SignUp Error: ", error });
  }
};
