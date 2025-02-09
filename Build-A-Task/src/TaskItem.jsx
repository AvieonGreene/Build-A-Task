import React, { useState } from 'react';
import TaskEditor from './TaskEditor.jsx';
import TaskButtons from './TaskButtons.jsx';

function TaskItem({
  taskInput,
  taskDesc,
  removeTask,
  handleTaskStatus,
  isCompleted,
  handleEditTask,
  isEditing,
  handleUpdateTask
}) {
  const [newTitle, setNewTitle] = useState(taskInput);
  const [newDesc, setNewDesc] = useState(taskDesc);

  // Save the task when done editing
  const handleSave = () => {
    handleUpdateTask(newTitle, newDesc); // Update task with new title/description
  };

  return (
    <div className='flex flex-col gap-2 p-4 mb-4 bg-slate-400 rounded-xl'>
      <div className='flex flex-row gap-6'>
        <div>
          <TaskEditor handleEditTask={handleEditTask} isEditing={isEditing} />
        </div>

        <div className="flex Task-items mb-6 flex-row gap-6 bg-slate-400 py-4 px-8 rounded-3xl">
          <div className={`w-48 ${isCompleted ? "line-through text-gray-500" : ""}`}>
            {isEditing ? (
              <div>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className='border p-1 rounded-md mb-2 w-full'
                />
                <input
                  type="text"
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className='border p-1 rounded-md mb-2 w-full'
                />
              </div>
            ) : (
              <div>
                <h2>{taskInput}</h2>
                <p>{taskDesc}</p>
              </div>
            )}
          </div>
          <div>
            <span>Priority Level</span>
          </div>
        </div>

        <div>
          <TaskButtons 
            removeTask={removeTask} 
            isCompleted={isCompleted} 
            handleTaskStatus={handleTaskStatus} 
          />
        </div>
      </div>

      {isEditing && (
        <div className="mt-2">
          <button 
            onClick={handleSave}
            className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
}

export default TaskItem;
