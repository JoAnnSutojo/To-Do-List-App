import React, { useContext } from 'react';
import manageTasksContext from '../contexts/manageTasksContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function DeleteTaskButton({ taskId }) {

  const { taskArray, setTaskArray } = useContext(manageTasksContext);

  const deleteTask = function(taskId) {
    setTaskArray(taskArray.filter(task => task.id !== taskId));
  }

    return (
      <div>
        <button
          aria-label='delete'
          onClick={() => deleteTask(taskId)}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
      );
}

export default DeleteTaskButton;