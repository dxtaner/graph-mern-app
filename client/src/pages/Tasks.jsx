import { useQuery } from "@apollo/client/react";
import { GET_TASKS } from "../graphql/queries";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Tasks() {
  const { loading, error, data } = useQuery(GET_TASKS);

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div>
      <h2>Task List</h2>
      <TaskForm />
      <TaskList tasks={data?.getTasks} />
    </div>
  );
}
