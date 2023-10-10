import React, { useState } from 'react'
import "./modal.scss"
import CancelIcon from '@mui/icons-material/Cancel';
import {toast , ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import {v4 as uuidv4} from "uuid"



const Modal = ({setOpenModal , tasks , setTasks }) => {

    const toastOptions = {
        position : "top-center",
        autoClose: 1300,
        pauseOnHover: true,
        draggable: true,
        theme : "light",
      };


    const [task , setTask] = useState({
        id : uuidv4() ,
        name : "" ,
        status : "todo" ,
        desc : "" ,
        priority : "" ,
        due_date : new Date()
    })



    const handleTaskSubmit = (e) => {

        e.preventDefault()
        
        if(task.name.length === 0){
            return toast.error("enter a valid task name" , toastOptions)
        }
        if(task.desc.length > 30){
            return toast.error("task desc must not be more than 30 characters" , toastOptions)            
        }
        
                
        toast.success("Task created successfulyy" , toastOptions)

        let tempList = tasks
        tempList.push(task)

        localStorage.setItem("tasks" , JSON.stringify(tempList))
        window.location.reload()

        setOpenModal((prev) => !prev)
        
        setTask({
            name : "" ,
            status : "todo" ,
            desc : "" ,
            priority : "" ,
            due_date : new Date()
        })

    }


    const handleChange = (e) => {
        const {name , value} = e.target
        setTask({...task , [name] : value})
    }

    console.log(task)


  return (
    <div className='modal'>

    <div className='modalContiner'>

        <div className='modalHeader'>
            <h3>Add New Task</h3>
            <button className='Modalbtn' onClick={() => setOpenModal((prev) => !prev)}>
                <CancelIcon className='icon'/>
            </button>
        </div>

        <div className='inputsForm'>
            
            <form className='form'>

                <div className='formItem'>
                    <label className='label' htmlFor="task-name">TASK NAME</label>
                    <input value={task.name} className='input' name='name' type="text" id='task-name' onChange={handleChange} placeholder='task name' />
                </div>
                
                <div className='formItem'>
                    <label className='label' htmlFor="task-desc">TASK DESCRIPTION</label>
                    <input value={task.desc} className='input' name='desc' type="text" id='task-name' onChange={handleChange} placeholder='task desc' />
                </div>
                
                <div className='formItem'> 

                    <label className='label' htmlFor="task-name">TASK PRIORITY</label>

                    <select value={task.priority} className='priority' name="priority" id="priority" onChange={handleChange}>
                        <option value={task.priority} defaultValue={true} disabled>Choose task priority</option>
                        <option value="low">LOW</option>
                        <option value="mid">MID</option>
                        <option value="high">HIGH</option>
                    </select>

                </div>

                <hr />

            </form>

            <div className='formButtons'>
                <button onClick={() => setOpenModal((prev) => !prev)}>Cancel</button>
                <button className='submitBtn' onClick={handleTaskSubmit}>Add Task</button>
            </div>

        </div>

     </div>

     <ToastContainer/>

    </div>
  )
}

export default Modal