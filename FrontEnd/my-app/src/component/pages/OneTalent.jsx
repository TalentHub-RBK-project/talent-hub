import React, { useEffect, useState } from 'react';
import { IoIosTimer } from "react-icons/io";
import Profile from '../../image/profile.png';
import axios from 'axios';

const OneTalent = (props) => {
    const [talent, setTalent] = useState({});
console.log(props);
    
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
    }, [props.talentid]);

    return (
        <div className='container flex flex-col items-center mt-20 min-h-screen'>
            <div className='container-details flex flex-col items-center mb-20 w-full'>
                <div className="title flex items-center justify-center gap-2 mb-6">
                    <h1 className='text-3xl font-bold text-[#181818]'>{talent.title}</h1>
                </div>
                <div className="details-wrapper flex w-full max-w-4xl">
                    <div className="details-content p-6 border border-gray-300 rounded-lg shadow-lg bg-white w-3/4">
                        <div className="profile flex items-center mb-6">
                            <img src={Profile} className='w-16 h-16 rounded-full' alt="Profile" />
                            <div className='ml-2 flex gap-3'>
                                <h5 className='font-semibold text-[#181818]'>name:{talent.name}</h5>
                                <h5 className='font-semibold text-[#181818]'>rating:тнР {talent.rating}</h5>
                            </div>
                        </div>
                        <h2 className='text-2xl font-semibold text-[#181818] mb-4'>description:{talent.title}</h2>
                        <p className='text-[#505050] mb-6'>
                            {talent.description}
                        </p>
                    </div>
                    <div className="price-box flex flex-col justify-between items-center w-1/4 p-6 border border-gray-300 rounded-lg shadow-lg bg-white ml-4">
                        <div className="price-info text-center">
                            <h5 className='text-[#181818] font-bold text-2xl mb-4'>Price: ${talent.price}</h5>
                            <div className="delivery-info flex items-center justify-center text-[#505050] mb-4">
                                <IoIosTimer size={28} className='mr-2' />
                                <h5 className='font-bold text-sm'>Estimated Delivery: {talent.delivery} days</h5>
                            </div>
                        </div>
                        <button className='bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-200'>
                            Apply
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneTalent;
