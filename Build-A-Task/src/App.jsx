import Header from './Header.jsx'
import TaskInput from './TaskInput.jsx'
import TaskList from './TaskList.jsx'
import { useState } from 'react';


function App() {

  const [taskInput, setTaskInput] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [tasks, setTasks] = useState([]);
  

  const handleAddTask = () => {
    if (taskInput && taskDesc) {
      setTasks([...tasks, { taskInput, taskDesc }]); // Add new task
      setTaskInput(''); // Clear the input fields
      setTaskDesc('');
    }
  };

  return (
    <div className='flex bg-slate-200 shadow-2xl   rounded-full justify-center items-center mt-4 mx-36 pb-36 '>
        <div className='flex flex-col '>
            <Header 
        taskInput={taskInput}
        taskDesc={taskDesc}
        setTaskInput={setTaskInput}
        setTaskDesc={setTaskDesc}
        onAddTask={handleAddTask} />

            <TaskInput       
        taskInput={taskInput}
        taskDesc={taskDesc}
        setTaskInput={setTaskInput}
        setTaskDesc={setTaskDesc}
        onAddTask={handleAddTask} />

            <TaskList  tasks={tasks} />
        </div>

    </div>
  
  );

}
export default App
