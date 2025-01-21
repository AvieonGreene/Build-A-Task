import TaskItem from './TaskItem.jsx'
import React from 'react';

function TaskList({ tasks }) {
    return (
      <div className='mt-28'>
   {tasks.map((task, index) => (
        <TaskItem
          key={index} // Use index as a unique key (acceptable for static lists)
          taskInput={task.taskInput} // Pass task title as a prop
          taskDesc={task.taskDesc} // Pass task description as a prop
        />
      ))}
      </div>
    )
  
  }
  export default TaskList;