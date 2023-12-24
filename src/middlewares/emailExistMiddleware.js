import { Person } from "../models/Person.js";

export const emailExistMiddleware = async (req, res, next) => {
  const { email } = req.body;

  const isExist = await Person.findOne({ email: email });

  if (isExist)
    return res
      .status(401)
      .json({ message: "E-mail já cadastrado, tente outro!" });

  next();
};
