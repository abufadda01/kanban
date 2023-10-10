import React, { useEffect, useState } from 'react'
import Column from './Column'


const ListTasks = ({tasks , setTasks , setOpenEditModal , openEditModal}) => {

  const [todos , setTodos] = useState([])
  const [inProgress , setInProgress] = useState([])
  const [done , setDone] = useState([])

  const [sort , setSort] = useState(false)



  useEffect(() => {

      const filteredTodos = tasks ? tasks.filter((task) => task.status === "todo") : []  
      const filteredInProgress = tasks ? tasks.filter((task) => task.status === "inProgress") : [] 
      const filteredDone = tasks ? tasks.filter((task) => task.status === "done") : [] 

      setTodos(filteredTodos)
      setInProgress(filteredInProgress)
      setDone(filteredDone)
 
    } , [tasks])
    
    
  const statusTypes = ["todo" , "inProgress" , "done"]


  return (
    <div className='flex flex-col xl:flex-wrap lg:flex-row lg:flex-wrap md:flex-wrap md:flex-1 md:flex-grow-1 items-center gap-56'>
      {statusTypes && statusTypes.map((status , index) => {
        return (
          <Column 
            key={index}
            index={index}
            status={status} 
            tasks={tasks} 
            setTasks={setTasks} 
            todos={todos} 
            inProgress={inProgress} 
            done={done}
            openEditModal={openEditModal}
            setOpenEditModal={setOpenEditModal}
            sort={sort}
            setSort={setSort}
            />
        )
      })}
    </div>
  )
}


export default ListTasks