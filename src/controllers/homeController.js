import { Person } from "../models/Person.js";
import { Task } from "../models/Task.js";
import { v4 as uuid4 } from "uuid";

export const homeController = async (req, res, next) => {
  const { title, description } = req.body;

  if (!title || !description)
    return res
      .status(403)
      .json({ message: "Campo obrigatório não preenchido, tente novamente!" });

  const task = {
    _id: uuid4(),
    title: title,
    description: description,
    taskedByUser: res.user.email,
  };

  try {
    await Task.create(task);
    return res.status(201).json({ task });
  } catch (error) {
    return res.status(500).json({ message: "Algo deu errado!" });
  }
};
