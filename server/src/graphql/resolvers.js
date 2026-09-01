import { taskService } from "./taskService.js";

export const resolvers = {
  Query: {
    getTasks: () => taskService.getAllTasks(),
    getTask: (_, { id }) => taskService.getTaskById(id),
  },
  Mutation: {
    createTask: (_, { title }) => taskService.createTask(title),
    updateTask: (_, { id, completed }) => taskService.updateTask(id, completed),
    deleteTask: (_, { id }) => taskService.deleteTask(id),
  },
};
