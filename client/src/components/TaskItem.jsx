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
    <li className="task-item">
      <div className="task-content" onClick={handleToggle}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
          className="task-checkbox"
        />
        <span className={`task-text ${task.completed ? "completed" : ""}`}>
          {task.title}
        </span>
      </div>
      <button
        onClick={() => deleteTask({ variables: { id: task.id } })}
        className="btn-delete"
      >
        Delete
      </button>
    </li>
  );
}
