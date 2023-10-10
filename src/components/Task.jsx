import React, { useState } from 'react'
import { useDrag } from 'react-dnd';
import {toast , ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import EditModal from './EditModal';


const Task = ({task , index , tasks , setTasks , status , tasksToMap , openEditModal , setOpenEditModal}) => {


    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item : {id : task.id} ,
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))

      console.log(isDragging)



    const toastOptions = {
        position : "top-center",
        autoClose: 1000,
        pauseOnHover: true,
        draggable: true,
        theme : "light",
      };



    const deleteTask = (id) => {

        const newTasks = tasks.filter((t) => t.id !== id)

        localStorage.setItem("tasks" , JSON.stringify(newTasks))

        setTasks(newTasks)

        toast.success("task has been removed ")

    }


    let parentStyle = ""
    let headerStyle = ""
    let spanStyleOne = ""
    let spanStyleTwo = ""
    let spanStyleThree = ""
    let divStyle = ""

    if(status === "todo"){
        parentStyle = `bg-blue-700 relative p-7 mt-8 rounded-md shadow-md cursor-grab h-32 ${isDragging} ? "opacity-25" `
        headerStyle = "absolute top-0 left-0 p-2 text-xl text-white"
        spanStyleOne = "absolute top-0 right-0 p-2 bg-blue-700 rounded-full text-white"
        spanStyleTwo = "absolute top-15 left-0 p-2 text-white"
        spanStyleThree = "absolute bottom-8 left-0 p-2 text-white"
        divStyle = "flex items-center gap-2 text-white absolute bottom-0 left-0 p-3"
    }

    if(status === "inProgress"){
        parentStyle = `bg-green-600 relative p-7 mt-8 rounded-md shadow-md cursor-grab h-32 ${isDragging} ? "opacity-25" `
        headerStyle = "absolute top-0 left-0 p-2 text-xl text-white"
        spanStyleOne = "absolute top-0 right-0 p-2 bg-green-600 rounded-full text-white"
        spanStyleTwo = "absolute top-15 left-0 p-2 text-white"
        spanStyleThree = "absolute bottom-8 left-0 p-2 text-white"
        divStyle = "flex items-center gap-2 text-white absolute bottom-0 left-0 p-3"
    }

    if(status === "done"){
        parentStyle = `bg-red-700 relative p-7 mt-8 rounded-md shadow-md cursor-grab h-32 ${isDragging} ? "opacity-25" `
        headerStyle = "absolute top-0 left-0 p-2 text-xl text-white"
        spanStyleOne = "absolute top-0 right-0 p-2 bg-red-700 rounded-full text-white"
        spanStyleTwo = "absolute top-15 left-0 p-2 text-white"
        spanStyleThree = "absolute bottom-8 left-0 p-2 text-white"
        divStyle = "flex items-center gap-2 text-white absolute bottom-0 left-0 p-3"
    }

    
    {console.log(task.desc)}

  return (
    <div ref={drag} className={`${parentStyle}`}>

        <h2 className={`${headerStyle}`}>{task.name}</h2>

        <span className={`${spanStyleOne}`}>{task.status}</span>
        <span className={`${spanStyleTwo}`}>{task.due_date.slice(0, 10)}</span>
        <span className={`${spanStyleThree} `}>{task.desc}</span>
        
        <div className={`${divStyle}`}>

        <button className='cursor-pointer text-lg' onClick={() => setOpenEditModal((prev) => !prev)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
        </button>

        {openEditModal &&  <EditModal taskId={task.id} tasksToMap={tasksToMap} index={index} newTask={task} tasks={tasks} setTasks={setTasks} setOpenEditModal={setOpenEditModal}/>}


        <button className='cursor-pointer text-lg' onClick={() => deleteTask(task.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </button>

        </div>

        <ToastContainer/>

    </div>
    )
}


export default Task