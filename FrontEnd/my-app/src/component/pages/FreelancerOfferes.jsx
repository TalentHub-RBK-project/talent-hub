import React,{useEffect, useState} from 'react'
import axios from 'axios'
import ProfileImage from '../../image/profile.png'
import OrderConfirmation from '../../popups/OrderConfirmation.jsx'

const FreelancerOfferes = (props) => {
    const [offer,setOffer]=useState([])
    const [confirm,setConfirm]=useState(false)
    useEffect(()=>{
        orders()
        
    },[])
    console.log(offer[0]);
    const orders =()=>{
        axios('http://127.0.0.1:5000/api/clienttalent/getAllTalent')
        .then((response)=>setOffer(response.data))
        
        .catch((err)=>console.log(err))
        props.offersNumber(offer.length)
    }
  return (
    <div className=''>
     <div className="tit flex items-center justify-center mt-10">
        <h5 className='text-2xl font-semibold'>Orders</h5>
     </div>
     {offer.map((elem)=>{
        return(
            <div className="offers-content flex items-center justify-center mt-10 ml-3">
            <div className="userInfo w-1/4 flex items-center gap-2">
               <img src={ProfileImage} className='h-14'></img>
               <div className="username">
                   <h5 className='font-bold'>{elem.clients.name}</h5>
                   <h5>Client</h5>
               </div>
            </div>
               <div className="message w-72">
                   <h5 className='font-bold'>{elem.message}</h5>
               </div>
               <div className="elmail w-60">
                   <h5 className='font-bold'>{elem.clients.email}</h5>
               </div>
               <div className="prod-details w-1/5">
                <h5 className='font-semibold'>{elem.talents.title}</h5>
               </div>
               <div className="show-details">
                   <button onClick={()=>setConfirm(true)} className='bg-[#108a00] ml-6 p-2 text-[#fff] rounded-lg' type="button">Confirm</button>
               </div>
            </div>
        )
    })}
    <div className="confirm-order fixed flex items-center justify-center">
       <div className="">
       {confirm && <OrderConfirmation className=''/>} 

       </div>
    </div>
    </div>

  )
}

export default FreelancerOfferes