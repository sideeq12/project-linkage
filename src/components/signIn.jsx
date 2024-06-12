import React from 'react'

function SignIn() {
  return (
    <div>
        <>
         
        <h3 className='font-bold  text-2xl'>Sign in.</h3>
   <form className='mt-10 flex flex-wrap gap-8 w-[87%]'>
    
    <div className='border border-[#9999999f] relative w-full flex flex-col rounded-md   '>
      <label className='absolute bg-white p-1 rounded-lg -top-5 left-2'>Email Adresse</label>
      <input type='text' placeholder='' className='outline-none h-12 pl-4'  />
    </div>
    <div className='border border-[#9999999f] relative  flex w-full flex-col rounded-md   '>
      <label className='absolute bg-white p-1 rounded-lg -top-5 left-2'>Password</label>
      <input type='text' placeholder='' className='outline-none h-12 pl-4'  />
    </div>
    <button type='submit' className='w-full h-12 text-white bg-[#010080]'>Log in</button>
    <div className='mt-2 flex gap-20'>
        <div>
            <input type='checkbox' name='checkbox' id='checkbox' /> <label for="checkbox">Remember me.</label>
        </div>
         <a href="/login" className='font-semibold text-[#010080] ml-auto'>Forgot password</a>
      </div>
    </form>
    
   </>
    </div>
  )
}

export default SignIn
