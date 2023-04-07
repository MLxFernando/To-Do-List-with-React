import React, { useState } from 'react';
import './style.css';


function TodoItem({ task, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.text);
  const [completed, setCompleted] = useState(false);

  const handleEditTask = () => {
    setEditing(true);
  };

  const handleSaveTask = () => {
    task.text = editValue;
    setEditing(false);
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setEditValue(task.text);
  };

  const handleCompleteTask = () => {
    setCompleted(true);
  };

  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {editing ? (
        <>
          <input type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)} />
          <button onClick={handleSaveTask}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </>
      ) : (
        <>
          {task.text}
          {!completed && <button onClick={handleEditTask}>Edit</button>}
          {!completed && <button onClick={handleCompleteTask}>Complete</button>}
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
