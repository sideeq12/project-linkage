import React from 'react'
import CreateAcc from '../components/createAcc'
function CreateAccount() {
  return (
    <div className='bg-gradient-to-t relative h-screen w-screen 
     flex flex-col xl:flex-row from-[#C09A58] to-[#010080]'>
      <div className='w-full xl:w-[34vw] text-center pt-10 xl:pt-20'> 
         <img src='OAU_linkage.png' className='w-[80%] mx-auto' />
         <h3 className='text-white font-semibold text-5xl'>LINKAGE</h3></div>
      <div className='w-full xl:w-[65vw] top-60 xl:top-0 flex flex-col justify-center align-middle
       absolute xl:relative xl:ml-auto bg-white rounded-tl-xl 
      xl:rounded-tr-none xl:rounded-bl-xl  h-full pt-14 px-4 xl:px-14'>
      
      <h3 className='font-bold  text-2xl'>Create Account.</h3>
     <CreateAcc />
      </div>
    </div>
  )
}

export default CreateAccount
