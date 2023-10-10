import React, { useEffect, useState } from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import "./editModal.scss"
import {toast , ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";



const EditModal = ({newTask , setOpenEditModal , tasks , setTasks , index , tasksToMap , taskId}) => {

  const toastOptions = {
    position : "top-center",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme : "light",
  };


    const [task , setTask] = useState({
        name : "" ,
        status : "todo" ,
        desc : "" ,
        priority : "" ,
        due_date : new Date()
    })


    useEffect(() => {
        setTask({...task , newTask})
    }, [])


 






    const handleTaskUpdate = (e) => {

        e.preventDefault()
      
        let taskIndex = tasks.indexOf(newTask)

        tasks.splice(taskIndex , 1 , task)

        console.log(taskIndex)
                
        localStorage.setItem("tasks" , JSON.stringify(tasks))
        window.location.reload()
        
        toast.success("task has been updated" , toastOptions)

        setOpenEditModal((prev) => !prev)

    }


    const handleChange = (e) => {
        const {name , value} = e.target
        setTask({...task , [name] : value})
    }



  return (
    <div className="modal">
      <div className="modalContiner">
        <div className="modalHeader">
          <h3>Edit Task</h3>
          <button
            className="Modalbtn"
            onClick={() => setOpenEditModal((prev) => !prev)}
          >
            <CancelIcon className="icon" />
          </button>
        </div>

        <div className="inputsForm">
          <form className="form">
            <div className="formItem">
              <label className="label" htmlFor="task-name">
                TASK NAME
              </label>
              <input
                value={task.name}
                className="input"
                name="name"
                type="text"
                id="task-name"
                onChange={handleChange}
                placeholder="task name"
              />
            </div>

            <div className="formItem">
              <label className="label" htmlFor="task-desc">
                TASK DESCRIPTION
              </label>
              <input
                value={task.desc}
                className="input"
                name="desc"
                type="text"
                id="task-name"
                onChange={handleChange}
                placeholder="task desc"
              />
            </div>

            <div className="formItem">
              <label className="label" htmlFor="task-name">
                TASK PRIORITY
              </label>

              <select
                value={task.priority}
                className="priority"
                name="priority"
                id="priority"
                onChange={handleChange}
              >
                <option value={task.priority} defaultValue={true} disabled>
                  Choose task priority
                </option>
                <option value="low">LOW</option>
                <option value="mid">MID</option>
                <option value="high">HIGH</option>
              </select>
            </div>

            <hr />
          </form>

          <div className="formButtons">
            <button onClick={() => setOpenEditModal((prev) => !prev)}>Cancel</button>
            <button className="submitBtn" onClick={handleTaskUpdate}>
              Update Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 



export default EditModal;
