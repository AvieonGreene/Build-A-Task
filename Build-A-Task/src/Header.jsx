import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';


function Header({onAddTask}) {

  

    return (
        <div>
        <div className="main-div flex flex-row">
            <div>
                <div className="mt-20 ml-12 w-48 flex justify-center items-center h-48 rounded-full bg-slate-400 ">
                    <div>
                        <FontAwesomeIcon icon={faUser} className='text-7xl' />
                    </div>
                </div>
                <h1 className="pt-8 ">Hello Avieon!</h1>
            </div>

            <div className="button-div flex items-center mt-44 ml-20 gap-20 flex-col">
                <button className="button-1">About us</button>
                <button className="button-2" type="button"  onClick={onAddTask} >Add Task</button>
            </div>
        </div>
        
        </div>

    );
  
  }
  export default Header