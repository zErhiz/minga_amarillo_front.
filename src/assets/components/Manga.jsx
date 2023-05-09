import React, { useRef } from 'react'
import axios from 'axios'
import apiUrl from '../../../api'
import { useEffect, useState } from 'react'
import { data } from 'autoprefixer'
import Cards from './Cards.jsx'

const Manga = () => {
  
  useEffect(
    ()=>{axios(apiUrl+'categories').then(res=>setCategories(res.data.categories)).catch(err=>(console.log(err)))},
    []   //array de dependencias vacio ya que necesitamos fetchear una unica vez al montarse el componente (ydespues los datos no van a cambiar)
  )
  const [categories, setCategories] = useState([])
  const[ newCat, setNewCat]= useState([])
const [reload, setReload]=useState(false)
  console.log(categories)
  const [mangas, setMangas] = useState([])
  useEffect(
    ()=>{axios(apiUrl+`mangas?title=${title.current.value}&category_id=${newCat.join(',')}&limit=6&order=1`).then(res=>setMangas(res.data.response)).catch(err=>(console.log(err)))},
    [reload]   //array de dependencias vacio ya que necesitamos fetchear una unica vez al montarse el componente (ydespues los datos no van a cambiar)
  )
  
console.log(mangas)
  
let newMangas = mangas.map(m=>{
  return <Cards title={m.title} img={m.cover_photo} />
})
console.log(newMangas)



const title= useRef()
const category=useRef()
console.log(category)
function addCategory(event){
setNewCat([...newCat, event.target.innerText])
}
console.log(newCat)
  return (
    <>
    <div className='min-h-screen flex flex-col justify-center items-center bg-slate-200 '>
   <div className='bg-bgmanga bg-no-repeat bg-cover bg-[39%] sm:bg-cover   h-[100vh]  w-[100%] sm:h-[60vh]'>
      <div className='flex flex-col justify-center items-center p-52  '>
       <h1 className='text-6xl text-white p-9'>Mangas</h1>
       <label htmlFor=""></label>
       <input className='text-2xl w-[100%] p-1 rounded-md' type="search" name='Find Your Manga here' placeholder='Find your manga here'ref={title} onKeyUp={()=>setReload(!reload)} />
 </div>
</div>
<div className='flex gap-4 p-6 w-[70%] justify-center items-center'>
<button className='bg-slater-300 border  rounded-3xl p-2'>All</button>
{categories.map((c)=>(
  <button className=' p-2 font-semibold text-red-800 rounded-3xl'style= {{background: ` ${ c.color}`}}   onClick={addCategory}>{c.name}</button>
)

)}

  
</div>
 
 <div className='bg-white flex flex-wrap p-9 flex justify-center items-center sm:w-[60vw] w-[100vw]  '>
    {newMangas}
 </div>
 

 </div>
  
    </>
  )
}

export default Manga
