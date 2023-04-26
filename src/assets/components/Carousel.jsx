import { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../../api'
import imagennami from '../../../public/img/imagen1.png'
import imagenluffy from '../../../public/img/luffy.png'
import flechader from '../../../public/img/circle arrow.png'
import flechaizq from '../../../public/img/circle arrow2.png'

//se recomienda uqe los hooks se definan en las primeras lineas del componente, por fuera del componente dan error
export default function Carousel() {
  useEffect(
    ()=>{axios(apiUrl+'categories').then(res=>setCategories(res.data.categories)).catch(err=>(console.log(err)))},
    []   //array de dependencias vacio ya que necesitamos fetchear una unica vez al montarse el componente (ydespues los datos no van a cambiar)
  )
  

  
 let [categories, setCategories] = useState ([])
 console.log(categories)
  let [counter, setCounter] = useState(0)
  console.log(counter)
  let sumar = ()=> {
    console.log(counter)
    setCounter(counter+1)
    if(counter ==categories.length-1)
    {
      setCounter(0)
    }
  }
  let restar =()=>
  {
    console.log(counter)
    setCounter(counter-1)
    if(counter===0)
    {
      setCounter(categories.length-1)
    }
  }
  //el hook puede ir aca pero lo correcto es en las primeras lineas
  return (
    <>  <main className="hidden bg-white sm:block sm:p-10 lg:p-28 xl:p-12 border border-black"> 
  
    <div className="  flex sm:flex-row justify-between items-center gap-4 lg:gap-20 border border-black"style={{backgroundColor:categories[counter]?.color}}>
  <div className="flex sm:w-1/4 items-center justify-center border border-black">
    <img onClick={restar}src={flechaizq} alt="" className="w-8 h-8 flex justify-start border border-black  cursor-pointer" />
  </div>
  <div className="flex sm:w-1/2 items-center justify-center lg:gap-20 xl:gap-40 border border-black">
    <img src={categories[counter]?.character_photo} alt="nami" className=" sm:h-50 sm:ml-4 sm:mt-[-1rem] lg:mt-[-5rem]  xl:h-60 xl:ml-[-9rem] xl:mt-[-4rem] border border-black" />
    <img src={categories[counter]?.cover_photo} alt="luffy" className="sm:h-50 sm:mt-[-2rem] xl:h-60 lg:mt-[-5rem]  xl:ml-[-2rem] xl:mt-[-4rem] border border-black" />
  </div>
  <div className="flex sm:w-1/4 items-center justify-center xl:w-0 border border-black"></div>
  <div className="w-full sm:w-1/2  xl:mt-[4rem] border border-black">
    <h3 className="text-white sm:text-2xl font-semibold border border-black">{`${categories[counter]?.name[0].toUpperCase()}${categories[counter]?.name.substring(1)}`}</h3>
    <p className="text-white sm:text-1xl sm:overflow-auto sm:h-20  xl:h-40 border border-black">{categories[counter]?.description}</p>
  </div>
  <div className="flex sm:w-1/4 items-center justify-center border border-black">
    <img onClick={sumar} src={flechader} alt="" className="w-8 h-8 border border-black cursor-pointer" />
  </div>
</div>
</main>


</>
  )
}
