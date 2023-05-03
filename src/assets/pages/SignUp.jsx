import React from 'react'
import ultima from '../../../public/img/ultimaimage.png'
import Buttons from '../components/Buttons'
import { useRef } from 'react'
import Swal from 'sweetalert2'
 import axios from 'axios'
 import { Navigate, useNavigate } from "react-router-dom"
export const SignUp = () => {
  const navigate = useNavigate()
  
  const password = useRef()
  const email= useRef()
  const photo = useRef()
  function handleForm (e){
    e.preventDefault()
    let data ={
      email: email.current.value,
      
      password: password.current.value,
      photo: photo.current.value,

    
    }
    axios.post("http://localhost:8000/auth/signup", data)
    .then(res=> {
      Swal.fire({
        title: 'User registered',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
   
      
        navigate ('/')
        
    })
  
     .catch(err=>{console.log(err)
      Swal.fire({
        title: 'Check the fields',
        text: err.response.data.message,
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    })
    
  }
  let token =localStorage.getItem('token')
  return (
  <>
  {!token ? 
  <>
  
  
  
    <div className='h-screen w-full flex justify-center items-center   h-screen '>
        <div className='flex flex-col w-[50%] h-[100%] justify-center p-9'>
          <div className='flex flex-col h-[40%] justify-center items-center  gap-2'>
          <div className=' flex justify-center items-center gap-2'>
          <h2 className='hidden sm:block text-orange-500 text-2xl xl:text-4xl font-bold '>Minga</h2>
         <img className='sm:h-6 xl:h-8' src={ultima} alt="" />
         </div>
         <div className='flex 2xl:justify-center items-center'>
         <h2 className='hidden sm:block text- text-2xl xl:text-4xl text-black font-semibold'>Welcome!</h2>
         </div>
       <div className=' w-1/2 2xl:flex justify-center text-center items-center '>
        <p>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>
       </div>
          
          </div>
        
       <div className=' flex h-[80%] justify-center '>
       <form  onSubmit={(e)=>handleForm(e)} className='w-[80%] h-full bg-white text-orange-500 flex flex-col px gap-2'>
        <label htmlFor="">Email</label>
        <input className='border border-black px-4 py-2 rounded-md' type="text" placeholder='email' ref={email} />
        <label htmlFor="">Password</label>
        <input className='border border-black px-4 py-2 rounded-md' type="text" placeholder='password' ref={password}/>
        <label htmlFor="">Photo</label>
        <input  className='border border-black px-4 py-2 rounded-md' type="text" placeholder='url' ref={photo}/>
        <input className='bg-orange-400 border border-black py-4 text-white text-center rounded-md font-semibold hover:bg-white hover:text-orange-600 cursor-pointer' type="submit" value='Sign Up' />
        </form>
      
       </div>
        
        
        </div>
       
        <div className='w-1/2 h-full  hidden bg-bgform w-1/2 h-full bg-contain bg-no-repeat bg-cover sm:block'></div>
        
    </div>
  </>
  :null}
  </>
  )
}
export default SignUp