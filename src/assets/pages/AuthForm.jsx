import React from 'react'
import Login from './Login.jsx'
import SignUp from './SignUp.jsx'

export const AuthForm = () => {
const [redirect, setRedirect]=useState(true)
  return (
    <>
    {redirect ?<Login setRedirect={setRedirect}/>:<SignUp setRedirect={setRedirect}/>}
    <SignUp/>
    </>
    
  )
}
