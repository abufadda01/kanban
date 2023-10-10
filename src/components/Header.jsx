import React, { useState } from 'react'

const Header = ({text , bg , count , name , tasksToMap , filterByDate , sort , setSort}) => {

  const btnStyle = { marginLeft : "10px" , position :"absolute" , left : -5 , borderRadius : "50%" , padding : "5px" , fontSize : "25px" }

  return (
    <div className={`${bg} flex items-center justify-center h-16 p-5 text-xl rounded-sm text-white uppercase relative`}>
        {text} <span className='ml-2 text-sm bg-white px-2 w-8 rounded-full flex justify-center items-center text-black'>{count}</span>
        
        <button style={btnStyle} onClick={() => setSort((prev) => !prev)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
        </svg>
        </button>

    </div>
  )
}

export default Header