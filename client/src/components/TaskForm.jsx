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
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "8px", marginRight: "8px", width: "70%" }}
      />
      <button type="submit" style={{ padding: "8px 16px", cursor: "pointer" }}>
        Add
      </button>
    </form>
  );
}
