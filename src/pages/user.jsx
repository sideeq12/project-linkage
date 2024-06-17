import React from 'react'
import { MdDashboard } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaUsers } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";



const divsArray = Array.from({ length: 20 });


const Users = () => {
  return (
    <div className='h-[100vh] w-[100vw] flex'>
      <div className='w-[20vw] pt-20 pl-10 border-r-2 h-full bg-gradient-to-t from-[#FECC48] to-[#010080]'>
<img src="iconstest.svg"  className='h-2\16 mb-16' />
    <div className='mt-4'>
        <ul className='flex flex-col space-y-3 text-sm'>
            <li>
                <Link to="/dashboard" className='flex text-white gap-2'>
                <MdDashboard  size={24} color='#fff'/>
                <span>Dashboard</span>
                </Link>
            </li>
            <li>
                <Link to="" className='flex text-white gap-2'>
                <FaUsers  size={24} color='#fff'/>
                <span>Users</span>
                </Link>
            </li>
            <li>
                <Link to="/mou" className='flex text-white gap-2'>
                <FaDatabase  size={24} color='#fff'/>
                <span>MOU's</span>
                </Link>
            </li>
        </ul>
    </div>
    <div className='mt-32'>
        <ul className='flex flex-col space-y-3 text-sm'>
        
            <li>
                <Link  className='flex text-white gap-2'>
                <IoMdSettings  size={24} color='#fff'/>
                <span>Setting</span>
                </Link>
            </li>
            <li>
                <Link className='flex text-white gap-2'>
                <FaSignOutAlt  size={24} color='#fff'/>
                <span>Sign out</span>
                </Link>
            </li>
        </ul>
    </div>
      </div>
      <div className='pl-14 pt-3 bg-[#F1F1F1] w-[80vw] overflow-hidden'>
        
      <img src='oaulogo.svg'  className='ml-auto mr-20'/>
    <div className='flex flex-wrap  gap-8 h-[34rem] overflow-auto  no-scrollbar '>
    {divsArray.map((_, index) => (
        <div key={index} className="text-[#010080]  hover:cursor-pointer hover:bg-[#010080] hover:text-white  p-10  bg-white rounded-xl">
            <img src="iconstest.svg"  className='auto h-20 mb-2 mx-auto'/>
            <span className='font-semibold'>Adewale James</span>
        </div>
      ))}
    </div>
      </div>
    
    </div>
  )
}

export default Users


