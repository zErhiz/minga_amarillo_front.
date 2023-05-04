import apiUrl from '../api'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import imagennami from '../public/img/imagen1.png'
import imagenluffy from '../public/img/luffy.png'
import flechader from '../public/img/circle arrow.png'
import flechaizq from '../public/img/circle arrow2.png'

import ultima from '../public/img/ultimaimage.png'
import Navbar from '../src/assets/components/Navbar'
import Footer from '../src/assets/components/Footer.jsx'
import Index from '../src/assets/pages/Index'
import Main from './assets/layouts/Main'
function App() {
  console.log(apiUrl)

  const [count, setCount] = useState(0)
  let user = localStorage.getItem("user");

  let role = JSON.parse(localStorage.getItem('user'))?.role
  let token = localStorage.getItem("token");
console.log(token)
  return (
    <>

<>
  <Index/>
</>
  

    
      
    </>
  )
}

export default App