import React, { useState } from 'react'
import { MdDashboard } from "react-icons/md";
import { Link, Navigate, useNavigate } from 'react-router-dom';
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
     { name : "OAU reports", imageType : "image File", size : "12mb"},{ name : "OAU reports",imageType : "image File", size : "12mb"},
     { name : "OAU reports",imageType : "PDF File", size : "134kb"}, 
     { name : "OAU reports", imageType : "image File", size : "12mb"},{ name : "OAU reports",imageType : "image File", size : "12mb"},
     { name : "OAU reports",imageType : "PDF File", size : "134kb"}, 
     { name : "OAU reports", imageType : "image File", size : "12mb"}]

const Dashboard = () => {
    const navigate = useNavigate()
    const [view, setUploadview] = useState(false)
  return (
    <div className='h-[100vh] w-[100vw] overflow-hidden relative lg:flex'>
      <div className='w-[20vw] hidden lg:block pt-20 pl-10 border-r-2 h-full bg-gradient-to-t from-[#FECC48]
       to-[#010080]'>
<img src="/iconstest.svg"  className='h-16 mb-16' alt='logo'/>
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
      <div className='w-[100vw] lg:hidden fixed z-20 bottom-0 bg-gradient-to-t py-3 rounded-t-lg from-[#FECC48]
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
      <div className='w-full lg:w-[80vw] bg-[#F1F1F1] h-[92vh] lg:h-full no-scrollbar overflow-auto  lg:pt-10 lg:pl-20'>
    { view ? <Upload /> : <>
        <div className='flex gap-2 lg:justify-between px-4 py-4 lg:p-0  lg:pr-20 bg-gradient-to-r from-[#FECC48]
       to-[#010080] lg:bg-none'>
        <img src="iconstest.svg" className='w-24'/>
        <h3 className='lg:text-2xl font-bold mt-4 text-base text-white lg:mt-0 lg:text-[#211A79]'>Welcome Admin <br/> Biola James</h3>
        <img src='/oaulogo.svg' className='w-12 ml-auto' />
        </div>
        <div className='flex w-full flex-wrap 
        gap-10 justify-center lg:justify-between pr-4 lg:pr-20 mt-10 font-semibold text-[#211A79]'>
            <div  className='bg-white w-1/3 py-2  lg:w-1/6 text-sm lg:text-base  lg:py-5  rounded-lg drop-shadow-md text-center'>
                <h4>Total MOUs</h4>
                <FaFileShield  className='mx-auto' size={30}/>
                <span className=''>32</span>
            </div>
            <div onClick={()=>{navigate("/users")}} className='hover:cursor-pointer  bg-white w-1/3 lg:py-5 lg:w-1/6  rounded-lg drop-shadow-md text-center'>
                <h4>Total Users</h4>
                <FaUserFriends   className='mx-auto' size={30}/>
                <span className=''>32</span>
            </div>
            <div onClick={()=>{navigate("/request")}}  className='hover:cursor-pointer bg-white w-1/3 px-2 lg:py-5 lg:w-1/6   rounded-lg drop-shadow-md text-center'>
                <h4>New User request</h4>
                <FaComputer  className='mx-auto' size={30}/>
                <span className=''>32</span>
            </div>
            <div onClick={()=>{setUploadview(!view)}} className='text-white w-1/3 lg:py-5 lg:w-1/4 bg-[#211A79] hover:cursor-pointer hover:bg-white
            hover:text-[#211A79] hover:border-2 hover:border-[#211A79]  rounded-lg drop-shadow-md text-center'>

                <FaCloudUploadAlt  className='mx-auto mt-3' size={30}/>
                <span className=''>Upload MOU</span>
            </div>
        </div>
        <div className='mt-10 '>
    <h3 className='text-xl mb-4 ml-4 font-semibold'>Recently Uploaded</h3>
    <div className=' lg:h-64 '>
        <ul>
            {list.map((listData, idx)=><li key={idx} className='bg-white py-2  px-3 mb-2
            rounded-lg flex justify-between mx-4 lg:mr-20'>
                  <FaFileShield size={24} color='#211A79' />
                <span>{listData.name}</span>
                <span>{listData.imageType}</span>
                <span>{listData.size}</span>
            <div className="flex gap-5">
            <div className='text-[#211A79] p-1 border hover:cursor-pointer border-[#211A79] rounded-md'>
                <FaShare />
            </div>
            <div className='text-[#211A79] p-1 border hover:cursor-pointer border-[#211A79] rounded-md'>
                <MdDelete color='red' />
            </div>
            </div>
            </li>)}
        </ul>
    </div>
</div>
</>}
      </div>

    </div>
  )
}

export default Dashboard



const Upload = () =>{
    return(
        <div className='pt-4 w-fit mx-auto lg:mx-0 border'>
            <div className='bg-[#211A79] text-white p-10 mx-auto lg:mx-0 w-fit'>
                <input type="file" placeholder='upload file'/>
            </div>
            <div>
                <form className='flex flex-wrap gap-8 mt-10 mx-auto lg:mx-0 font-semibold w-5/6'>
                    <div>
                        <label for="title" className='text-sm  mb-2'>Title</label>  <br />
                    <input type='text' placeholder=''  className='border outline-none w-80 h-10'/>
                    </div>
                    <div>
                        <label for="title" className='text-sm  mb-2'>Collaboration Partner</label>  <br />
                    <input type='text' placeholder=''  className='border outline-none w-80 h-10'/>
                    </div>
                    <div>
                        <label for="title" className='text-sm  mb-2'>Year of commencement</label>  <br />
                    <input type='text' placeholder=''  className='border outline-none w-80 h-10'/>
                    </div>
                    <div>
                        <label for="title" className='text-sm  mb-2'>Types of Linkage</label>  <br />
                    <input type='text' placeholder=''  className='border outline-none w-80 h-10'/>
                    </div>
                    <div>
                        <label for="title" className='text-sm  mb-2'>Status</label>  <br />
                    <input type='text' placeholder=''  className='border outline-none w-80 h-10'/>
                    </div>
                    <div>
                        <label for="title" className='text-sm  mb-2'>Duation</label>  <br />
                    <input type='text' placeholder=''  className='border outline-none w-80 h-10'/>
                    </div>
                    <button className='border-0 rounded-none mx-auto lg:mx-0 text-white w-[80%] py-3  bg-[#211A79]' type='submit' >Submit</button>
                </form>
            </div>
        </div>
    )
}