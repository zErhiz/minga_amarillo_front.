import React from 'react'

export default function Cards({title, img, props}) {
  return (
  <div className='  w-screen lg:w-1/2  p-4'>
    <div className='bg-white  flex justify-between items-center border rounded-xl  sm:h-44 '>
        <div className='flex gap-6 flex-col  p-6'>
        <h2>{title}</h2>
        <div>
        <button 
        onClick={props}
        className='bg-green-400 p-2 rounded-3xl font-semibold text-sm text-green-700'>Read</button>
        </div>
        </div>
        <img className='min-h-[15vh] max-h-[20vh] min-w-[55%] max-w-[55%] rounded-[50%_50%_48%52%/100%_0%_0%_100%] ' src={img} alt="" />
    </div>
    </div>
  )
}
