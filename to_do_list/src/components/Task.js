import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

function Task({ task, onDelete, onEdit, onComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleDeleteTask = () => {
    onDelete(task.id);
  };

  const handleEditTask = () => {
    setIsEditing(true);
  };

  const handleSaveTask = (event) => {
    event.preventDefault();
    onEdit(task.id, newText);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setNewText(task.text);
  };

  const handleCompleteTask = () => {
    onComplete(task.id);
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <form onSubmit={handleSaveTask}>
          <input
            type="text"
            value={newText}
            onChange={(event) => setNewText(event.target.value)}
            className="edit-input"
          />
          <div className="actions">
            <button type="submit" className="save-button">
        
                <DoneIcon />
              
            </button>
            <button type="button" className="cancel-button" onClick={handleCancelEdit}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className="text">{task.text}</div>
          <div className="actions">
            <button type="button" className="edit-button" onClick={handleEditTask}>
              
                <EditIcon />
             
            </button>
            <button type="button" className="delete-button" onClick={handleDeleteTask}>
            
                <DeleteIcon />
             
            </button>
            <button
              type="button"
              className={`complete-button ${task.completed ? 'completed' : ''}`}
              onClick={handleCompleteTask}
            >
              
                <DoneIcon />
             
            </button>
          </div>
        </>
      )}
    </li>
  );
}
export default Task;
