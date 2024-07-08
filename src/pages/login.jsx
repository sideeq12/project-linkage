import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function Login() {
  const [segmentDisplay, setDisplay] = useState({
    login : false, createAccount : false, SignChoice : true, forgotPassword : false , verify : false
  })
  const [error, setError ] = useState("")
  const [logStat, setLoStat] = useState("Log in")
  const [ready, setReady ] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
});
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
    if(name=="password"  && value.length >= 6){
      setReady(true)
    }
  };
  const handleSubmit = async (e) => {
    setLoStat("please wait...")
    e.preventDefault();
   if(ready){
    try {
      console.log("ready ...")
      const response = await axios.post('https://linkages-backend.onrender.com/api/v1/auth/login',
        formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

      localStorage.setItem('apiResponse', JSON.stringify(response.data));
      console.log('Response saved to local storage:', response);
      if(response.status ==200){
        navigate("/dashboard")
      }else{
        navigate("/verification")
      }
  } catch (error) {
    // console.log("the ",error.response)
      if(error.response.status == 401){
        navigate("/verification")
      }else{
        setError("Account not found")
      }
  }
   }
   setError(" password must not be less than six digits !")
  };

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
   <form className='mt-10 mx-auto flex flex-wrap gap-8 w-[87%] 'onSubmit={handleSubmit}>
    
    <div className='border border-[#9999999f] relative w-full flex flex-col rounded-md   '>
      <label className='absolute bg-white p-1 rounded-lg -top-5 left-2'>Email Adresse</label>
      <input  type='email' name="email"
                    value={formData.email} onChange={handleChange} placeholder='' className='outline-none h-12 pl-4'  />
    </div>
    <div className='border border-[#9999999f] relative  flex w-full flex-col rounded-md   '>
      <label className='absolute bg-white p-1 rounded-lg -top-5 left-2'>Password</label>
      <input  type='password' minLength='6' maxLength='14'  name="password"
               onChange={handleChange}     placeholder='' className='outline-none h-12 pl-4'  />
    </div>
    <button type='submit' 
     className={`w-full h-12 text-white  ${ready ? "bg-[#010080]" : " bg-gray-300" }`}>{logStat}</button>
    <div className='w-fit mx-auto text-xs text-red-500'>{error}</div>
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
