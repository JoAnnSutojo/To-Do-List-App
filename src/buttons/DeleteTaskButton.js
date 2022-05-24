import React, { useContext } from 'react';
import { TasksContext } from '../contexts/TasksContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function DeleteTaskButton({ taskId }) {

  const { taskArray, setTaskArray } = useContext(TasksContext);

  const deleteTask = function(taskId) {
    setTaskArray(taskArray.filter(task => task.id !== taskId));
  }

    return (
      <span>
        <button
          aria-label='delete'
          onClick={() => deleteTask(taskId)}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </span>
      );
}

export default DeleteTaskButton;