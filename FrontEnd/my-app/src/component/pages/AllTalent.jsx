import React, { useState } from "react";
import { IoIosTimer } from "react-icons/io";
import Alert from "../Alert";
import { NavLink,useNavigate } from "react-router-dom";

const AllTalent = (props) => {
    const [open, setOpen] = useState(false)
    const [id, setId] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [rating, setRating] = useState("")
    const [file, setFile] = useState('')
    const [delivery, setDelivery] = useState("")
    const [talent, setTalent] = useState({});
    const [update,setUpdate]=useState(false)
      
const freelancerTalent=props.talents.filter((elem)=>{
    return elem.freelancer_id === props.user.id
})

 const navigate = useNavigate()

 const handleNavigate=()=>{
    navigate('/updatetalent')
 }
    return (
        <div className='container-prog'>
            <div className="flex items-center justify-center gap-2 mt-10 ml-6">
                <h3 className='text-3xl font-semibold text-[#181818] mt-10 ml-6'>My Talents</h3>
            </div>
            <div className="talents ml-6 flex p-10">
            <div className="cont-talent-home flex justify-start ml-48 flex-wrap gap-6">
                {freelancerTalent.map((ele, i) =>
                    <div className="talent-card mt-10  rounded-xl cursor-pointer  ml-6" key={i} >
                        <img src={ele.imageUrl} className='w-68 rounded-xl'  ></img>
                        <h5 onClick={()=>{props.talentid(ele.id),navigate('/onetalent')}}  className='p-3 font-semibold  text-[#181818] cursor-pointer hover:text-[#108a00] w-49'>{ele.title.slice(0,50)} . . .  </h5>
                        <div className="price-delivery flex items-center">
                            <IoIosTimer size={28} className='text-[#505050] ml-3' />
                            <h5 className='text-[#505050] font-bold text-sm ml-1 '>{ele.delivery} days delivery</h5>
                            <h5 className='text-[#505050] font-bold text-sm ml-6 '>From {ele.price} TND</h5>
                        </div>
                        <div className=" flex items-center justify-center mt-4 gap-4 ">
                        <button onClick={() =>{ props.change(ele),handleNavigate() }} className="  bg-[#108a00] hover:bg-[#3d9731] text-white font-bold p-1 rounded focus:outline-none focus:shadow-outline">
                                Update</button>
                            <button class=" bg-[#108a00] hover:bg-[#3d9731] text-white font-bold p-1 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => { setOpen(true), setId(ele.id)}}>Delete</button>
                        </div>
                    </div>
        
                )}
            </div>
            </div>
            <Alert open={open} onClose={() => setOpen(false)}>
                <div className="text-center w-56">
                    <div className="mx-auto my-4 w-48">
                        <h3 className="text-lg font-bold text-gray-800">Confirm Delete</h3>
                        <p className="text-sm text-gray-500">
                            Are you sure you want to delete this item?
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => { props.delete(id); setOpen(false); }}
                        >
                            Delete
                        </button>
                        <button
                            className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setOpen(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </Alert>
        
        </div>
    )
}


export default AllTalent