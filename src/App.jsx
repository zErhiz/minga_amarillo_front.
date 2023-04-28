import apiUrl from '../api'
import { useState } from 'react'
import './App.css'


import ultima from '../public/img/ultimaimage.png'
import Navbar from '../src/assets/components/Navbar'
import Footer from '../src/assets/components/Footer.jsx'
import Index from '../src/assets/pages/Index'
import Main from './assets/layouts/Main'
function App() {
  console.log(apiUrl)

  const [count, setCount] = useState(0)

  return (
    <>

    
        <Index/>
      

    </>
  )
}

export default App