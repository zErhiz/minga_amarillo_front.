import React from 'react'
import AuthorProfile from '../components/AuthorProfile'
import AuthorCards from '../components/AuthorCards'
export default function Author() {
  return (
    <>
    <div className='bg-[#EBEBEB] h-fit'> 
    <AuthorProfile/>
    <AuthorCards/>
    </div>
    </>
  )
}
