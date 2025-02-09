import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faCircleXmark} from '@fortawesome/free-solid-svg-icons';


function TaskButtons({removeTask, handleTaskStatus,isCompleted}) {



    return (
        <div className='flex flex-row gap-10'>
            <button type="button" onClick={handleTaskStatus} >
            <FontAwesomeIcon icon={faCheck} className='text-3xl'
             />
             {isCompleted ? "Undo" : "Complete"}
            </button>
            <button type="button" onClick={removeTask}>
            <FontAwesomeIcon icon={faCircleXmark} className='text-3xl' />
            </button>
        </div>
    )
  }
  export default TaskButtons;