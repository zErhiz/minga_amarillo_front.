import apiUrl from '../api'
import { useState } from 'react'

import './App.css'

import Index from '../src/assets/pages/Index'

function App() {
  console.log(apiUrl)

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