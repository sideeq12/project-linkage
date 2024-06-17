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
    <div className='h-[100vh] w-[100vw] relative lg:flex'>
      <div className='w-[20vw] hidden lg:block pt-20 pl-10 border-r-2 h-full bg-gradient-to-t from-[#FECC48] to-[#010080]'>
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
      <div className='w-[100vw] mb-10 z-20 lg:hidden  fixed  bottom-0 bg-gradient-to-t py-3 rounded-t-lg from-[#FECC48]
       to-[#010080]'>

<ul className='flex w-full justify-around text-center  text-sm'>
            <li>
                <Link to="/dashboard" className=' text-white gap-2'>
                <MdDashboard  size={24} color='#fff'  className='mx-auto' />
                <span>Dashboard</span>
                </Link>
            </li>
            <li>
                <Link to="/users" className=' text-white gap-2'>
                <FaUsers  size={24} color='#fff'  className='mx-auto' />
                <span>Users</span>
                </Link>
            </li>
            <li>
                <Link to="/mou" className=' text-white gap-2'>
                <FaDatabase  size={24} color='#fff'  className='mx-auto' />
                <span>MOU's</span>
                </Link>
            </li>
            <li>
                <Link to="/mou" className=' text-white gap-2'>
                <IoMdSettings  size={24} color='#fff' className='mx-auto' />
                <span>Setting</span>
                </Link>
            </li>
            <li>
                <Link to="/mou" className=' text-white gap-2'>
                <FaDatabase  size={24} color='#fff'  className='mx-auto' />
                <span>MOU's</span>
                </Link>
            </li>
        </ul>
      </div>
      <div className='lg:pl-14 lg:pt-3 bg-[#F1F1F1] h-full w-full lg:w-[80vw] overflow-hidden'>
      <div className='flex gap-2 lg:justify-between px-4 py-4 lg:p-0  lg:pr-20 bg-gradient-to-r from-[#FECC48]
       to-[#010080] lg:bg-none'>
        <img src="iconstest.svg" className='w-24'/>
        <h3 className='lg:text-2xl font-bold mt-4 text-base text-white lg:mt-0 lg:text-[#211A79]'>Welcome Admin <br/> Biola James</h3>
        <img src='/oaulogo.svg' className='w-12 ml-auto' />
        </div>
      <img src='oaulogo.svg'  className='ml-auto mr-20  hidden lg:block'/>
      <div className='ml-4 text-xl font-bold mt-10  mb-2'>List of Users</div>
    <div className=' grid grid-cols-3 px-4 text-center lg:flex lg:flex-wrap gap-4 lg:gap-8 h-[40rem] lg:h-[34rem] overflow-auto  no-scrollbar '>
    {divsArray.map((_, index) => (
        <div key={index} className="text-[#010080]  hover:cursor-pointer
         hover:bg-[#010080] hover:text-white p-2 lg:p-10  bg-white rounded-xl">
            <img src="iconstest.svg"  className='auto h-10 lg:h-20 mb-2 mx-auto'/>
            <span className='font-semibold'>Adewale James</span>
        </div>
      ))}
    </div>
      </div>
    
    </div>
  )
}

export default Users


