import React from "react";
import "./Sidebar.css";

const Sidebar = ({ setActiveFilter }) => {
  return (
    <aside className="sidebar">
      <h3>Filtrar Tarefas</h3>
      <button onClick={() => setActiveFilter("all")}>Todas</button>
      <button onClick={() => setActiveFilter("completed")}>Concluídas</button>
      <button onClick={() => setActiveFilter("pending")}>Pendentes</button>
    </aside>
  );
};

export default Sidebar;
