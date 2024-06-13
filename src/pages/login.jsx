import React, { useState } from 'react'



function Login() {
  const [segmentDisplay, setDisplay] = useState({
    login : false, createAccount : false, SignChoice : true, forgotPassword : false , verify : false
  })
  return (
    <div className=' bg-grad relative h-screen w-screen 
     flex flex-col xl:flex-row '>
      <div className='w-full xl:w-[34vw] text-center pt-10 xl:pt-20'> 
         <img src='OAU_linkage.png' className='w-40 xl:w-[80%] mx-auto' />
         <h3 className='text-white font-semibold text-2xl xl:text-5xl'>LINKAGES</h3></div>
      <div className='w-full xl:w-[65vw] top-60 xl:top-0 flex flex-col justify-center align-middle
       absolute xl:relative xl:ml-auto bg-white rounded-tl-xl 
      xl:rounded-tr-none xl:rounded-bl-xl h-[40rem] xl:h-full pt-10 px-4 xl:px-14'>
    <div>
        <>
         
        <h3 className='font-bold  text-2xl mx-auto w-fit'>Sign in.</h3>
   <form className='mt-10 mx-auto flex flex-wrap gap-8 w-[87%]'>
    
    <div className='border border-[#9999999f] relative w-full flex flex-col rounded-md   '>
      <label className='absolute bg-white p-1 rounded-lg -top-5 left-2'>Email Adresse</label>
      <input type='text' placeholder='' className='outline-none h-12 pl-4'  />
    </div>
    <div className='border border-[#9999999f] relative  flex w-full flex-col rounded-md   '>
      <label className='absolute bg-white p-1 rounded-lg -top-5 left-2'>Password</label>
      <input type='text' placeholder='' className='outline-none h-12 pl-4'  />
    </div>
    <button type='submit' className='w-full h-12 text-white bg-[#010080]'>Log in</button>
    <div className='mt-2 w-fit mx-auto flex gap-20'>
        <div>
            <input type='checkbox' name='checkbox' id='checkbox' /> <label for="checkbox">Remember me.</label>
        </div>
         <a href="/forgotpassword" className='font-semibold text-[#010080] ml-auto'>Forgot password</a>
      </div>
    </form>
    
   </>
    </div>
      </div>
    </div>
  )
}

export default Login
