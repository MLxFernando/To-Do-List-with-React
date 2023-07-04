import { useState } from "react";
import "./components/style.css";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.trim()) return;
    const taskToAdd = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, taskToAdd]);
    setNewTask("");
  };

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleEdit = (taskId, newText) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          text: newText,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <div className="container">
        <h1>To-Do List</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add a task"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
          />
          <button type="submit" className="add-button">
            Add
          </button>
        </form>
        <ul>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={handleDelete}
              onEdit={handleEdit}
              onComplete={handleComplete}
            />
          ))}
        </ul>
      </div>
      <footer>
        <div class="footer-content">
          <p>&copy; 2023 Todos los derechos reservados</p>
          <ul>
            <li>
              <a href="mailto:fernandomacas68@gmail.com">Clic Aquí para contáctarme</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>        
  );
}

export default App;
