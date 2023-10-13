import React, { useState } from 'react'
import {v4 as uuidv4} from "uuid"

import {toast , ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import Modal from './Modal';


const CreateTask = ({tasks , setTasks ,  openModal, setOpenModal}) => {


  const openModalComponent = (e) => {
    e.preventDefault()
    setOpenModal((prev) => !prev)
  }


  return (
    <form>
      
      <button className='bg-blue-500 rounded-md px-2 h-12 text-lg text-white' onClick={openModalComponent}>Create Task</button>

      {openModal && <Modal setOpenModal={setOpenModal} tasks={tasks} setTasks={setTasks}/>}

      <ToastContainer/>

    </form>
  )
}



export default CreateTask