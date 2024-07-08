import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'


const Apply = (props) => {
    const [message,setMessage] =useState('')
    const navigate = useNavigate()
   const apply ={
    clientId:props.user.id,
    talentId:props.oneTalent.id,
    message:message
   }
    const handleApply=(applyModel)=>{
     axios.post('http://127.0.0.1:5000/api/clienttalent/add',applyModel)
     .then(()=>navigate('/create-succ'))
     .catch((error)=>console.log(error))
    }
  return (
    <div className='apply p-6 flex gap-52'>
        <div className="">
        <div className="tit-apply flex text-4xl font-bold mt-10 ml-14">
         <h5>Send an offer</h5>
        </div>
        <div className="notice flex mt-10 ml-14 bg-slate-100 p-2 rounded-lg font-medium  ">
            <h5 className='text-sm'> 👋 Did you know? You can send up to 10 offers a day.</h5>
        </div>
        <div className="apply-container">
         <div className="contact-form">
            <div className="form-tit">
                <h5 className='text-3xl font-semibold ml-14 mt-10'>Job details</h5>
            </div>
            <div className="client-hire mt-10 ml-14 flex items-start flex-col gap-2">
                <h5 className='font-semibold'>Hiring team</h5>
                <h5 className='border w-44 p-1.5 rounded-lg'>{props.user.name}</h5>
            </div>
            <div className="message flex flex-col mt-10 ml-14 gap-2">
                <h5 className='font-semibold'>Contract title</h5>
                <input type="text" onChange={(e)=>setMessage(e.target.value)} className='border rounded-lg w-96 p-1.5' placeholder='Leave a message' />
            </div>
         </div>
        </div>
        </div>
        <div className="talent-details ">
            <div className="tit-talent flex">
                <img src={props.oneTalent.imageUrl} className='h-20 rounded-lg mt-12'></img>
                <h5 className='text-2xl font-semibold ml-14 mt-10'>You will get {props.oneTalent.title}</h5>
            </div>
            <div className="details ml-14 mt-8 flex flex-col gap-3">
                <div className="price flex gap-44">
                <h5>Starter Tier</h5>
                <h5>{props.oneTalent.price} TND</h5>
                </div>
                <div className="delivery flex gap-40">
                <h5>Delivery Time</h5>
                <h5 className='ml-3'>{props.oneTalent.delivery} days</h5>
                </div>
                <div className="rev-num flex gap-24">
                <h5>Number of Revisions</h5>
                 <h5>Unlimited</h5>
                </div>
                <div className=" flex gap-32">
                <h5>Design Customization</h5>
                <h5>✅</h5>
                </div>
                <div className="flex gap-40">
                <h5>Content Upload</h5>
                <h5 className='ml-3'>✅</h5>
                </div>
                <div className=" flex  gap-56">
                <h5>Source </h5>
                <h5 className='ml-3.5'>✅</h5>
                </div>
                <button onClick={()=>handleApply(apply)} className='bg-[#108a00] mt-4 p-2 text-[#fff] font-semibold rounded-lg cursor-pointer'>Confirm</button>
            </div>
        </div>
        </div>
  )
}

export default Apply