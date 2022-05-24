import React, { useContext } from 'react';
import { TasksContext } from '../contexts/TasksContext';

export default function Header() {
    const { taskArray } = useContext(TasksContext);

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return (
        <div className='header-conta' >
            <h1>To Do List</h1>
            <p>Today, {date}</p>
            <p>{taskArray.length} Tasks</p>
        </div>
        
    )
}