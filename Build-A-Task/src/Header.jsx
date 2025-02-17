import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header({ onAddTask }) {
  return (
    <div className="main-div flex flex-col items-center gap-24 sm:flex-row  p-6">
      {/* Profile Section */}
      <div className="flex flex-col items-center sm:items-start">
        <div className="mt-10 sm:mt-20 w-32 h-32 sm:w-48 sm:h-48 flex justify-center items-center rounded-full bg-slate-400">
          <FontAwesomeIcon icon={faUser} className="text-5xl sm:text-7xl" />
        </div>
        <h1 className="pt-4 sm:pt-8 text-center sm:text-left">Hello Avieon!</h1>
      </div>

      {/* Buttons Section */}
      <div className="button-div flex flex-col items-center sm:items-start mt-8 sm:mt-44 gap-6 sm:gap-8">
        <Link to="/about-us" className="button-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          About Us
        </Link>
        <button
          className="button-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          type="button"
          onClick={onAddTask}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default Header;
