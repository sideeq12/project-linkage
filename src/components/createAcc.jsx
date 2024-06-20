import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateAcc() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
});
const [error, setError] = useState("")
const [ready, setReady ] = useState(false)
const navigate = useNavigate()

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
      ...formData,
      [name]: value
  });
};
const handleSubmit = async (e) => {
  e.preventDefault();
//  if(ready){
//   try {
//     const response = await axios.post('http://linkages-backend.onrender.com/api/v1/auth/register', formData);
//     // Save response to local storage
//     localStorage.setItem('apiResponse', JSON.stringify(response.data));
//     console.log('Response saved to local storage:', response.data);
// } catch (error) {
//     console.error('Error submitting the form:', error);
// }
//  }
//  setError("passowrd not  match !")

navigate("/verification")
};

const testConfirmation = (e)=>{
if(e.target.value == formData.password){
  setReady(true)
}
}
 

  return (
   <div className='mx-auto xl:mx-0 text-center'>
         <h3 className='font-bold mx-auto xl:mx-0 text-2xl'>Create Account.</h3>
   <form className='mt-10 flex mx-auto  justify-center flex-wrap gap-8'  onSubmit={handleSubmit}>
    <div className='border border-[#9999999f] relative w-[87%] xl:w-80 flex flex-col rounded-md  '>
      <label className='absolute bg-white p-1 rounded-lg -top-5 left-2'>First name</label>
      <input type='text' name="firstName"
                    value={formData.firstName}
                    onChange={handleChange} placeholder='' className='outline-none h-12 pl-4' required />
    </div>
    <div className='border border-[#9999999f] relative w-[87%] xl:w-80 flex flex-col rounded-md  '>
      <label className='absolute bg-white p-1 rounded-lg -top-5 left-2'>Last name</label>
      <input type='text'    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}  placeholder='' className='outline-none h-12 pl-4' required />
    </div>
    <div className='border border-[#9999999f] relative w-[87%] flex flex-col rounded-md   '>
      <label className='absolute bg-white p-1 rounded-lg -top-5 left-2'>Email Adresse</label>
      <input type='email' name="email"
                    value={formData.email}
                    onChange={handleChange} placeholder='' className='outline-none h-12 pl-4' required />
    </div>
    <div className='border border-[#9999999f] relative w-[87%] flex flex-col rounded-md   '>
      <label className='absolute bg-white p-1 rounded-lg -top-5 left-2'>Password</label>
      <input type='password' minLength='6' maxLength='14'  name="password"
                    value={formData.password}
                    onChange={handleChange} placeholder='' className='outline-none h-12 pl-4'  required/>
    </div>
    <div className='border border-[#9999999f] relative w-[87%] flex flex-col rounded-md   '>
      <label className='absolute bg-white p-1 rounded-lg -top-5 left-2'>Confirm Password</label>
      <input type='password' onChange={(e)=>{testConfirmation(e)}} placeholder='' className='outline-none h-12 pl-4'  />
    </div>
    <button type='submit' className={`w-[87%] h-12 text-white ${ready ? "bg-[#010080]" : " bg-gray-300" }`}>Submit</button>
    </form>
    <div className='w-fit text-red-800 mt-2 text-xs mx-auto'>{error}</div>
    
    <div className='mt-2'>Already have an account? <a href="/login" className='font-semibold text-[#010080]'>Login</a>
      </div></div>
  )
}

export default CreateAcc
