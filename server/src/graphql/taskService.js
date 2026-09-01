import { Task } from "../models/taskModel.js";

class TaskService {
  async getAllTasks() {
    return await Task.find().sort({ createdAt: -1 });
  }

  async getTaskById(id) {
    return await Task.findById(id);
  }

  async createTask(title) {
    const newTask = new Task({ title });
    return await newTask.save();
  }

  async updateTask(id, completed) {
    return await Task.findByIdAndUpdate(id, { completed }, { new: true });
  }

  async deleteTask(id) {
    await Task.findByIdAndDelete(id);
    return "Task deleted successfully";
  }
}

export const taskService = new TaskService();
