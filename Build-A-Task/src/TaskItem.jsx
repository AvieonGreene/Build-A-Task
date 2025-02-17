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
    <div className="flex flex-col gap-4 p-4 mb-4 bg-slate-400 rounded-xl w-full sm:w-auto">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        {/* Task Editor */}
        <div>
          <TaskEditor handleEditTask={handleEditTask} isEditing={isEditing} />
        </div>

        {/* Task Details */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 bg-slate-400 py-4 px-6 rounded-3xl w-full">
          <div className={`w-full sm:w-48 ${isCompleted ? "line-through text-gray-500" : ""}`}>
            {isEditing ? (
              <div>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="border p-2 rounded-md mb-2 w-full"
                />
                <input
                  type="text"
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="border p-2 rounded-md mb-2 w-full"
                />
              </div>
            ) : (
              <div>
                <h2 className="text-lg font-semibold">{taskInput}</h2>
                <p className="text-sm">{taskDesc}</p>
              </div>
            )}
          </div>
          <div className="text-sm font-medium">
            <span>Priority Level</span>
          </div>
        </div>

        {/* Task Buttons */}
        <div>
          <TaskButtons 
            removeTask={removeTask} 
            isCompleted={isCompleted} 
            handleTaskStatus={handleTaskStatus} 
          />
        </div>
      </div>

      {/* Save Button (Only when Editing) */}
      {isEditing && (
        <div className="mt-2 flex justify-end">
          <button 
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
}

export default TaskItem;
