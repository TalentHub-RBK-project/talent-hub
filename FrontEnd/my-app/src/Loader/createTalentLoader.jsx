import React ,{useState} from "react";
import DoneIcon from '../image/done.png'
import {useNavigate } from 'react-router-dom'


const createTalentLoader = () => {
    const [complete,setComplete] =useState(false);
    const navigate = useNavigate()
    const handleComleted=()=>{
        setTimeout(()=>{
            setComplete(true);
            navigate('/create-succ');
        },3000)
    }
    handleComleted()
  return (
    <div className=" flex flex-col items-center mt-20 mb-20">
      {!complete && 
      <>
      <div className="loader">
        <div class="banter-loader">
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
        </div>
      </div>
      <div className="message">
        <h5 className="flex items-center justify-center mt-10 font-bold text-2xl">We're prepering your Talent</h5>
      </div>
      </>
      }
      {complete&& 
      <>
      <div className="done-message flex flex-col items-center">
        <img src={DoneIcon} alt="Done" className='done-icon h-28'></img>
        <h5 className="flex items-center justify-center mt-10 font-bold text-2xl">Your Talent has been created successfully!</h5>
      </div>
    
    </>
    
    }
    </div>
  );
};

export default createTalentLoader;
