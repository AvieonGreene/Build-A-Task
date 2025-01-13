import Header from './Header.jsx'
import TaskInput from './TaskInput.jsx'

function App() {
  return (
    <div className='flex bg-slate-200  rounded justify-center items-center mt-20 mx-36 pb-36  '>
        <div className='flex flex-col '>
            <Header />
            <TaskInput />
        </div>

    </div>
  
  );

}
export default App
