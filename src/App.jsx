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
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <header className=" border bg-hero bg-cover bg-center h-[50vh] w-screen">
      <nav>
        <div className="flex border flex-row ">
        <img src ={imagenmenu} alt="" />
        <img src={imagenlogo} alt="" />
        </div>
      </nav>
        <h1 className='text-white w-711 h-61 font-poppins font-bold text-6xl  items-center flex'>For the love of manga</h1>
        <h3 className='w-240 h-23 font-poppins font-normal text-base  flex items-center text-white'>Explore our varieties</h3>
        <h4 className='w-119 h-15 font-poppins font-semibold text-sm leading-none flex items-center text-white'>#MingaLove❤</h4>
        <button className='text-orange-500 font-roboto bg-white text-2xl py-3 px-20 rounded-md'>Sign In!</button>
    </header>
  
    <main className='bg-white p-12'>
  <div className='bg-orange-500 border flex justify-between items-center'>
    <img src={flechaizq} alt="" />
    <div className='flex gap-x-52 p-9 mx-auto justify-center items-center'>
      <img src={imagennami} alt="" />
      <img src={imagenluffy} alt="" />
      <div className='flex flex-col'>
        <h4 className="text-white font-bold text-2xl">Shonen</h4>
        <p className='text-white  '>Is the manga that is aimed at adolescent boys. They are <br /> series with large amounts of action, in which humorous <br /> situations often occur. The camaraderie between <br /> members of a collective or a combat team stands out.</p>
      </div>
    </div>
    <img src={flechader} alt="" />
  </div>
</main>


        <footer>
          <h5>Home</h5>
          <h5>Mangas</h5>

          <h2>Minga </h2>
          <h2>雪</h2>
          <div>
           <img src={imagenfooter4} alt="" />
           <img src={imagenfooter3} alt="" />
           <img src={imagenfooter2} alt="" />
           <img src={imagenfooter} alt="" />
          </div>
          <button>Donate</button>
        </footer>
 
      
    </>
  )
}

export default App
