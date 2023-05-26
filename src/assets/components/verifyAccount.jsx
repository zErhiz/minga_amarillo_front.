import Buttons from "./Buttons.jsx"
import { Link as Anchor, useNavigate } from 'react-router-dom'
export default function verifyAccount() {
  return (
    <>
    <div className='w-[100vw] h-[100vh] bg-verify bg-cover items-center justify-center flex'>
        
        
        <div className='w-[450px] h-[250px] bg-gray-100 rounded-lg drop-shadow-lg items-center justify-center flex flex-col gap-5 border-orange-200 border-2'>
            <h1 className="text-4xl text-center tracking-wide leading-relaxed">Your account has been verified.</h1>
            <Anchor to = '/auth'> <Buttons className='font-roboto hidden border sm:block bg-white rounded-md text-orange-500 font-bold xl:px-20 py-2 px-12 border-orange-500 hover:bg-orange-500 hover:text-white hover:border-transparent transition duration-200'>Sign In!</Buttons></Anchor>  

        </div>
    </div>
    
    </>
  )
}
