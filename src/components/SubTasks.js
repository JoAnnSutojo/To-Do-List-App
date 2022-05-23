import React, { useContext } from 'react';
import manageTasksContext from '../contexts/manageTasksContext';
import { v4 as uuidv4 } from 'uuid';

function SubTasks() {

    const { subTaskArray } = useContext(manageTasksContext);

    return ( 
        <div>
            <ul>
               {subTaskArray.map((subtask) =>
               <li key={uuidv4()}>
               {subtask.subTaskName}
               </li>
               )}
            </ul>
        </div>
     );
}

export default SubTasks;