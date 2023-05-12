import React from 'react'
import AuthorProfile from '../components/AuthorProfile'
import AuthorCards from '../components/AuthorCards'
import Error from '../components/Error';

export default function Author() {
  let role = JSON.parse(localStorage.getItem('user'))?.role
  return (
    <> 
   { role=== 0 ?  

    <>
    <div className='bg-[#EBEBEB] h-fit min-h-[103.5vh]'> 
    <AuthorProfile/>
    <AuthorCards/>
    </div>
    
    </>
    :<Error/>}
    </>
  )
}
