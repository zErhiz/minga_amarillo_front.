import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import imagenmenu from '../public/img/Menu.png'
import imagenlogo from '../public/img/Logo.png'
import imagenfooter from '../public/img/Youtube.png'
import imagenfooter2 from '../public/img/Vimeo.png'
import imagenfooter3 from '../public/img/Twitter.png'
import imagenfooter4 from '../public/img/Facebook.jpg'
import imagenbackground from '../public/img/Images + Rectangle.png'
import imagennami from '../public/img/imagen1.png'
import imagenluffy from '../public/img/luffy.png'
import flechader from '../public/img/circle arrow.png'
import flechaizq from '../public/img/circle arrow2.png'
import imagenfooterbakugo from '../public/img/footerimage.png'
import ultima from '../public/img/ultimaimage.png'
import corazon from '../public/img/Union.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <header className="  bg-black  bg-hero bg-cover bg-center h-[100vh]  w-[100%] sm:h-[50vh] ">
      <nav className='flex justify-center  '>
        <div className="  flex items-center justify-between w-5/6  xl:mt-10">
        <img className='sm:h-8 sm:mt-3 xl:h-12' src ={imagenmenu} alt="" />
        <div className='sm:flex  sm:items-center sm:mt-3 sm:gap-4  sm:flex-row'> 
        <h2 className='hidden sm:block text-orange-500 text-2xl xl:text-4xl'>Minga</h2>
        <img className='sm:h-6 xl:h-8' src={ultima} alt="" />
        </div>
        </div>
      </nav>
      <div className=' h-[100%] flex justify-center items-center sm:h-[82%] ' > 
      <div className='mb-40 w-scren items-center flex flex-col   sm:mb-0 sm:w-5/6 sm:items-start'> 

        <h1 className='text-white font-bold text-3xl w-[80%]  text-center  sm:w-[70%] sm:text-left xl:text-6xl'>For the love of  manga</h1>
        <h3 className=' text-white font-semibold  p-2 text-center  sm:font-normal xl:text-2xl'>Explore our varieties</h3>
        <h4 className=' text-white hidden font-semibold  sm:block xl:text-1xl'>#MingaLove❤</h4>
        <button className=' hidden border  sm:block bg-white rounded-md text-orange-500 font-bold xl:px-20 py-2 px-12 border-orange-500 hover:bg-orange-500 hover:text-white hover:border-transparent transition duration-200'>Sign In!</button>
        <div className=' '> 
        <button className="bg-white rounded-md text-orange-500 font-bold py-2 px-24 border-orange-500 hover:bg-orange-500 hover:text-white hover:border-transparent transition duration-200 sm:hidden ">Let's go!</button>
        </div>
        </div>
        </div>
    </header>


    <main className="hidden bg-white sm:block sm:p-10 lg:p-24 xl:p-28"> 
    <div className="bg-bgnaranja bg-cover flex sm:flex-row justify-between items-center gap-4 lg:gap-20">
  <div className="flex sm:w-1/4 items-center justify-center">
    <img src={flechaizq} alt="" className="w-8 h-8 flex justify-start" />
  </div>
  <div className="flex sm:w-1/2 items-center justify-center lg:gap-20 xl:gap-40">
    <img src={imagennami} alt="nami" className=" sm:h-50 sm:ml-4 sm:mt-[-1rem] lg:mt-[-5rem]  xl:h-60 xl:ml-[-9rem] xl:mt-[-2rem]" />
    <img src={imagenluffy} alt="luffy" className="sm:h-50 sm:mt-[-2rem] xl:h-60  xl:ml-[-2rem] xl:mt-[-4rem]" />
  </div>
  <div className="flex sm:w-1/4 items-center justify-center xl:w-0"></div>
  <div className="w-full sm:w-1/2  xl:mt-[4rem]">
    <h3 className="text-white sm:text-2xl font-semibold">Shonen</h3>
    <p className="text-white sm:text-1xl sm:overflow-auto sm:h-20  xl:h-40">Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
  </div>
  <div className="flex sm:w-1/4 items-center justify-center">
    <img src={flechader} alt="" className="w-8 h-8" />
  </div>
</div>
</main>

         
    
<img className='rounded-[50%_50%_48%52%/_0%_0%_100%_100%] h-[30vh] sm:w-screen lg:h-[50vh]' src={imagenfooterbakugo} alt="" />
<div className='lg:w-[100%]  justify-center flex'> 
<footer className=' flex flex-col items-center justify-around  h-72 lg:flex-row lg:w-[60%] lg:justify-between  border-b-4 border-neutral-400'>
  <div className='flex flex-row gap-4 w-5/6 justify-evenly lg:gap-0'>
    <h5 className=" text-2xl">Home</h5>
    <h5 className="text-2xl">Mangas</h5>
  </div>
  <div className="flex flex-row justify-evenly w-1/2 lg:mr-10 xl:justify-normal xl:gap-2">
    <h2 className="text-3xl text-orange-500 font-bold">Minga</h2>
    <img src={ultima} alt="" />
  </div>
  <div className=" lg:float-right">
    <div className="flex flex-row gap-7 mb-2">
      <img src={imagenfooter4} alt="" className="w-5 h-auto" />
      <img src={imagenfooter3} alt="" className="w-5 h-auto" />
      <img src={imagenfooter2} alt="" className="w-5 h-auto" />
      <img src={imagenfooter} alt="" className="w-5 h-auto" />
    </div>
    <button className=" flex rounded items-center gap-2 bg-orange-500 text-white px-10 lg:px-14 py-3 font-bold hover:bg-orange-600">Donate <img src={corazon} alt="" /></button>
  </div>
</footer>
</div>
      
    </>
  )
}

export default App
