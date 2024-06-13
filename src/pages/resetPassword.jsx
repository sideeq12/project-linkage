import React, {useState} from 'react'

function ResetPassword() {
    const [isReset, setReset] = useState(false)
  return (
    <div className=' bg-grad relative h-screen w-screen 
     flex flex-col xl:flex-row '>
      <div className='w-full xl:w-[34vw] text-center pt-10 xl:pt-20'> 
         <img src='OAU_linkage.png' className='w-40 xl:w-[80%] mx-auto' />
         <h3 className='text-white font-semibold text-2xl xl:text-5xl'>LINKAGE</h3></div>
      <div className='w-full xl:w-[65vw] top-60 xl:top-0 flex flex-col justify-center align-middle
       absolute xl:relative xl:ml-auto bg-white rounded-tl-xl 
      xl:rounded-tr-none xl:rounded-bl-xl h-[40rem] xl:h-full pt-10 px-4 xl:px-14'>

<div className='text-center'>
{
    isReset ?
    <>
     <h3 className='font-bold  text-2xl my-6 text-green-700'>Password changed</h3>
     <p>
     Your password has been changed successfully
     </p>
     <div className='w-full py-4 my-4 text-center text-white bg-[#010080]'>Reset Password</div>
     </> :
    <>
         
    <h3 className='font-bold  text-2xl'>Reset Password.</h3>
<form className='mt-10 flex flex-wrap gap-8 w-[87%]'>

<div className='border border-[#9999999f] relative w-full flex flex-col rounded-md   '>
  <label className='absolute bg-white p-1 rounded-lg -top-5 left-2'>New Password</label>
  <input type='text' placeholder='' className='outline-none h-12 pl-4'  />
</div>
<div className='border border-[#9999999f] relative  flex w-full flex-col rounded-md   '>
  <label className='absolute bg-white p-1 rounded-lg -top-5 left-2'>Confirm Password</label>
  <input type='text' placeholder='' className='outline-none h-12 pl-4'  />
</div>
<div onClick={()=>{setReset(true)}} className='w-full py-4 text-white text-center bg-[#010080]'>Reset Password</div>

</form>

</>
  }
    </div>
      </div>
    </div>
  
  )
}

export default ResetPassword
