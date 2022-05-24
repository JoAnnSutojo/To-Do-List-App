import React, { useContext } from 'react';
import { TasksContext } from '../contexts/TasksContext';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Header() {
    const { taskArray } = useContext(TasksContext);
    const { theme, setTheme, themes} = useContext(ThemeContext);

    const changeTheme = function(e) {
        setTheme(e.target.value)
    }

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return (
        <div className={`header-conta ${theme}`} >
            <h1>To Do List</h1>
            <p>Today, {date}</p>
            <p>{taskArray.length} Tasks</p>
            <div className='theme-dropdown'>
                <label for='theme'>Choose theme</label>
                <select name='theme' onChange={changeTheme}>
                   {themes.map((theme) => <option value={theme}>{theme}</option> )}
                </select>
            </div>
        </div>
        
    )
}

{/* <option value='black'>black</option>
<option value='tomato'>tomato</option>
<option value='seagreen'>seagreen</option>
<option value='lemon'>lemon</option> */}
