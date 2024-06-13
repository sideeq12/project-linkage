import React from 'react'

const Verification = () => {
    let verified = true;
  return (
    <div className=' bg-grad relative h-screen w-screen 
    flex flex-col xl:flex-row '>
     <div className='w-full xl:w-[34vw] text-center pt-10 xl:pt-20'> 
        <img src='OAU_linkage.png' className='w-40 xl:w-[80%] mx-auto' />
        <h3 className='text-white font-semibold text-2xl xl:text-5xl'>LINKAGE</h3></div>
     <div className='w-full xl:w-[65vw] top-60 xl:top-0 flex flex-col justify-center align-middle
      absolute xl:relative xl:ml-auto bg-white rounded-tl-xl 
     xl:rounded-tr-none xl:rounded-bl-xl h-[40rem] xl:h-full pt-10 px-4 xl:px-14'>

<>
{
    verified ?     <div className='text-center w-[70%] mx-auto'>
    <img src='info.png' alt='loading page image for linkage'  className='mx-auto w-40 xl:w-fit' />
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
      <a href='/login' className='w-full h-12 text-white px-10 xl:px-40 py-3 bg-[#010080]'>Sign in</a>
    </div>
}</>
     </div>
   </div>

  )
}

export default Verification
