import TaskItem from './TaskItem.jsx';
import React from 'react';

function TaskList({ tasks, removeTask, handleTaskStatus, handleUpdateTask, handleEditTask }) {
  return (
    <div className='mt-28'>
      {tasks.map((task, index) => (
        <TaskItem
          key={index} // Use index as a unique key (acceptable for static lists)
          taskInput={task.taskInput} // Pass task title as a prop
          taskDesc={task.taskDesc} // Pass task description as a prop
          removeTask={() => removeTask(task)} // Pass the task to remove
          isCompleted={task.isCompleted} // Pass the completion state
          handleTaskStatus={() => handleTaskStatus(index)} // Pass the status toggling function
          handleEditTask={() => handleEditTask(index)} // Pass the edit toggling function
          handleUpdateTask={(newTitle, newDesc) => handleUpdateTask(index, newTitle, newDesc)} // Pass update function
          isEditing={task.isEditing} // Pass the edit state for each task
        />
      ))}
    </div>
  );
}

export default TaskList;
