import React from 'react'
import AdminBg from '../components/AdminBg'
import AdminPanel from '../components/AdminPanel'
import InitialPage from './Index'
export default function Admin() {
  let role = JSON.parse(localStorage.getItem('user'))?.role
  return (
    <>
    {role === 3 ? 
    <div className=' bg-[#EBEBEB] h-[100vh] w-full'> 
    <AdminBg/>
    <AdminPanel/>
    </div>
    :<InitialPage/>}
    </>
  )
}
