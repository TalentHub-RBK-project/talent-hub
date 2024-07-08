import React from 'react';
import { IoIosTimer } from "react-icons/io";
import Profile from '../../image/profile.png'

const SearchTalent = (props) => {
  const filtredTalent= props.talents.filter((elem)=>{
    return elem.title.toLowerCase().includes(props.searchVal.toLowerCase())
})
  return (
    <div className="talents">
    <h3 className='text-3xl font-bold text-[#181818] mt-10 flex items-center justify-center '>Results for "{props.searchVal}" </h3>
    <div className=" flex gap-4 ml-10">
    {filtredTalent.map((ele)=>{
        return (
          <div className="talent-card mt-10 max-w-64 rounded-xl cursor-pointer" onClick={()=>{props.oneTalent(ele.id),navigate('/onetalent'),props.setOneTalent(ele)}}>
          <img src={ele.imageUrl} className='w-64 rounded-xl'></img>
          <h5 className='p-3 font-semibold text-[#181818] cursor-pointer hover:text-[#108a00]'>{ele.title.slice(0,50)}</h5>
          <div className="price-delivery flex items-center">
          <IoIosTimer size={28} className='text-[#505050] ml-3'/>
          <h5 className='text-[#505050] font-bold text-sm ml-1 '>{ele.delivery} days delivery</h5>
          <h5 className='text-[#505050] font-bold text-sm ml-6 '>From {ele.price} TND</h5>
          </div>
          <div className="profile flex items-center ">
              <img src={Profile} className='w-14 h-14 mt-6' />
              <h5 className='mt-6 ml-1 font-semibold text-sm text-[#181818]'>{ele.freelancer.name}</h5>
              <h5 className='mt-6 ml-8 font-semibold p-1'>⭐ {ele.rating}</h5>
          </div>
      </div>
        )
    })}
    </div>
    </div>

  );
}

export default SearchTalent;