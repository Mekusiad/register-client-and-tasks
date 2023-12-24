import { Person } from "../models/Person.js";
import { validate as isUuid } from "uuid";

export const idMiddleware = async (req, res, next) => {
  const { id } = req.params;

  if (!isUuid(id))
    return res.status(400).json({ message: "Invalid ID Person or not found" });

  try {
    const user = await Person.findById(id);
    res.user = user;
    if (!user)
      return res.status(404).json({ message: "Usuário não encontrado!!!" });
  } catch (erro) {
    return res.status(500).json({ error: erro.message });
  }

  next();
};
