import apiUrl from '../api'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import imagennami from '../public/img/imagen1.png'
import imagenluffy from '../public/img/luffy.png'
import flechader from '../public/img/circle arrow.png'
import flechaizq from '../public/img/circle arrow2.png'
import { useEffect } from 'react'
import ultima from '../public/img/ultimaimage.png'
import Navbar from '../src/assets/components/Navbar'
import Footer from '../src/assets/components/Footer.jsx'
import Index from '../src/assets/pages/Index'
import Main from './assets/layouts/Main'
function App() {
  console.log(apiUrl)

  {
    
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        localStorage.removeItem('user');
      }
    }, []);
  }
  const [count, setCount] = useState(0)
  return (
    <>

<>
  <Index/>
</>
  

    
      
    </>
  )
}

export default App