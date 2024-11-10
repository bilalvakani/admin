import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const Login = () => {
   
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{ 
            const response = await axios.post('http//localhost:3000/api/auth/login',{email,password})    
             console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='flex flex-col items-center h-screen justify-center bg-gradient-to-b from-teal-900 from-50% to-gray-100 to-50% space-y-6   '>
         <h2 className='font-sevillana text-3xl text-white'>Employee Management System</h2>
         <div className='border shadow p-6 w-80 bg-white'>
         <h2 className='text-2xl font-bold mb-4-'>Login Form </h2>
         <form onSubmit={handleSubmit}>
         
            <div className='mb-4'>
                <label  className='block text-gray-700'  htmlFor='email'>Email </label>
                <input required className='w-full px-3 py-2 border' 
                 type='email' placeholder='Enter your email'
                 onChange={(e) =>setEmail(e.target.value)}/>
            </div>
            <div className='mb-4'>
                <label lassName='block text-gray-700' htmlFor='password'>Password </label>
                <input required className='w-full px-3 py-2 border' 
                 type='password' placeholder='*****************'
                 onChange={(e) =>setPassword(e.target.value)}/>
            </div>
            <div className='mb-4 flex items-center justify-between'>
             <label className='inline-flex items-center'>
                <input type='checkbox' className='form-checkbox'/>
                <span className='ml-2 text-gray-700'> Remember me</span>
             </label>
             <a href='#' className='text-teal-600'>
                Forgot password ?
             </a>
            </div>
            <div className='mb-4'>
            <button type='submit' className='w-full bg-teal-600 text-white py-2'>Login</button>
            </div>
         </form>
         </div>

    </div>
  )
}

export default Login