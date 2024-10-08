import "./Todo.css";
import TagBadge from "../TagBadge/TagBadge.js";

const Todo = ({ task, onTaskDeleted }) => {
  const tagsArray = Array.isArray(task.tags)
    ? task.tags
    : task.tags.split(",").map((tag) => tag.trim());

  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:3005/tasks/${task.id}`, {
        method: "DELETE",
      });
      onTaskDeleted(task.id);
    } catch (error) {
      console.error("Erro ao deletar a tarefa:", error);
    }
  };

  return (
    <li className="todo-item" style={{ "--todo-color": task.color }}>
      <div className="todo-header">
        <h3>{task.title}</h3>
        <button className="delete-button" onClick={handleDelete}>
          ❌
        </button>
      </div>
      <p>{task.description}</p>
      <p>Prazo: {task.dueDate}</p>
      <div className="todo-badges">
        <TagBadge text={task.priority} type={`priority ${task.priority}`} />
        <TagBadge
          text={task.completed ? "concluído" : "pendente"}
          type={`status ${task.completed ? "concluído" : "pendente"}`}
        />
        {tagsArray.map((tag, index) => (
          <TagBadge key={index} text={tag} type="tags" />
        ))}
      </div>
    </li>
  );
};

export default Todo;
