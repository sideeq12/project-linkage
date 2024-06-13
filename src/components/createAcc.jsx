import React from 'react'

function CreateAcc() {
  return (
   <div>
         
         <h3 className='font-bold  text-2xl'>Create Account.</h3>
   <form className='mt-10 flex flex-wrap gap-8'>
    <div className='border border-[#9999999f] relative w-[87%] xl:w-80 flex flex-col rounded-md  '>
      <label className='absolute bg-white p-1 rounded-lg -top-5 left-2'>First name</label>
      <input type='text' placeholder='' className='outline-none h-12 pl-4'  />
    </div>
    <div className='border border-[#9999999f] relative w-[87%] xl:w-80 flex flex-col rounded-md  '>
      <label className='absolute bg-white p-1 rounded-lg -top-5 left-2'>First name</label>
      <input type='text' placeholder='' className='outline-none h-12 pl-4'  />
    </div>
    <div className='border border-[#9999999f] relative w-[87%] flex flex-col rounded-md   '>
      <label className='absolute bg-white p-1 rounded-lg -top-5 left-2'>Email Adresse</label>
      <input type='text' placeholder='' className='outline-none h-12 pl-4'  />
    </div>
    <div className='border border-[#9999999f] relative w-[87%] flex flex-col rounded-md   '>
      <label className='absolute bg-white p-1 rounded-lg -top-5 left-2'>Password</label>
      <input type='text' placeholder='' className='outline-none h-12 pl-4'  />
    </div>
    <div className='border border-[#9999999f] relative w-[87%] flex flex-col rounded-md   '>
      <label className='absolute bg-white p-1 rounded-lg -top-5 left-2'>Confirm Password</label>
      <input type='text' placeholder='' className='outline-none h-12 pl-4'  />
    </div>
    <button type='submit' className='w-[87%] h-12 text-white bg-[#010080]'>Submit</button>
    </form>
    
    <div className='mt-2'>Already have an account? <a href="/login" className='font-semibold text-[#010080]'>Login</a>
      </div></div>
  )
}

export default CreateAcc
