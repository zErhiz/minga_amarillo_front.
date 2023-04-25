import React from 'react'

export default function buttons() {
  return (
    <div> <button className='hidden border sm:block bg-white rounded-md text-orange-500 font-bold xl:px-20 py-2 px-12 border-orange-500 hover:bg-orange-500 hover:text-white hover:border-transparent transition duration-200'>Sign In!</button>
    <div className=''>
      <button className="bg-white rounded-md text-orange-500 font-bold py-2 px-24 border-orange-500 hover:bg-orange-500 hover:text-white hover:border-transparent transition duration-200 sm:hidden ">Let's go!</button>
    </div></div>
  )
}
