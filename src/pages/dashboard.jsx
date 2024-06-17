import React from 'react'
import { MdDashboard } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaUsers } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import { FaFileShield } from "react-icons/fa6";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { FaShare } from "react-icons/fa";
import { MdDelete } from "react-icons/md";



const list =  [{ name : "OAU reports",imageType : "image File", size : "12mb"},
     { name : "OAU reports",imageType : "PDF File", size : "134kb"}, 
     { name : "OAU reports", imageType : "image File", size : "12mb"},{ name : "OAU reports",imageType : "image File", size : "12mb"},
     { name : "OAU reports",imageType : "PDF File", size : "134kb"}, 
     { name : "OAU reports", imageType : "image File", size : "12mb"}]

const Dashboard = () => {
  return (
    <div className='h-[100vh] w-[100vw] flex'>
      <div className='w-[20vw] pt-20 pl-10 border-r-2 h-full bg-gradient-to-t from-[#FECC48] to-[#010080]'>
<img src="/iconstest.svg"  className='h-16 mb-16' alt='logo'/>
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
      <div className='w-[80vw] bg-[#F1F1F1] pt-10 pl-20'>
        <div className='flex justify-between pr-20'>
        <h3 className='text-2xl font-bold text-[#211A79]'>Welcome Admin</h3>
        <img src='/oaulogo.svg' />
        </div>
        <div className='flex w-full justify-between pr-20 mt-10 font-semibold text-[#211A79]'>
            <div className='bg-white  w-1/6  py-5  rounded-lg drop-shadow-md text-center'>
                <h4>Total MOUs</h4>
                <FaFileShield  className='mx-auto' size={30}/>
                <span className=''>32</span>
            </div>
            <div className='bg-white py-5 w-1/6  rounded-lg drop-shadow-md text-center'>
                <h4>Total Users</h4>
                <FaUserFriends   className='mx-auto' size={30}/>
                <span className=''>32</span>
            </div>
            <div className='bg-white  py-5 w-1/6   rounded-lg drop-shadow-md text-center'>
                <h4>New User request</h4>
                <FaComputer  className='mx-auto' size={30}/>
                <span className=''>32</span>
            </div>
            <div className='text-white  py-5 w-1/4 bg-[#211A79] hover:cursor-pointer hover:bg-white
            hover:text-[#211A79] hover:border-2 hover:border-[#211A79]  rounded-lg drop-shadow-md text-center'>

                <FaCloudUploadAlt  className='mx-auto mt-3' size={30}/>
                <span className=''>Upload MOU</span>
            </div>
        </div>
        <div className='mt-10 h-72 overflow-scroll'>
    <h3 className='text-xl mb-4  font-semibold'>Recently Uploaded</h3>
    <div>
        <ul>
            {list.map((listData, idx)=><li key={idx} className='bg-white py-2  px-3 mb-2
            rounded-lg flex justify-between px-4 mr-20'>
                  <FaFileShield size={24} color='#211A79' />
                <span>{listData.name}</span>
                <span>{listData.imageType}</span>
                <span>{listData.size}</span>
            <div className="flex gap-5">
            <div className='text-[#211A79] p-1 border border-[#211A79] rounded-md'>
                <FaShare />
            </div>
            <div className='text-[#211A79] p-1 border border-[#211A79] rounded-md'>
                <MdDelete color='red' />
            </div>
            </div>
            </li>)}
        </ul>
    </div>
</div>
      </div>

    </div>
  )
}

export default Dashboard


