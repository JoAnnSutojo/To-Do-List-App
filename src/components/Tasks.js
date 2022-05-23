import React, { useState, useEffect } from 'react';
import manageTasksContext from '../contexts/manageTasksContext';
import AddSubTaskButton from '../buttons/AddSubTaskButton';
import DeleteTaskButton from '../buttons/DeleteTaskButton';
import DeleteSubTaskButton from '../buttons/DeleteSubTaskButton';
import AddTaskButton from '../buttons/AddTaskButton';

function Tasks() {
    const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
   
    const [taskArray, setTaskArray] = useState(initialTasks);
    const [inputTask, setInputTask] = useState('');

    const [isInputActive, setIsInputActive] = useState(false);

    const value = { taskArray, setTaskArray, inputTask, setInputTask, isInputActive, setIsInputActive };  

    const updateTask = function(inputText, taskId) {
        const updatedTaskArray = taskArray.map((task) => {
            if (task.id === taskId) {
                task.taskName = inputText;
            }
            return task;
        })
        setTaskArray(updatedTaskArray);
    };

    const updateSubTask = function(inputText, taskId, subTaskId) {
        // Find the index of the targeted Main-Task
        let targetIndex = taskArray.indexOf(taskArray.find(item=>item.id === taskId));
         // Copied the Main-Task object (in which we want to update subTaskName property of a Sub-Task)
        let newMainTask = taskArray[targetIndex];
        // Access the Sub-Task Array inside Main-Task
        let targetSubTask = newMainTask.subTask.find((subTask) => subTask.id === subTaskId);
        // Update value subTaskName property with new input
        targetSubTask.subTaskName = inputText;
        // Mapping over taskArray in state to create a new array, in which an element was updated (updated Sub-Task name).
        let updatedTaskArray = taskArray.map((mainTask) => {
            if (mainTask.id === taskId) mainTask={...newMainTask}
            return mainTask
         });
        setTaskArray(updatedTaskArray);
    };
    
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(taskArray));
    }, [taskArray]);

    return(
        <manageTasksContext.Provider value={value}>
            <div  style={{backgroundColor: isInputActive ? 'grey' : '', opacity: isInputActive ? '0.7' : ''}} />
            <div className='tasks-conta'>
                <ul className='list-conta'>

                    {/* Task List */}
                    {taskArray.map((task) => 
                    <div>
                        <li key={task.id} className='task'>
                            <input 
                            type='text' 
                            id={task.id} 
                            value={task.taskName} 
                            onChange={(e) => updateTask(e.target.value, task.id)} 
                            />
                           {/* <p>{t.taskName}</p> */}
                           <div className='task-menu'>
                                <AddSubTaskButton taskId={task.id} />
                                <DeleteTaskButton taskId={task.id}/>
                           </div> 
                        </li>
                         
                        {/* Sub-Task List */}
                        {task.subTask.map((subTask) => 
                           <li key={subTask.subTaskId} className='sub-task'>
                               <input 
                               type='text' 
                               id={subTask.id} 
                               value={subTask.subTaskName} 
                               onChange={(e) => updateSubTask(e.target.value, task.id, subTask.id)} 
                               />
                               {/* <p>{subTask.subTaskName}</p> */}
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
        </manageTasksContext.Provider>
    )
}

export default Tasks;