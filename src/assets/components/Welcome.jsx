
import Buttons from "./Buttons.jsx"
export default function Welcome() {
  return (
    <>
    <div className=" bg-black  bg-hero bg-[39%] sm:bg-cover   h-[100vh]  w-[100%] sm:h-[60vh] ">  
   
      <div className='h-full flex justify-center  items-center sm:h-[82%]  '>
        <div className=' w-scren items-center flex flex-col  sm:w-5/6 sm:items-start 2xl:mt-40 sm:mt-20 '>
          <h1 className=' font-poppins text-white font-bold text-3xl w-[80%] text-center sm:w-[70%] sm:text-left xl:text-6xl'>For the love of manga</h1>
          <h3 className='font-poppins text-white  p-2 text-center sm:font-normal xl:text-2xl'>Explore our varieties</h3>
          <h4 className='font-poppins text-white p-2 hidden font-semibold sm:block xl:text-1xl'>#MingaLove❤</h4>
          <Buttons/>
        
    </div>
  </div>
  </div> </>
  )
}
