import imagenmenu from '../../../public/img/Menu.png'
import ultima from '../../../public/img/ultimaimage.png'
export default function Navbar() {
  return (
    <> 
    <header className="  bg-black  bg-hero bg-[38%] bg-cover   h-[100vh]  w-[100%] sm:h-[50vh] xl:h-[60vh] ">
    <nav className='flex justify-center  '>
    <div className="  flex items-center justify-between w-5/6  xl:mt-10">
    <img className='sm:h-8 sm:mt-3 xl:h-12' src ={imagenmenu} alt="" />
    <div className='sm:flex  sm:items-center sm:mt-8 sm:gap-4  sm:flex-row'> 

    <h2 className='hidden sm:block text-orange-500 text-2xl xl:text-4xl'>Minga</h2>
    <img className='sm:h-6 xl:h-8' src={ultima} alt="" />
    </div>
    </div>
  </nav>
  </header>  
  </>
  )
}
