import React from 'react'
import { MdDashboard } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaUsers } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa";

const files = [{username : "OAU - Brazil", email :"adewaletest@gmailcom"}]

const Request = () => {
  return (
    <div className='h-[100vh] relative w-[100vw] lg:flex'>
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
                <Link to="/users" className='flex text-white gap-2'>
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
                <Link className='flex text-white gap-2'>
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
      <div className='lg:pl-14 lg:pt-3 bg-[#F1F1F1] w-[100vw] h-[92vh] no-scrollbar overflow-auto  lg:w-[80vw]'>
        <img src='oaulogo.svg'  className='ml-auto mr-20 hidden '/>
        <div className='w-[100vw] z-20 lg:hidden  fixed  bottom-0 bg-gradient-to-t py-3 rounded-t-lg from-[#FECC48]
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
      <div className='flex gap-2  lg:justify-between px-4 py-4 lg:p-0  lg:pr-20 bg-gradient-to-r from-[#FECC48]
       to-[#010080] lg:bg-none'>
        <h3 className='lg:text-2xl font-bold mt-4 text-base text-white lg:mt-0 lg:text-[#211A79]'>Welcome Admin <br/> Biola James</h3>
        <img src='/oaulogo.svg' className='w-12 ml-auto' />
        </div>
          
          
            <div className='flex ml-6 mt-10 gap-8 flex-wrap  h-[38rem] lg:h-[28rem] no-scrollbar overflow-auto'>
               {files.map((file,idx)=> 
               <div className='text-center p-4 w-fit bg-white drop-shadow-md h-fit'>
                <img src='iconstest.svg' className='h-16 mx-auto'/>
                <h3 className='font-semibold text-center'>Adewale Adeaga </h3>
                <div className='flex gap-3  w-fit mx-auto'>
                    <button className='px-4 py-2 bg-green-600 text-white'>Approve</button>
                    <button className='px-4 py-2 bg-red-600 text-white'>Reject</button>
                </div>
               </div>)}
            </div>
      </div>

    </div>
  )
}

export default Request 

