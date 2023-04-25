
import Buttons from "./Buttons.jsx"
export default function Welcome() {
  return (
    <> <div className='relative bottom-40 top-[-20%] xl:bottom-48 sm:bottom-16'>
    <div className='absolute  h-full w-full'>
      <div className='h-full flex justify-center items-center sm:h-[82%]  '>
        <div className='mb-40 w-scren items-center flex flex-col sm:mb-20 sm:w-5/6 sm:items-start'>
          <h1 className='text-white font-bold text-3xl w-[80%] text-center sm:w-[70%] sm:text-left xl:text-6xl'>For the love of manga</h1>
          <h3 className='text-white font-semibold p-2 text-center sm:font-normal xl:text-2xl'>Explore our varieties</h3>
          <h4 className='text-white hidden font-semibold sm:block xl:text-1xl'>#MingaLove❤</h4>
          <Buttons/>
        </div>
      </div>
    </div>
  </div></>
  )
}
