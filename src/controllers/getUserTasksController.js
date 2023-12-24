import { Task } from "../models/Task.js";

export const getUserTasksController = async (req, res, next) => {
  const tasks = await Task.find({ taskedByUser: res.user.email });

  if (tasks.length === 0)
    return res.status(401).json({ message: "No momento não possui TASKS!" });

  return res.status(200).json({ tasks });
};
