import './App.css';
import Form from './components/form';
import TaskList from './components/TaskList';
import React, {useState} from 'react';

function App() {

  const [task,setTask] = useState({ text: ''}); 
  const [tasks,setTasks] = useState([]); 

  return (
    <div className="App">
      <Form
          label="Add a Task" 
          task ={task}
          setTask={setTask}
          tasks={tasks}
          setTasks={setTasks}

      ></Form>
      <TaskList
           task ={task}
           tasks={tasks}
      ></TaskList>
    </div>
  );
}

export default App;
 