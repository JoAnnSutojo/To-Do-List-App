import React, { useState, useContext } from 'react';
import { TasksContext } from '../contexts/TasksContext';
import { ShowInputContext } from '../contexts/ShowInputContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function AddTaskButton() {
    const [inputTask, setInputTask] = useState('');
    const [isInputFieldShown, setIsInputFieldShown] = useState(false);

    const { taskArray, setTaskArray } = useContext(TasksContext);
    const {  setIsInputActive } = useContext(ShowInputContext);
    const { theme } = useContext(ThemeContext);

    const showInputField = function() {
      setIsInputFieldShown(true);
      setIsInputActive(true)
    };

    const updateInputTask = function(e) {
      setInputTask(e.target.value);
    };

    const addTask = function() {
        setTaskArray([...taskArray, {id: Date.now(), taskName: inputTask, subTask: []}]);
        setInputTask('');
      };

    return ( 
      <div className='add-task-btn-conta'>
        <button
         className={`add-task-btn ${theme}`}
         aria-label='add task'
         onClick={showInputField}>
            <FontAwesomeIcon  icon={faPlus} />
        </button>
        {isInputFieldShown &&
           <input
             className='input-task'
             type='text' 
             placeholder='Add Task and Press Enter'
             autoFocus='autofocus'
             value={inputTask} 
             onChange={updateInputTask}
             onKeyPress={e => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  addTask();
                  setIsInputFieldShown(false);
                  setIsInputActive(false);
                }
             }}
           />
        }
      </div>
     );
}

export default AddTaskButton;