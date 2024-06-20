import React, { useState } from 'react'
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
    const [viewPdf, setPdfView ] = useState(false)


    const PDFViewer = () => {
        return (
        <div className='h-screen relative'>
              <iframe
            src="/mou.pdf"
            style={{ height: '100%', width: '100%', border: 'none' }}
            title="PDF Preview"
          />
          <div className='bg-red-800 text-white py-2 px-6 
          w-fit rounded-md mx-[45%] absolute bottom-20 z-50' onClick={()=>{setPdfView(false)}}>close</div>
        </div>
        );
       };
    
  return (
    <div className='h-[100vh] relative w-[100vw] lg:flex'>
      <div className='w-[20vw] hidden lg:block pt-20 pl-10 border-r-2 h-full bg-gradient-to-t from-[#FECC48] to-[#010080]'>
<img src="iconstest.jpg"  className='h-20 rounded-full w-20 mb-16' />
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
    {viewPdf ? <PDFViewer /> :
     <>
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
      <div className='flex gap-2 lg:justify-between px-4 py-4 lg:py-10   lg:pr-20 bg-gradient-to-r from-[#FECC48]
       to-[#010080] lg:bg-none'>
        <img src="iconstest.jpg" className='w-24 rounded-full'/>
        <h3 className='lg:text-2xl lg:ml-6 font-bold mt-4 text-base text-white lg:mt-0 lg:text-[#211A79]'>Welcome Admin <br/> Biola James</h3>
        <img src='/oaulogo.svg' className='w-12 ml-auto' />
        </div>
            <div className='flex px-4 mt-4 lg:mt-0'>
                <input type="text" placeholder='Search ...' className='outline-none pl-8 border h-12 w-[70%]'/>
               <div className='bg-white p-4 ml-5 rounded-md  text-black'>
               <FaSearch  />
               </div>
               <div className='bg-white p-4 rounded-md  ml-6 text-black'>
                <FaSearchPlus />
               </div>
            </div>
            <div className='flex ml-6 mt-10 gap-8 flex-wrap  h-[38rem] lg:h-[28rem] no-scrollbar overflow-auto'>
               {files.map((file,idx)=> <div  onClick={()=>{setPdfView(true)}} className='text-center'>
                <div className='drop-shadow-lg p-6 lg:p-16 bg-white text-[#010080] hover:bg-[#010080]
                hover:cursor-pointer hover:text-white'>
                    <FaFileContract size={40} />
                </div>
                <span className='font-semibold text-center mt-2 text-sm'>{file.filesname}</span>
               </div>)}
            </div></>}
      </div>

    </div>
  )
}



export default MOU


