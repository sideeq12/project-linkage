import React from 'react'

const SignChoice = () => {
  return (
    <div className='flex flex-col gap-y-8 justify-center text-center align-middle'>
            <h3 className='font-bold  text-2xl'>Sign in as.</h3>
<div className='flex flex-col font-semibold gap-y-8 mx-auto w-[60%]'>
<a href="" className='py-3 rounded-2xl  bg-[#010080] w-full text-center text-white'>Admin</a>
<a href="" className='py-3 rounded-2xl text-center w-full text-[#010080] border border-[#010080]'>User</a>
</div>
   <div className=''>Don’t have an account? <a href="/login" className='font-semibold text-[#010080]'>Sign up.</a> </div>
  
    </div>
  )
}

export default SignChoice
