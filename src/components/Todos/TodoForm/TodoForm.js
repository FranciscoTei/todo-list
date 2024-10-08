import { useState } from "react";
import FormInput from "../FormInput/FormInput.js";
import FormSelect from "../FormSelect/FormSelect.js";
import Button from "../Button/Button.js";
import "./TodoForm.css";

const colors = ["#4caf50", "#ffeb3b", "#ff9800", "#f44336", "#03a9f4", "#ffffff"];

const TodoForm = ({ onTaskAdded }) => {
  const [taskForm, setTaskForm] = useState({
    title: "",
    dueDate: "",
    description: "",
    status: "pending",
    priority: "baixa",
    color: "#4caf50",
    tags: "",
  });

  const handleFieldsChange = (event) => {
    setTaskForm({ ...taskForm, [event.target.name]: event.target.value });
  };

  const handleColorChange = (color) => {
    setTaskForm({ ...taskForm, color });
  };

  const handleClick = async () => {
    const response = await fetch("http://localhost:3005/tasks", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(taskForm),
    });

    const data = await response.json();
    alert(`Tarefa ${data.title} adicionada com sucesso!`);
    onTaskAdded();
    setTaskForm({
      title: "",
      dueDate: "",
      description: "",
      status: "pending",
      priority: "baixa",
      color: "#4caf50",
      tags: "",
    });
  };

  return (
    <form className="todo-form">
      <FormInput
        inputName="Título"
        id="title"
        name="title"
        type="text"
        value={taskForm.title}
        onChange={handleFieldsChange}
      />
      <FormInput
        inputName="Descrição (opcional)"
        id="description"
        name="description"
        type="text"
        value={taskForm.description}
        maxLength={200}
        onChange={handleFieldsChange}
      />
      <FormInput
        inputName="Data de Conclusão"
        id="dueDate"
        name="dueDate"
        type="text"
        value={taskForm.dueDate}
        onChange={handleFieldsChange}
      />
      <FormSelect
        inputName="Nível de Prioridade"
        id="priority"
        name="priority"
        value={taskForm.priority}
        onChange={handleFieldsChange}
        options={["baixa", "média", "alta", "urgente"]}
      />
      <div className="color-picker">
        <label>Cor:</label>
        <div className="color-options">
          {colors.map((color) => (
            <div
              key={color}
              className={`color-circle ${taskForm.color === color ? "selected" : ""}`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorChange(color)}
            />
          ))}
        </div>
      </div>
      <FormInput
        inputName="Tags"
        id="tags"
        name="tags"
        type="text"
        placeholder="Ex: estudo, trabalho"
        value={taskForm.tags}
        onChange={handleFieldsChange}
      />
      <Button
        text="Adicionar Tarefa"
        type="button"
        onClick={handleClick}
      />
    </form>
  );
};


export default TodoForm;