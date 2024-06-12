import React from 'react'

const Verification = () => {
    let verified = false;
  return (
<>
{
    verified ?     <div className='text-center w-[70%] mx-auto'>
    <img src=' ' alt='loading page image for linkage' />
   <h3 className='font-bold  text-2xl my-6'>Verifying...</h3>
  <div className='text-[#5e5e5e]'>
  Please wait while LINKAGES verifies you.
  You can go about your daily business and check back later.
  </div>
</div> :     <div className='text-center w-[70%] mx-auto'>
        <img src='success.png' className='mx-auto' alt='loading page image for linkage' />
       <h3 className='font-bold  text-2xl my-6 text-green-700'>Verified</h3>
      <div className='text-[#5e5e5e] mb-6'>
      Your account has been approved by LINKAGES OAU
      </div>
      <a href='/' className='w-full h-12 text-white px-10 xl:px-40 py-3 bg-[#010080]'>Sign in</a>
    </div>
}</>
  )
}

export default Verification
