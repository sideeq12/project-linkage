import React, {useState} from 'react'

const Forgotpassword = () => {
const [isSent, setSent] = useState(false)
  return (
           <div className='text-center w-[70%] mx-auto'>
        <img src={`${isSent ? 'sent.png' : 'info.png'}`} className='mx-auto' alt='forgorpassword page image for linkage' />
  {isSent ?       <h3 className='font-bold  text-2xl my-6 text-green-700'>Sent</h3> :        <h3 className='font-bold  text-2xl my-6'>Forgot Password</h3>}
      <div className='text-[#5e5e5e] mb-6'>
   { isSent ?     <p>An OTP from LINKAGES - OAU has been sent to your email address, click next to continue.</p>
 :   <p>Enter your email and we’ll send you a link to reset your password</p>
}
      </div>
    {isSent ?
    <a className='px-32 text-center py-4 text-white bg-[#010080]'>Next</a> :   <form action="mx-auto">
      <div className='border  mx-auto border-[#9999999f] my-6 relative w-[87%] flex flex-col rounded-md   '>
      <label className='absolute bg-white p-1 rounded-lg -top-5 left-2'>Confirm Password</label>
      <input type='text' placeholder='' className='outline-none h-12 pl-4'  />
    </div>
    <div onClick={()=>{setSent(true)}}  className='w-[87%] py-4 mx-auto text-white bg-[#010080]'>Submit</div>
      </form>}
    </div>
  )
}

export default Forgotpassword
