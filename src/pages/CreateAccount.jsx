import React from 'react'
import CreateAcc from '../components/createAcc'
import SignIn from '../components/signIn'
import SignChoice from '../components/signChoice'
import Verification from '../components/verification'
import Forgotpassword from '../components/forgotpassword'
import ResetPassword from '../components/resetPassword'
function CreateAccount() {
  return (
    <div className=' bg-grad relative h-screen w-screen 
     flex flex-col xl:flex-row '>
      <div className='w-full xl:w-[34vw] text-center pt-10 xl:pt-20'> 
         <img src='OAU_linkage.png' className='w-40 xl:w-[80%] mx-auto' />
         <h3 className='text-white font-semibold text-2xl xl:text-5xl'>LINKAGE</h3></div>
      <div className='w-full xl:w-[65vw] top-60 xl:top-0 flex flex-col justify-center align-middle
       absolute xl:relative xl:ml-auto bg-white rounded-tl-xl 
      xl:rounded-tr-none xl:rounded-bl-xl h-[40rem] xl:h-full pt-10 px-4 xl:px-14'>

     <CreateAcc />
     {/* <SignIn /> */}
     {/* <SignChoice /> */}
     {/* <Verification /> */}
     {/* <Forgotpassword /> */}
     {/* <ResetPassword /> */}
      </div>
    </div>
  )
}

export default CreateAccount
