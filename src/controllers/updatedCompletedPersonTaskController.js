import { Task } from "../models/Task.js";

export const updatedCompletedPersonTaskController = async (req, res, next) => {
  const task = res.task;
  await Task.updateOne(
    { taskedByUser: res.user.email },
    { $set: { completed: !task.completed } }
  );

  return res.status(200).json({ message: "Task status updated", task });
};
