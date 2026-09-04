import { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { CREATE_TASK } from "../graphql/mutations";
import { GET_TASKS } from "../graphql/queries";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [createTask] = useMutation(CREATE_TASK, {
    refetchQueries: [{ query: GET_TASKS }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    createTask({ variables: { title } });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="task-input"
      />
      <button type="submit" className="btn-add">
        Add
      </button>
    </form>
  );
}
