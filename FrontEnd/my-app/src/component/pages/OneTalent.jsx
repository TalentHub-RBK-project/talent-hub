import React, { useEffect, useState } from 'react';
import { IoIosTimer } from "react-icons/io";
import Profile from '../../image/profile.png';
import axios from 'axios';
import { RiSecurePaymentLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom'


const OneTalent = (props) => {
    const [talent, setTalent] = useState({});
  const navigate = useNavigate()
  console.log(talent);
    
    const getOneTalent = async (id) => {
        try {
            const result = await axios.get(`http://127.0.0.1:5000/api/talents/getAll/${id}`);
            setTalent(result.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getOneTalent(props.talentid);  
    }, []);

    const handleNavigate=()=>{
        navigate(`/apply-talent`)
    }

    return (
        <div className='container '> 
        <div className="price-box fixed flex flex-col w-1/3 p-6 border border-gray-300 rounded-lg  bg-white ml-4">
                        <div className="price-info">
                            <div className="price flex gap-56">
                            <h5 className='text-[#181818] font-bold text-2xl mb-4'>Price:</h5>
                            <h5 className='text-[#108a00] font-bold text-2xl mb-4'>{talent.price} TND</h5>
                            </div>
                            <div className=" flex items-center mt-3">
                            <IoIosTimer size={45} className='mr-2' />
                                <div className="">
                                <h5 className='font-semibold'>{talent.delivery} days delivery — Jul 10, 2024</h5>
                                <h5 className='text-sm mt-2 '>Revisions may occur after this date.</h5>
                                </div>
                            </div>
                        </div>
                        <button onClick={()=>handleNavigate()} className='bg-[#108a00] mt-4 text-white font-bold py-2 px-4 rounded '>
                            Apply {talent.price} TND
                        </button>
                    </div>
                    <div className="sercure flex gap-2 fixed">
                    <RiSecurePaymentLine size={52}/>
                    <div className="">
                        <h5 className='font-bold'>Upwork Payment Protection</h5>
                        <h5>Fund the project upfront. {props.user.name} gets paid<br></br> once you are satisfied with the work.</h5>
                    </div>
                    </div>
            <div className='container-details flex flex-col p-14 '>
                <div className="title-one-talent flex gap-2 mb-6 ">
                    <h1 className='text-3xl font-bold text-[#181818]'>You will get a {talent.title}</h1>
                </div>
                <div className="profile flex items-center mb-6">
                    <img src={Profile} className='w-12 h-12 rounded-full' alt="Profile" />
                     <div className='ml-2 flex gap-10'>
                                <h5 className='font-semibold text-[#181818]'>Freelancer: {props.user.name}</h5>
                                <h5 className='font-semibold text-[#181818]'>⭐ {talent.rating}.0 </h5>
                                <h5 className='font-semibold text-[#181818]'> 🔝​ Top Rated </h5>
                            </div>
                        </div>
                <div className="details-wrapper flex flex-col w-full max-w-4xl">
                    <div className="image">
                        <img src={talent.imageUrl} className='w-10/12 rounded-lg shadow-lg' alt="Profile" />
                    </div>
                    <div className="details-content w-10/12 mt-14">
                        <h2 className='text-2xl font-semibold text-[#181818] mb-4'>Project details</h2>
                        <p className='text-[#363636] font-medium mb-6'>
                            {talent.description}
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default OneTalent;
