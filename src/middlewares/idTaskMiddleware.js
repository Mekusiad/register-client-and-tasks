import { Task } from "../models/Task.js";
import { validate as isUuid } from "uuid";

export const idTaskMiddleware = async (req, res, next) => {
  const { idTask } = req.params;

  if (!isUuid(idTask))
    return res.status(400).json({ message: "Invalid ID Task or not found" });

  try {
    const task = await Task.findById(idTask).select("+taskedByUser");
    res.task = task;
    if (!task)
      return res.status(404).json({ message: "Task não encontrada!!" });
  } catch (erro) {
    return res.status(500).json({ error: erro.message });
  }

  next();
};
