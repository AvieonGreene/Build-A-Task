import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faCircleXmark} from '@fortawesome/free-solid-svg-icons';

function TaskButtons() {
    return (
        <div className='flex flex-row gap-10'>
            <FontAwesomeIcon icon={faCheck} className='text-3xl' />
            <FontAwesomeIcon icon={faCircleXmark} className='text-3xl' />
        </div>
    )
  }
  export default TaskButtons;