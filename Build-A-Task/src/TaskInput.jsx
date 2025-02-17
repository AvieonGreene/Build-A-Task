function TaskInput({ taskInput, taskDesc, setTaskInput, setTaskDesc }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-20 mt-10 w-full px-4">
      {/* Task Input */}
      <div className="flex flex-col gap-2 w-full sm:w-auto">
        <label className="text-sm font-semibold">Input Task</label>
        <input
          type="text"
          id="taskInput"
          name="Task-input"
          placeholder="Task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="p-2 border rounded-md w-full sm:w-64"
        />
      </div>

      {/* Task Description */}
      <div className="flex flex-col gap-2 w-full sm:w-auto">
        <label className="text-sm font-semibold">Task Description</label>
        <input
          type="text"
          id="taskDesc"
          name="Task-desc"
          placeholder="Task description..."
          value={taskDesc}
          onChange={(e) => setTaskDesc(e.target.value)}
          className="p-2 border rounded-md w-full sm:w-64"
        />
      </div>
    </div>
  );
}

export default TaskInput;
