import React, { createContext, useState } from 'react';

const ShowInputContext = createContext({});

function ShowInputProvider({ children }) {
    const [isInputActive, setIsInputActive] = useState(false);
    
    return ( 
        <ShowInputContext.Provider value={{isInputActive, setIsInputActive}}>
            { children }
        </ShowInputContext.Provider>
     );
}

export { ShowInputContext, ShowInputProvider};