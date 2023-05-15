import React from 'react'

export default function Cards({title, img, props}) {
  return (
  <div className='w-screen lg:w-1/2  p-4'>
    <div className='bg-white  flex justify-between items-center border sm:w-[70%] rounded-xl  sm:h-52 '>
        <div className='flex  gap-6 flex-col  p-6'>
        <h2>{title}</h2>
        <div>
        <button 
        onClick={props}
        className='bg-green-400 p-2 rounded-3xl font-semibold text-sm text-green-700'>Read</button>
        </div>
        </div>
        <img className='min-h-[21vh] max-h-[21vh] min-w-[45%] max-w-[45%] object-cover rounded-[50%_50%_48%52%/100%_0%_0%_100%]' src={img} alt="" />
    </div>
    </div>
  )
}
