import { Tasks } from "./components/Tasks";
import { Header } from "./components/Header";
import React, { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const[showAddTask, setShowAddTask]= useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },

    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },

    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);


  //Add task

  const addTask =(task) =>
  {
    console.log(task)
    const id = Math.floor(Math.random()*10000)+1
    const newTask ={
      id, ...task
    }
    setTasks([...tasks, newTask])
  }

  //delete task
const deleteTask = (id) =>
{
   console.log("delete", id)
   setTasks(tasks.filter(task => task.id !== id))
   
}

const onToggle = (id) =>
{
  setTasks(tasks.map(task => task.id === id? {...task, reminder: !task.reminder}: task))
}

  return (
    <div className="container">
      <Header title="Task Tracker" onAdd={() => setShowAddTask(!showAddTask)}/>
     {showAddTask &&<AddTask onAdd={addTask}/>}
      {tasks.length > 0 ?
      (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={onToggle}/>):
      ("No Task")}
    </div>
  );
}

export default App;
