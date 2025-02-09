import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import TaskInput from "./TaskInput.jsx";
import TaskList from "./TaskList.jsx";
import AboutUs from "./AboutUs.jsx"; // Import About Us
import { useState } from "react";

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [tasks, setTasks] = useState([]);
  const [taskStatus, setTaskStatus] = useState("");

  const handleAddTask = () => {
    if (taskInput && taskDesc) {
      setTasks([...tasks, { taskInput, taskDesc, isCompleted: false, isEditing: false }]);
      setTaskInput("");
      setTaskDesc("");
    }
  };

  const removeTask = (taskToRemove) => {
    setTasks(tasks.filter((task) => task !== taskToRemove));
  };

  const handleTaskStatus = (index) => {
    setTasks(tasks.map((task, i) => (i === index ? { ...task, isCompleted: !task.isCompleted } : task)));
  };

  const handleEditTask = (index) => {
    setTasks(tasks.map((task, i) => (i === index ? { ...task, isEditing: !task.isEditing } : task)));
  };

  const handleUpdateTask = (index, newTitle, newDesc) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, taskInput: newTitle, taskDesc: newDesc, isEditing: false } : task
      )
    );
  };

  return (
    <Router>
      <Routes>
        {/* Task Manager (Home Page) */}
        <Route
          path="/"
          element={
            <div className="flex bg-slate-200 shadow-2xl rounded-full justify-center items-center mt-4 mx-36 pb-36">
              <div className="flex flex-col">
                <Header onAddTask={handleAddTask} />
                <TaskInput
                  taskInput={taskInput}
                  taskDesc={taskDesc}
                  setTaskInput={setTaskInput}
                  setTaskDesc={setTaskDesc}
                  onAddTask={handleAddTask}
                />
                <TaskList
                  tasks={tasks}
                  removeTask={removeTask}
                  taskStatus={taskStatus}
                  setTaskStatus={setTaskStatus}
                  handleTaskStatus={handleTaskStatus}
                  handleEditTask={handleEditTask}
                  handleUpdateTask={handleUpdateTask}
                />
              </div>
            </div>
          }
        />

        {/* About Us Page */}
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
