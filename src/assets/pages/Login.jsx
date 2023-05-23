import Buttons from "../components/Buttons"
import ultima from '../../../public/img/ultimaimage.png'
import { useRef } from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import apiUrl from "../../../api";
import  Swal from 'sweetalert2'
import SignUp from "./SignUp.jsx"
import { Navigate, useNavigate } from "react-router-dom"
import Error from "../components/Error"
import { redirect } from "react-router-dom"
import { gapi } from "gapi-script"
import {GoogleLogin} from "react-google-login"
export const Login = (props) => {

  const [showRegister, setShowRegister]= useState(false)
  const[showLogIn, setShowLogIn]=useState(true)
  const [isLoggedIn, setIsLoggedIn]= useState(false)
 const navigate = useNavigate()
  let email  = useRef()
  let password=useRef()
  // console.log(email)

  const clientID = "166461268192-b8ojdp58ns00djbekuc8o7p2p7lm5krb.apps.googleusercontent.com"

  useEffect(()=> {
    const start = () => {
      gapi.auth2.init( {
        clienteId : clientID
      })
    }
    gapi.load("client:auth2",start)
  }, [])

  function handleForm(e){
    // e.preventDefault()
    let data={
      email:email.current.value, 
      password:password.current.value
    }
    axios.post(apiUrl +'auth/signin', data)
    .then(res=> {
      Swal.fire({
        title: 'Signed in!',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user',JSON.stringify( res.data.user))
      
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

  const onSuccess = (response) => {
    const {name, email,imageUrl, googleId}=response.profileObj
    // console.log(response.profileObj);
    let data={
      email:email, 
      password: googleId
    }
    axios.post(apiUrl +'auth/signin', data)
    .then(res=> {
      Swal.fire({
        title: 'Signed in!',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user',JSON.stringify( res.data.user))
      
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
          {!showRegister ? <div className='h-screen w-full flex justify-center items-center   h-screen '> 
   
      < div  className='w-1/2 2xl:h-full  hidden bg-bgform2 w-1/2 h-full bg-cover bg-no-repeat bg-cover sm:block'></div>
    <div className='flex flex-col w-[50%] h-[100%] ustify-center p-9'>
      <div className='flex flex-col 2xl:h-[40%] justify-center items-center  gap-2'>
      <div className=' flex justify-center items-center gap-2'>
      <h2 className='hidden sm:block text-orange-500 text-2xl xl:text-4xl font-bold '>Minga</h2>
     <img className='sm:h-6 xl:h-8' src={ultima} alt="" />
     </div>
     <div className='flex justify-center items-center'>
     <h2 className='hidden sm:block text- text-2xl xl:text-4xl text-black font-semibold'>Welcome back!</h2>
     </div>
   <div className=' w-1/2 flex justify-center text-center items-center '>
    <p>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>
   </div>
      
      </div>
    
   <div className=' flex h-[80%] justify-center '>
   <form onSubmit={(e)=>handleForm(e)} className='w-[80%] h-full bg-white text-orange-500 flex flex-col px 2xl:gap-2'>
   
    <label htmlFor="">Email</label>
    <input className='border border-black px-4 py-2 rounded-md' type="text" placeholder='email' ref={email}/>
    <label htmlFor="">Password</label>
    <input className='border border-black px-4 py-2 rounded-md' type="password" placeholder='password' ref={password}/>
   
    <input className='bg-orange-400 border border-black py-4 text-white text-center rounded-md font-semibold hover:bg-white hover:text-orange-600 cursor-pointer' type="submit" value='Sign In' />
    
    <GoogleLogin
    clientId= {clientID}
    buttonText="Sign in with Google"
    onSuccess={onSuccess}
    onFailure={''}
    cookiePolicy={'single_host_origin'}
  />
   
    </form> 
    

    </div>
 
    </div>
   
</div>:null}
<div className="flex justify-center  items-center ">
    
      {showRegister ? <SignUp/>: (
        <h3 className="font-semibold sm:flex sm:flex-col md:flex-row md:right-10 md:bottom-80 flex justify-center items-center border border-black sm:right-0 sm:flex lg:right-28 xl:right-48 flex-col absolute  bottom-8 right-10 2xl:bottom-60 2xl:right-80">you don´t have an account yet? <button onClick={()=>setShowRegister(true)} className="font-semibold text-orange-400 ">Sign up</button></h3> 
      )}
   
   </div>
</>
:<Error/>}
</>
  )
}
export default Login