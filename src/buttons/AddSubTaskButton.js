import React, { useState, useContext } from 'react';
import { TasksContext } from '../contexts/TasksContext';
import { ShowInputContext } from '../contexts/ShowInputContext';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function AddSubTaskButton({ taskId }) {
    const [inputSubTask, setInputSubTask] = useState('');
    // const [isInputFieldShown, setIsInputFieldShown] = useState(false);
   
    const { taskArray, setTaskArray } = useContext(TasksContext);
    const { setIsInputActive, isInputSubTaskFieldShown, setIsInputSubTaskFieldShown } = useContext(ShowInputContext);

    const showInputField = function() {
        setIsInputSubTaskFieldShown(true);
         setIsInputActive(true);
      };

    const updateInputSubTask = function(e) {
        setInputSubTask(e.target.value);
    };

    const addSubTask = function(taskId) {
        if (inputSubTask.length < 1) {
            alert('Input is empty. Please try again!');
        } else {
        // Find the index of the targeted Main-Task
        let targetIndex = taskArray.indexOf(taskArray.find(task=>task.id === taskId));
        // Copied the Main-Task object (in which we want to add further Sub-Tasks)
        let newMainTask = taskArray[ targetIndex];
        // Pushing the new Sub-Tasks  into the targeted Main-Task that we copied in previous  line.
        newMainTask.subTask.push({subTaskId : uuidv4(), subTaskName: inputSubTask});
        // Applying map method to make an updated copy of taskArray. In map method we create a new array from old array. The new returned array will always have the same number of elements as the previous array. Value of every element in the array depends on our return statement, what we are returning.
        // As per our case we just want to change the value of the targeted Main-Task (passed as id), so we are only updating the 'subTask' property of that element, while returning all others as they were before.
        let updatedTaskArray = taskArray.map((task) => {
            if (task.id === taskId) task = {...newMainTask}
            return task
         });
        setTaskArray(updatedTaskArray);
        setInputSubTask('');
        }  
    };

    return ( 
        <div>
        <span >
            <button
             aria-label='add sub-task '
             onClick={showInputField}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </span>
        {isInputSubTaskFieldShown && 
                <input 
                className='input-subtask'
                type='text' 
                placeholder='Add Sub-Task and Press Enter'
                autoFocus='autofocus'
                onChange={updateInputSubTask}
                onKeyPress={e => {
                     if (e.key === 'Enter') {
                         e.preventDefault();
                         addSubTask(taskId);
                         setIsInputSubTaskFieldShown(false);
                         setIsInputActive(false)
                     }
                 }}
                 />}
        </div> 
     );
}

export default AddSubTaskButton;