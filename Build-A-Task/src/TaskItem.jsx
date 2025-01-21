import TaskEditor from './TaskEditor.jsx'
import TaskButtons from './TaskButtons.jsx'
import React from 'react';

function TaskItem({taskInput,taskDesc}) {
    return (
      <div className='flex flex-row gap-10'>
        <div>
          <TaskEditor />
        </div>

          <div className="flex Task-items mb-10 flex-row gap-10 bg-slate-400 py-5 px-10 rounded-3xl">
                <div className='w-48'>
                  <h2>{taskInput}</h2>
                  <p>{taskDesc}</p>
                </div>
                <div>
                  <span>Priority Level</span>
               </div>
          </div>

          <div>
            <TaskButtons />
          </div>

        </div>
    )
  
  }
  export default TaskItem;