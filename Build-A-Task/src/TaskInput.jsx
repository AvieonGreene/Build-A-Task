

function TaskInput() {
    return (
      <>
        <div className="flex flex-row gap-20 mt-10">
          <div className="flex flex-col gap-2">
            <label for="Task-input">Input Task</label>
            <input type="text" name="Task-input" placeholder="Task...." />
          </div>
          <div className="flex flex-col gap-2">
          <label for="Task-desc">Task description</label>
            <input type="text" name="Task-desc" placeholder="Task description....." />
          </div>
        </div>
      </>
    )
  
  }
  export default TaskInput;