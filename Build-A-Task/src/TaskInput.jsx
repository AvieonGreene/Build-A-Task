

function TaskInput({taskInput, taskDesc, setTaskInput, setTaskDesc}) {


    return (
      <>
        <div className="flex flex-row gap-20 mt-10">
          <div className="flex flex-col gap-2">
            <label>Input Task</label>
            <input type="text" id="taskInput" 
            name="Task-input" 
            placeholder="Task...." 
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)} />
          </div>

          <div className="flex flex-col gap-2">
          <label>Task description</label>
            <input type="text" 
            id="taskDesc" 
            name="Task-desc" 
            placeholder="Task description....."  
            value={taskDesc}
            onChange={(e) => setTaskDesc(e.target.value)} />
            
          </div>
        </div>
      </>
    )
  
  }
  export default TaskInput;