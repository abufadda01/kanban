import React, { useState } from 'react'
import {v4 as uuidv4} from "uuid"

import {toast , ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import Modal from './Modal';


const CreateTask = ({tasks , setTasks ,  openModal, setOpenModal}) => {

  // const [openModal , setOpenModal] = useState(false)

  // const toastOptions = {
  //   position : "top-center",
  //   autoClose: 3000,
  //   pauseOnHover: true,
  //   draggable: true,
  //   theme : "light",
  // };


  // const [task , setTask] = useState({
  //   id : "" ,
  //   name : "" ,
  //   desc : "" ,
  //   status : "todo",
  //   due_date : `${new Date()}` ,
  //   priority : ""
  // })



  // const handleChange = (e) => {
  //   setTask({...task , id : uuidv4()  , name : e.target.value})
  // }
  

  // const handleSubmit = (e) => {

  //   e.preventDefault()

  //   if (task.name.length === 0)  return toast.error("Invalid task name !" , toastOptions)

  //   if (task.name.length > 30){
  //     setTimeout(() => {
  //       setTask({
  //         id : "" ,
  //         name : "" ,
  //         desc : "" ,
  //         status : "todo",
  //         due_date : "" ,
  //         priority : ""
  //       })
  //     } , 2000)

  //     return toast.error("task name must not be more than 30 characters !" , toastOptions)

  //   }  


  //   setTasks((prev) => {
    
  //     const list = [...prev , task]
      
  //     localStorage.setItem("tasks" , JSON.stringify(list))

  //     return list
      
  //   })
    

  //   toast.success("task added successfully" , toastOptions)

  //   // reset task state to its default value
  //   setTask({
  //     id : "" ,
  //     name : "" ,
  //     desc : "" ,
  //     status : "todo",
  //     due_date : `${new Date()}` ,
  //     priority : ""
  //   })

  // }

  const openModalComponent = (e) => {
    e.preventDefault()
    setOpenModal((prev) => !prev)
  }


  return (
    <form>
      {/* <input onChange={handleChange} value={task.name} type="text" className='border-2 border-slate-400 bg-slate-200 rounded-md mr-2 h-12 px-2 w-64' /> */}
      
      <button className='bg-blue-500 rounded-md px-2 h-12 text-lg text-white' onClick={openModalComponent}>Create Task</button>

      {openModal && <Modal setOpenModal={setOpenModal} tasks={tasks} setTasks={setTasks}/>}

      <ToastContainer/>

    </form>
  )
}



export default CreateTask