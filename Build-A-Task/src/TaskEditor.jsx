import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

function TaskEditor({ handleEditTask, isEditing }) {
  return (
    <div className=''>
      <button type="button" onClick={handleEditTask}>
        <FontAwesomeIcon icon={faPenToSquare} className='text-3xl' />
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
}

export default TaskEditor;
