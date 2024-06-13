import React from 'react'

const SignChoice = () => {
  return (
    <div className=' bg-grad relative h-screen w-screen 
    flex flex-col xl:flex-row '>
     <div className='w-full xl:w-[34vw] text-center pt-10 xl:pt-20'> 
        <img src='OAU_linkage.png' className='w-40 xl:w-[80%] mx-auto' />
        <h3 className='text-white font-semibold text-2xl xl:text-5xl'>LINKAGES</h3></div>
     <div className='w-full xl:w-[65vw] top-60 xl:top-0 flex flex-col justify-center align-middle
      absolute xl:relative xl:ml-auto bg-white rounded-tl-xl 
     xl:rounded-tr-none xl:rounded-bl-xl h-[40rem] xl:h-full pt-10 px-4 xl:px-14'>
<div className='flex flex-col gap-y-8 justify-center text-center align-middle'>
            <h3 className='font-bold  text-2xl'>Sign in as.</h3>
<div className='flex flex-col font-semibold gap-y-8 mx-auto w-[60%]'>
<a href="/create" className='py-3 rounded-2xl  bg-[#010080] w-full text-center text-white'>Admin</a>
<a href="/create" className='py-3 rounded-2xl text-center w-full text-[#010080] border border-[#010080]'>User</a>
</div>
   <div className=''>Don’t have an account? <a href="/login" className='font-semibold text-[#010080]'>Sign up.</a> </div>
  
    </div>
     </div>
   </div>
    
  )
}

export default SignChoice
