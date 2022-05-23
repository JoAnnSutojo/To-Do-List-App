import React from 'react';

export default function Header() {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return (
        <div className='header-conta' >
            <h1>To Do List</h1>
            <p className='date'>Today, {date}</p>
            <p>xx Tasks</p>
        </div>
        
    )
}