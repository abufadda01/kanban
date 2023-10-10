import React from 'react'
import Header from './Header'
import Task from './Task'
import { useDrop } from 'react-dnd'

import {toast , ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";



const Column = ({status , index , tasks , setTasks , todos , inProgress , done , openEditModal , setOpenEditModal , sort , setSort}) => {


    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop : (item) => addItemToSection(item.id) ,
        collect: (monitor) => ({
          isOver: !!monitor.isOver()
        })
      }))


      const toastOptions = {
        position : "top-center",
        autoClose: 1200,
        pauseOnHover: true,
        draggable: true,
        theme : "light",
      };


    let headerText = ""
    let bg = ""
    let count = 0
    let tasksToMap = todos


    if(status === "todo"){
        headerText = "todo"
        bg = "bg-blue-600"
        count = todos.length
        tasksToMap = todos
    }


    if(status === "inProgress"){
        headerText = "inProgress"
        bg = "bg-green-600"
        count = inProgress.length
        tasksToMap = inProgress
    }


    if(status === "done"){
        headerText = "done"
        bg = "bg-red-600"
        count = done.length
        tasksToMap = done
    }


    const addItemToSection  = (id) => {

        setTasks((prev) => {
            const modifiedTasks = prev.map((item) => {
                if(item.id === id){
                    // modify single task status
                    return {...item , status : status}
                }

                return item
            })

            localStorage.setItem("tasks" , JSON.stringify(modifiedTasks))

            toast.success("Task status has been changed" , toastOptions)

            return modifiedTasks

        })
    }



    const filterByDate = (e) => {

        e.preventDefault()

        tasksToMap =  tasksToMap.sort((a , b) => {
            a.due_date > b.due_date ? -1 : 1
        })

        return tasksToMap
    }

  

    return (

    <div ref={drop} className={`w-72 relative lg:col-span-2 overflow-y-scroll overflow-x-hidden rounded-md px-2 mx-1 my-6 ${isOver ? "bg-slate-300" : ""}`}>
        <Header text={headerText} bg={bg} count={count} tasksToMap={tasksToMap} filterByDate={filterByDate} sort={sort} setSort={setSort} />
        {sort ? 
        <>
            {tasksToMap.length > 0 && tasksToMap.slice(0).reverse().map((task , index) => {
            return(
                <Task key={task.id} index={index} task={task} tasks={tasks} setTasks={setTasks} status={status} tasksToMap={tasksToMap} openEditModal={openEditModal} setOpenEditModal={setOpenEditModal}/>
            )
        })}
        </> 
        : 
        <>
            {tasksToMap.length > 0 && tasksToMap.map((task , index) => {
            return(
                <Task key={task.id} index={index} task={task} tasks={tasks} setTasks={setTasks} status={status} tasksToMap={tasksToMap} openEditModal={openEditModal} setOpenEditModal={setOpenEditModal}/>
            )
        })}
        </>
        }
        
        <ToastContainer/>

    </div>
    
  )
}

export default Column