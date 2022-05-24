import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { TasksProvider } from './contexts/TasksContext';
import { ShowInputProvider } from './contexts/ShowInputContext';
import './App.css';

function App() {

  return (
   <TasksProvider>
     <ShowInputProvider>
     <div className='main-conta'>
        <Header />
        <Tasks />
      </div>
     </ShowInputProvider>
     
   </TasksProvider>
  );
}

export default App;
