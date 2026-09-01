export const typeDefs = `#graphql
  type Task {
    id: ID!
    title: String!
    completed: Boolean!
    createdAt: String
  }

  type Query {
    getTasks: [Task]
    getTask(id: ID!): Task
  }

  type Mutation {
    createTask(title: String!): Task
    updateTask(id: ID!, completed: Boolean!): Task
    deleteTask(id: ID!): String
  }
`;
