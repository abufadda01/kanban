import { useEffect, useState } from 'react'
import './App.css'
import CreateTask from './components/CreateTask'
import ListTasks from './components/ListTasks'
import {DndProvider} from "react-dnd"
import {HTML5Backend} from "react-dnd-html5-backend"


function App() {

  const [tasks , setTasks] = useState([])
  const [openModal , setOpenModal] = useState(false)
  const [openEditModal , setOpenEditModal] = useState(false)


  
  useEffect(() => {

    let tasksArrayInlocalStorage = localStorage.getItem("tasks")

    if(tasksArrayInlocalStorage){
      setTasks(JSON.parse(tasksArrayInlocalStorage))
    }
  } , [])


  console.log(tasks)


  return (
    <DndProvider backend={HTML5Backend}>
    <div className= 'flex flex-col items-center gap-16 sm:flex-wrap'>
      <h2 className='text-6xl mt-3 mb-1'>Kanban Board</h2>
        <CreateTask tasks={tasks} setTasks={setTasks} openModal={openModal} setOpenModal={setOpenModal}/>
        <ListTasks tasks={tasks} setTasks={setTasks} openEditModal={openEditModal} setOpenEditModal={setOpenEditModal} />
    </div>
    </DndProvider>
  )
}


export default App
