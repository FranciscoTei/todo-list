import { useEffect, useState } from "react";
import Todo from "../Todo/Todo.js";
import TodoForm from "../TodoForm/TodoForm.js";
import "./Todos.css";

const Todos = ({ activeFilter }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const response = await fetch("http://localhost:3005/tasks");
    const data = await response.json();
    setTasks(data);
  };

  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "pending") return !task.completed;
    if (activeFilter === "completed") return task.completed;
    return true;
  });

  const handleTaskDeleted = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <section className="todos">
      <h3>Minhas Tarefas</h3>
      <ul className="todos-list">
        <TodoForm onTaskAdded={getTodos} />
        {filteredTasks.map((task, index) => (
          <Todo key={task.id} task={task} onTaskDeleted={handleTaskDeleted} />
        ))}
      </ul>
    </section>
  );
};

export default Todos;
