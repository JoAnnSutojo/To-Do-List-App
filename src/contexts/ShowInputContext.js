import React, { createContext, useState } from 'react';

const ShowInputContext = createContext({});

function ShowInputProvider({ children }) {
    // For showing/removing overlay
    const [isInputActive, setIsInputActive] = useState(false);
    // For showing/closing sub-task input field
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