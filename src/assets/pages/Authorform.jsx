import React from 'react'
import profileImage from '../../../public/img/imageprofile.png'
export default function Authorform() {
  return (
    <div className='bg-[#EBEBEB] h-screen'> 
    <div className='border border-black h-screen flex flex-col justify-center content-center items-center '> 
    <h2 className='text-2xl mt-12'>New Author</h2>
    <div className=' flex flex-col justify-evenly h-4/6 items-center'>
    <img className='h-12 w-12' src={profileImage} alt="" />
     <input className='bg-[#EBEBEB] border border-b-black w-[100%]' type="text" placeholder='Name'/>
     <input className='bg-[#EBEBEB] border border-b-black w-[100%]' type="text" placeholder='Last Name' />
     <input className='bg-[#EBEBEB] border border-b-black w-[100%]' type="text" placeholder='Country' />
     <input className='bg-[#EBEBEB] border border-b-black w-[100%]' type="date" placeholder='Birthday' />
     <input className='bg-[#EBEBEB] border border-b-black w-[100%]' type="text" placeholder='URL Profile Image' />
    <button className='bg-orange-500 w-[100%] h-12 rounded-[5000px] font-bold text-white' >Send</button>
    </div>
    </div>





    </div>
  )
}
