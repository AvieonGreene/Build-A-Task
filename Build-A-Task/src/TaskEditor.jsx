import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';

function TaskEditor() {
    return (
        <div className=''>
            <FontAwesomeIcon icon={faPenToSquare} className='text-3xl' />
        </div>
    )
  
  }
  export default TaskEditor;