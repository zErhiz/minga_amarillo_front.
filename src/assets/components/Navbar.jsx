import { useState } from 'react'
import imagenmenu from '../../../public/img/Menu.png'
import ultima from '../../../public/img/ultimaimage.png'
import userImage from '../../../public/img/killua.png'
import closeImage from '../../../public/img/close.png'
export default function Navbar() {
let [menu,setMenu] = useState(false)
console.log(menu)
  return (
    
    <> 
    <header className=''> 
    <nav className='flex justify-center  '>

    <div className=" absolute top-[0rem] sm:top-[-2rem] flex items-center mt-4 justify-between w-5/6  xl:mt-10">

    <img onClick={() => setMenu(!menu)} className='sm:h-8 sm:mt-9 lg:mt-7 xl:h-12 cursor-pointer' src ={imagenmenu} alt="" />
    <div className='sm:flex  sm:items-center sm:mt-8 sm:gap-4  sm:flex-row'> 

    <h2 className='hidden sm:block text-orange-500 text-2xl xl:text-4xl'>Minga</h2>
    <img className='sm:h-6 xl:h-8' src={ultima} alt="" />
    </div>
    </div>
    </nav>
    {menu ?
            <div className='bg-orange-500 fixed top-0 left-0 right-0 bottom-0 z-50 sm:right-[170px] 2xl:right-[1200px] xl:right-[1000px] md:right-[450px] lg:right-[700px]'>
              <div className='  flex p-4 justify-between items-center'> 
              <div className='flex   gap-2'>
              <img src={userImage} alt="" />
              <div className='text-sm text-white'> 
              <h2 className='font-bold'>Lucas Ezequiel Silva</h2>
              <h2>lucasezequielsilva@gmail.com</h2>
              </div>
              </div>
              <img className='cursor-pointer h-4 ' onClick={() => setMenu(!menu)} src={closeImage} alt="" />
              </div>
              <div> 
                <ul className=' flex flex-col  items-center 2xl:mt-20 xl:mt-20 '> 
              <li className='bg-white w-[80%] 2xl:w-[30%] p-4 text-center rounded-lg h-auto text-orange-500 font-bold'><a href="#">Home</a></li>
              <li className='p-4 text-white font-semibold'><a href="#">Comics</a></li>
              <li className='p-4 text-white font-semibold'><a href="#">My Comics</a></li>
              <li className='p-4 text-white font-semibold'> <a href="#">Favorites</a></li>
              <li className='p-4 text-white font-semibold'> <a href="#">Logout</a></li>
              </ul>
              </div>

            </div> 
            
          :null}
  </header>  
  </>
  )
}
