import React, { useContext } from 'react';
import { TasksContext } from '../contexts/TasksContext';
import { ShowInputContext } from '../contexts/ShowInputContext';
import AddSubTaskButton from '../buttons/AddSubTaskButton';
import DeleteTaskButton from '../buttons/DeleteTaskButton';
import DeleteSubTaskButton from '../buttons/DeleteSubTaskButton';
import AddTaskButton from '../buttons/AddTaskButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Tasks() {
    const { taskArray, setTaskArray } = useContext(TasksContext);
    const { isInputActive } = useContext(ShowInputContext);

    const updateTask = function(inputText, taskId) {
        console.log('inputText', inputText);
        const updatedTaskArray = taskArray.map((task) => {
            if (task.id === taskId) {
                task.taskName = inputText;
            }
            return task;
        })
        setTaskArray(updatedTaskArray);
        console.log('updatedTaskArray', updatedTaskArray);
    };

    const updateSubTask = function(inputText, taskId, subTaskId) {
        // Find the index of the targeted Main-Task
        let targetIndex = taskArray.indexOf(taskArray.find(item => item.id === taskId));
         // Copied the Main-Task object (in which we want to update subTaskName property of a Sub-Task)
        let newMainTask = taskArray[targetIndex];
        // Access the Sub-Task Array inside Main-Task
        let targetSubTask = newMainTask.subTask.find((subTask) => subTask.subTaskId === subTaskId);
        // Update value subTaskName property with new input
        targetSubTask.subTaskName = inputText;
        // Mapping over taskArray in state to create a new array, in which an element was updated (updated Sub-Task name).
        let updatedTaskArray = taskArray.map((mainTask) => {
            if (mainTask.id === taskId) mainTask = {...newMainTask}
            return mainTask
         });
        setTaskArray(updatedTaskArray);
    };

    return(
        <div className='main-tasks-conta'>
            {isInputActive && 
            <div className='overlay' />
            } 
            <div className='tasks-conta'>
                <ul className='list-conta'>

                    {/* Task List */}
                    {taskArray.map((task) => 
                    <div className='task-conta'>
                        <li key={task.id} className='task'>
                            <input 
                            className='task-field'
                            type='text' 
                            id={task.id} 
                            value={task.taskName} 
                            onChange={(e) => updateTask(e.target.value, task.id)} 
                            />
                           <div className='task-menu'>
                                <AddSubTaskButton taskId={task.id} />    
                                <DeleteTaskButton taskId={task.id}/>    
                           </div> 
                        </li>
                         
                        {/* Sub-Task List */}
                        {task.subTask.map((subTask) => 
                           <li key={subTask.subTaskId} className='sub-task'>
                               <div className='sub-task-list'>
                                    <FontAwesomeIcon  icon={faAngleRight} />
                                     <input 
                                     className='sub-task-field'
                                     type='text' 
                                     id={subTask.id} 
                                     value={subTask.subTaskName} 
                                     onChange={(e) => updateSubTask(e.target.value, task.id, subTask.subTaskId)} 
                                     />
                               </div>
                                <div className='task-menu'>
                                    <div />
                                    <DeleteSubTaskButton taskId={task.id} subTaskId={subTask.subTaskId} />
                                </div>
                           </li>
                         )}
                    </div>  
                    )}
                </ul>
            <AddTaskButton />
            </div> 
        </div>    
    )
}

export default Tasks;