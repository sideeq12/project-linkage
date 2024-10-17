import React, { useState } from 'react'
import { MdDashboard } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaUsers } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import axios from 'axios';
import { FaSearchPlus } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa";
import { useEffect } from 'react';
// import { FaFileContract } from 'react-icons/fa';

const files = []

const MOU = () => {
    const [viewPdf, setPdfView ] = useState(false)
    const [selectedOption, setSelectedOption] = useState('');
    const [allFile, setFiles]= useState(files)
    const [searchFrom, setAllSearch ] = useState([])
    const [params, setParams] = useState('title')
    const [selectedPdf, setSelectedPdf] = useState(null);

    const handlePdfClick = (fileUrl) => {
        setSelectedPdf(fileUrl);
    };

    const handleClose = () => {
        setSelectedPdf(null);
    };
    const truncateTitle = (title, maxLength = 40) => {
      if (title.length > maxLength) {
          return title.substring(0, maxLength) + '...';
      }
      return title;
  };
    const filterChange = (e)=>{
      let data = e.target.value;
      let paramStr = params
      if(paramStr == "collaborators"){
        let upList =searchFrom.filter(file => file[paramStr][0].includes(data)|| file[paramStr][1].includes(data))
        setFiles(upList)
      }if(paramStr == "commencementYear"){
        let yearFix =searchFrom.filter(file => file[paramStr] >= data)
        setFiles(yearFix)
      }else{
        let updated =searchFrom.filter(file => file[paramStr].includes(data))
        setFiles(updated)
      }
    }
    const handleChange = (event) => {
      setSelectedOption(event.target.value);
      setParams(event.target.value)
    };
    const token = JSON.parse(localStorage.getItem('apiResponse')).data.token
    const fetchMou = async () => {  
      try {
        const response = await axios.get('https://linkages-backend.onrender.com/api/v1/memorandums?limit=10', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`
          }
        })
        console.log('Response saved to local storage:', response);
        const result = response.data
        if(result.status == 200){
          setFiles(result.data)
          setAllSearch(result.data)
          console.log(result.data)
        }
    
    } catch (error) {
      console.log("the error",error)
        }
     }
 useEffect(()=>{
  fetchMou()
 },[])
 const PDFViewer = ({ pdfUrl, onClose }) => {
  return (
      <div className='h-screen relative'>
          <iframe
              src={pdfUrl}
              style={{ height: '100%', width: '100%', border: 'none' }}
              title="PDF Preview"
          />
          <div
              className='bg-red-800 text-white py-2 px-6 w-fit rounded-md mx-auto absolute bottom-20 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer'
              onClick={onClose}
          >
              Close
          </div>
      </div>
  );
};
    
  return (
    <div >
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
      <div className='flex gap-2 lg:justify-between px-4 py-4 lg:pt-2   lg:pr-20 bg-gradient-to-r from-[#FECC48]
       to-[#010080] lg:bg-none'>
        <img src="iconstest.jpg" className='w-24 rounded-full'/>
        <h3 className='lg:text-2xl lg:ml-6 font-bold mt-4 text-base text-white lg:mt-0 lg:text-[#211A79]'>Welcome Admin <br/> Biola James</h3>
        <img src='/oaulogo.svg' className='w-12 ml-auto' />
        </div>
            <div className='flex px-4 mt-4 lg:mt-0'>
                <input type="text" placeholder='Search ...'
                onChange={(e)=>{filterChange(e)}}
                 className='outline-none pl-8 border h-12 w-[70%]'/>
                <div className='rounded-md z-40 ml-2 text-black'>
               <div className="relative inline-block text-left">
      <select
        value={selectedOption}
        onChange={handleChange}
        className="block w-full mt-1 rounded-md py-3 px-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >
        <option value="" disabled>
          Filter Option
        </option>
        <option value="title">By title</option>
        <option value="type">By type</option>
        <option value="collaborators">By collaborators</option>
        <option value="commencementYear">By year</option>
        <option value="status">By status</option>
      </select>
    </div>
               </div>
               <div className='bg-white p-4 ml-5 rounded-md hover:text-white
                hover:bg-blue-900 hover:cursor-pointer  text-black'>
               <FaSearch />
               </div>
     
            </div>
            <div className=' ml-6 mt-10 gap-8  h-[38rem] lg:h-[28rem] no-scrollbar overflow-auto'>
         
            <table className="w-11/12 mr-6 border-collapse border bg-white border-gray-200">
                <thead className="bg-black text-white">
                    <tr>
                        <th className="text-left p-4 font-semibold border-b">#</th>
                        <th className="text-left p-4 font-semibold border-b">File</th>
                        <th className="text-left p-4 font-semibold border-b">Title</th>
                        <th className="text-left p-4 font-semibold border-b">Duration</th>
                    
                        <th className="text-left p-4 font-semibold border-b">Status</th>
                    </tr>
                </thead>
              {allFile.length > 1 ?
               <tbody className='text-sm'>
               {allFile.map((file, idx) => (
                   <tr
                       key={idx}
                       onClick={() => handlePdfClick(file.url)}
                       className='cursor-pointer hover:bg-gray-600 hover:text-white'
                   >  <td className="p-2 border-b">{idx + 1}</td>
                     <td className="p-2 border-b text-center">
                           <FaFileContract size={20} className='mx-auto text-[#000]' />
                       </td>
                     
                       <td className="p-2 border-b">{truncateTitle(file.title)}</td>
                       <td className="p-2 border-b">{file.duration} years</td>
                       <td className="p-2 border-b">{file.status} </td>
                       
                   </tr>
               ))}
           </tbody>
            :   <div className='bg-white text-center p-10 w-[100%] mx-auto'>
              <h3>Please wait</h3>
            <img src="/pleasewait.gif" className='w-32 h-12 mx-auto'/>
            </div>}
               
            </table>

            {selectedPdf && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <PDFViewer pdfUrl={selectedPdf} onClose={handleClose} />
                </div>
            )}
            </div></>}
      </div>

    </div>
  )
}



export default MOU


// The gif
