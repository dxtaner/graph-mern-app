import TaskItem from "./TaskItem";

export default function TaskList({ tasks }) {
  if (!tasks || tasks.length === 0) {
    return <p className="empty-msg">No tasks found. Add your first task!</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
