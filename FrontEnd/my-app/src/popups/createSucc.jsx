import React from 'react'
import DoneIcon from '../image/done.png'
import {useNavigate } from 'react-router-dom'

const createSucc = () => {
    const navigate = useNavigate()
const handelNav =()=>{
setTimeout(()=>{
    navigate('/');
},2000)
}
handelNav()
  return (
    
    
        <div className="done-message flex flex-col items-center mt-14 mb-14">
          <img src={DoneIcon} alt="Done" className='done-icon h-28'></img>
          <h5 className="flex items-center justify-center mt-10 font-bold text-2xl">Your Offer has been send successfully!</h5>
        </div>
      
      
      
      
  )
}

export default createSucc