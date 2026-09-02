import { useMutation } from "@apollo/client/react";
import { DELETE_TASK, UPDATE_TASK } from "../graphql/mutations";
import { GET_TASKS } from "../graphql/queries";

export default function TaskItem({ task }) {
  const [deleteTask] = useMutation(DELETE_TASK, {
    refetchQueries: [{ query: GET_TASKS }],
  });

  const [updateTask] = useMutation(UPDATE_TASK, {
    refetchQueries: [{ query: GET_TASKS }],
  });

  const handleToggle = () => {
    updateTask({
      variables: {
        id: task.id,
        completed: !task.completed,
      },
    });
  };

  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "8px",
      }}
    >
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          flexGrow: 1,
        }}
      >
        {task.title}
      </span>
      <button
        onClick={() => deleteTask({ variables: { id: task.id } })}
        style={{ color: "red", cursor: "pointer", padding: "4px 8px" }}
      >
        Delete
      </button>
    </li>
  );
}
