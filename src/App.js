import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { TasksProvider } from './contexts/TasksContext';
import { ShowInputProvider } from './contexts/ShowInputContext';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';

function App() {

  return (
   <TasksProvider>
     <ShowInputProvider>
       <ThemeProvider>
          <div className='App'>
             <Header />
             <Tasks />
          </div>
       </ThemeProvider>
     </ShowInputProvider>
   </TasksProvider>
  );
}

export default App;
