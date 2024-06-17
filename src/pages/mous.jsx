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

const files = [{filesname : "OAU - Brazil"}, {filesname : "OAU - Brazil"}, {filesname : "OAU - Brazil"}, {filesname : "OAU - Brazil"},{filesname : "OAU - Brazil"},
     {filesname : "OAU - Brazil"}, {filesname : "OAU - Brazil"}, {filesname : "OAU - Brazil"},{filesname : "OAU - Brazil"}, {filesname : "OAU - Brazil"}, {filesname : "OAU - Brazil"}, {filesname : "OAU - Brazil"},{filesname : "OAU - Brazil"},
     {filesname : "OAU - Brazil"}, {filesname : "OAU - Brazil"}, {filesname : "OAU - Brazil"}]

const MOU = () => {
  return (
    <div className='h-[100vh] w-[100vw] flex'>
      <div className='w-[20vw] pt-20 pl-10 border-r-2 h-full bg-gradient-to-t from-[#FECC48] to-[#010080]'>
<img src="iconstest.svg"  className='h-2\16 mb-16' />
    <div className='mt-4'>
        <ul className='flex flex-col space-y-3 text-sm'>
            <li>
                <Link className='flex text-white gap-2'>
                <MdDashboard  size={24} color='#fff'/>
                <span>Dashboard</span>
                </Link>
            </li>
            <li>
                <Link className='flex text-white gap-2'>
                <FaUsers  size={24} color='#fff'/>
                <span>Users</span>
                </Link>
            </li>
            <li>
                <Link className='flex text-white gap-2'>
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
      <div className='pl-14 pt-3 bg-[#F1F1F1] w-[80vw] overflow-hidden'>
        <img src='oaulogo.svg'  className='ml-auto mr-20'/>
            <div className='flex'>
                <input type="text" placeholder='Search ...' className='outline-none pl-8 border h-12 w-[70%]'/>
               <div className='bg-white p-4 ml-5 rounded-md  text-black'>
               <FaSearch  />
               </div>
               <div className='bg-white p-4 rounded-md  ml-6 text-black'>
                <FaSearchPlus />
               </div>
            </div>
            <div className='flex mt-10 gap-8 flex-wrap h-[28rem] no-scrollbar overflow-auto'>
               {files.map((file,idx)=> <div className='text-center'>
                <div className='drop-shadow-lg p-16 bg-white text-[#010080] hover:bg-[#010080]
                hover:cursor-pointer hover:text-white'>
                    <FaFileContract size={40} />
                </div>
                <span className='font-semibold text-center mt-2 text-sm'>{file.filesname}</span>
               </div>)}
            </div>
      </div>

    </div>
  )
}

export default MOU


