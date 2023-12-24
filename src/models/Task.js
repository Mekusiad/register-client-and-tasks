import { mongoose } from "mongoose";

const TaskSchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  taskedByUser: {
    type: String,
    require: true,
    select: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  completed_at: {
    type: Date,
    default: Date.now,
  },
});

export const Task = mongoose.model("Task", TaskSchema);
