import { gql } from "@apollo/client";

export const CREATE_TASK = gql`
  mutation CreateTask($title: String!) {
    createTask(title: $title) {
      id
      title
      completed
      createdAt
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation UpdateTask($id: ID!, $completed: Boolean!) {
    updateTask(id: $id, completed: $completed) {
      id
      completed
    }
  }
`;

export const DELETE_TASK = gql`
  mutation DeleteTask($id: ID!) {
    deleteTask(id: $id)
  }
`;
