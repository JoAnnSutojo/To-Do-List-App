import React, { createContext, useState, useEffect } from 'react';

const TasksContext = createContext({});

function TasksProvider({ children }) {
    const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
   
    const [taskArray, setTaskArray] = useState(initialTasks);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(taskArray));
    }, [taskArray]);
    
    return ( 
       <TasksContext.Provider value={{ taskArray, setTaskArray }}>
           { children }
       </TasksContext.Provider>
     );
}

export { TasksContext, TasksProvider};