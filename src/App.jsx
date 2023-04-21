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

    <header className=" border bg-black  bg-hero bg-cover bg-center h-[60vh] w-[100%] min-[320px]:text-center max-[725px]:h-screen">
      <nav className='flex justify-center p-4'>
        <div className="flex  flex-row justify-between w-5/6 p-2 ">
        <img className='min-[320px]:text-center max-[725px]: h-7' src ={imagenmenu} alt="" />
        <img className='min-[320px]:text-center max-[725px]:hidden' src= {imagenlogo} alt="" />
        <img className='hidden min-[320px]:text-center max-[725px]:block h-7' src={ultima} alt="" />
        </div>
      </nav>
      <div className='flex  p-4 xl:ml-44 sm:ml-28'> 
      <div className=' w-2/4 min-[320px]:text-center max-[725px]:w-screen '> 
        <h1 className='text-white w-711 h-61 font-poppins font-bold xl:text-6xl sm:5xl p-2 items-center flex min-[320px]:text-center max-[725px]: text-2xl  '>For the love of manga</h1>
        <h3 className='w-240 h-23 font-poppins font-normal  xl:text-3xl sm:3xl flex items-center p-2 text-white min-[320px]:text-center max-[725px]:justify-center '>Explore our varieties</h3>
        <h4 className='w-119 h-15 font-poppins font-semibold xl:text-2xl sm:1xl leading-none flex p-2 items-center text-white min-[320px]:text-center max-[725px]:hidden'>#MingaLove❤</h4>
        <button className='text-orange-500 font-roboto font-bold bg-white xl:text-3xl sm:2xl py-3 px-20 flex rounded-md min-[320px]:text-center max-[725px]:hidden'>Sign In!</button>
        <div className='hidden   min-[320px]:text-center max-[725px]:block'> 
        <button className=' hidden w-[88vw] text-orange-500 font-roboto font-bold bg-white text-1xl  py-3 px-20 rounded-md min-[320px]:text-center max-[725px]:block'>Let’s go!</button>
        </div>
        </div>
        </div>
    </header>


    <main className=" flex h-96 content-center items-center  justify-center bg-white min-[320px]:text-center max-[725px]:hidden"> 
<div className="gap-4 bg-orange-500 h-64  w-5/6  flex justify-around items-center ">
  <img src={flechaizq} alt="" />
  <img className="h-60 mb-16" src={imagennami} alt="nami " />
  <img className="h-60 mb-20"src={imagenluffy} alt="luffy" />
  <div className=" w-2/5 flex flex-col justify-center h-2/4  ">
    <h3 className="xl:text-3xl font-bold sm:text-xs text-white">Shonen</h3>
    <p className="text-white sm:text-xs xl:text-2xl ">Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
  </div>
  <img src={flechader} alt="" />
</div>
    </main>

         
    <img className='rounded-[50%_50%_48%52%/_0%_0%_100%_100%] w-screen min-[320px]:text-center max-[725px]:hidden' src={imagenfooterbakugo} alt="" />
<footer className='flex justify-around items-center border p-4 mt-20 min-[320px]:text-center max-[725px]:hidden '>
  <div className='flex flex-row justify-evenly'>
    <h5 className="mr-4 text-2xl">Home</h5>
    <h5 className="text-2xl">Mangas</h5>
  </div>
  <div className="text-center flex">
    <h2 className="text-4xl text-orange-500 font-bold">Minga</h2>
    <img src={ultima} alt="" />
  </div>
  <div className="flex flex-col items-center ml-4">
    <div className="flex flex-row gap-5 p-4">
      <img src={imagenfooter4} alt="" className="w-5 h-auto" />
      <img src={imagenfooter3} alt="" className="w-5 h-auto" />
      <img src={imagenfooter2} alt="" className="w-5 h-auto" />
      <img src={imagenfooter} alt="" className="w-5 h-auto" />
    </div>
    <button className="ml-4 flex rounded items-center gap-2 bg-orange-500 text-white px-10 py-3 font-bold hover:bg-orange-600  text-lg">Donate <img src={corazon} alt="" /></button>
  </div>
</footer>
      
    </>
  )
}

export default App
