import React, { useContext } from 'react';
import manageTasksContext from '../contexts/manageTasksContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function DeleteSubTaskButton({ taskId, subTaskId }) {
    const { taskArray, setTaskArray } = useContext(manageTasksContext);

    const deleteSubTask = function(taskId, subTaskId) {
    // Find the index of the targeted Main-Task
    let targetIndex = taskArray.indexOf(taskArray.find((task) => task.id === taskId));
    // Copied the Main-Task object (in which we want to delete a Sub-Task)
    let newMainTask = taskArray[targetIndex];
    // Filtering the 'subTask' array property of the targeted Main-Task
     let filteredSubTask = newMainTask.subTask.filter((subTask) => subTask.subTaskId !== subTaskId);
    // Updating the  'subTask'  property value with the filtered array.
    newMainTask.subTask = filteredSubTask;
    // Mapping over taskArray in state to create a new array, in which an element was updated (removed Sub-Task).
    let updatedTaskArray = taskArray.map((task) => {
        if (task.id === taskId) task = {...newMainTask}
        return task
     });
    setTaskArray(updatedTaskArray);
  }

    return (
      <button
       aria-label='delete sub-task'
       onClick={() => deleteSubTask(taskId, subTaskId)}
       >
          <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      );
}

export default DeleteSubTaskButton;