import React from 'react'

export default function Cards({title, img, props}) {
  return (
  <div className='w-[100%] lg:w-[50%] xl:w-[35%]  p-4 '>
    <div className='bg-white  flex justify-between items-center border sm:w-[100%] rounded-xl h-40  2xl: sm:h-52 '>
       
        <div className='flex  gap-6 flex-col  p-6'>
        <h2>{title}</h2>
        <div>
        <button 
        onClick={props}
        className='bg-green-400 p-2 rounded-3xl font-semibold text-sm text-green-700'>Read</button>
        </div>
        </div>
        <div className=' flex justify-end h-[100%] w-[45%]'> 
        <img className='h-[100%] w-[100%] object-cover'  style={{ borderTopLeftRadius: 1000,borderBottomLeftRadius: 1000}} src={img} alt="" />
        </div>
    </div>
    </div>
  )
}
