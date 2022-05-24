import React, { createContext, useState } from 'react';

const ThemeContext = createContext({});

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('black');

    const themes = ['black', 'tomato', 'seagreen', 'mustard', 'tangerine', 'olympic'];

    
    return ( 
       <ThemeContext.Provider value={{ theme, setTheme, themes }}>
           { children }
       </ThemeContext.Provider>
     );
}

export { ThemeContext, ThemeProvider };