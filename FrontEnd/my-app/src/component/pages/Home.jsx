import React from 'react'
import Slide from '../../image/home-slid.jpg'
import ProgImage from '../../image/coding-language.png'
import DesignImage from '../../image/web-design.png'
import Marketting from '../../image/market-analysis.png'
import Skill from '../../image/skill.jpg'
import { IoIosTimer } from "react-icons/io";
import Profile from '../../image/profile.png'
import { NavLink,useNavigate } from 'react-router-dom'

const Home = (props) => {
    const navigate = useNavigate()

  return (
    <div className='p-4'>
        <div className="top-home flex justify-center mt-14 gap-10">
            <div className="slide-text">
            <h3 className='font-bold text-5xl mt-10 text-[#181818]'>Find the right freelance<br></br> service,<br></br> right away</h3>
             <h3 className='font-bold text-2xl mt-8 text-[#181818]'>Unleash your business potential by hiring <br></br> the right expert for your need.</h3>
             <NavLink to='sign-up-role'>
             <button className='get-started mt-14 bg-[#108a00] p-3 rounded-xl font-medium text-[#fff]' >Get Started</button>
             </NavLink>
            </div>
            <img src={Slide} className='w-96'></img>
        </div>
        <div className="categories flex flex-col items-center justify-center mt-10">
            <h3 className='text-3xl font-bold text-[#181818] mt-10'>Browse talent by category</h3>
            <div className="category-cards flex gap-5">
            <NavLink to='/programming'>
            <div className="prog-category flex flex-col items-center bg-slate-100 mt-10 p-4 text-xl font-medium rounded-xl cursor-pointer" >
                    <img src={ProgImage} className='h-20'></img>
                    <h5  className='mt-5'>Programming & Tech</h5>
                </div>
            </NavLink>
            
            <NavLink to='/graphics'>
                <div className="prog-category flex flex-col items-center bg-slate-100 mt-10 p-4 text-xl font-medium rounded-xl cursor-pointer" >
                    <img src={DesignImage} className='w-20'></img>
                    <h5  className='mt-5'>Graphics & Design</h5>
                </div>
            </NavLink>
            <NavLink to='/digital-marketting'>
                <div className="prog-category flex flex-col items-center bg-slate-100 mt-10 p-4 text-xl font-medium rounded-xl cursor-pointer" >
                    <img src={Marketting} className='w-20'></img>
                    <h5  className='mt-5'>Digital Marketing</h5>
                </div>
            </NavLink>
            </div>
            <div className="talents flex flex-col items-center justify-center">
                <h3 className='text-3xl flex items-center justify-center font-bold text-[#181818] mt-10'>A whole world of freelance talent at your fingertips</h3>
                <div className="cont-talent-home flex justify-start flex-wrap gap-6">
                {props.talent.map((ele)=>{
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
        </div>
    </div>
  )
}

export default Home