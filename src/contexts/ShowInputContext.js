import React, { createContext, useState } from 'react';

const ShowInputContext = createContext({});

function ShowInputProvider({ children }) {
    // For showing/removing overlay
    const [isInputActive, setIsInputActive] = useState(false);
    // For removing sub-task input field with add-task button
    const [isInputSubTaskFieldShown, setIsInputSubTaskFieldShown] = useState(false);
    
    return ( 
        <ShowInputContext.Provider value={
            {   isInputActive, 
                setIsInputActive,
                isInputSubTaskFieldShown,
                setIsInputSubTaskFieldShown
            }}>
            { children }
        </ShowInputContext.Provider>
     );
}

export { ShowInputContext, ShowInputProvider};