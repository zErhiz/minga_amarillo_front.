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
  

  const [categories, setCategories] = useState([])
  const [counter, setCounter] = useState(0)

  useEffect(() => {
  
    const valorInterval = setInterval(() => {
      setCounter(prevCounter => {
        if (prevCounter >= categories.length - 1) {
          return 0
        } else {
          return prevCounter + 1
        }
      })
    }, 4000)
    
    
    
    return () => clearInterval(valorInterval)     //detiene el intervalo y evita que se siga inecesariamente
  }, )         
  const arrowPrev = () => {
    setCounter(prevCounter => {
      if (prevCounter === 0) {
        return categories.length - 1
      } else {
        return prevCounter - 1
      }
    })
  }

  const arrowAfter = () => {
    setCounter(prevCounter => {
      if (prevCounter === categories.length - 1) {
        return 0
      } else {
        return prevCounter + 1
      }
    })
  }

  //el hook puede ir aca pero lo correcto es en las primeras lineas
  return (
    <>  <main className="hidden bg-white sm:block sm:p-10 lg:p-16 xl:p-12 "> 
  
    <div className="  flex sm:flex-row justify-between items-center gap-4 lg:gap-20 "style={{ background: `linear-gradient(to bottom, ${categories[counter]?.color}, ${categories[counter]?.hover})` }}>
  <div className="flex sm:w-1/4 items-center justify-center  ">
    <img onClick={arrowPrev}src={flechaizq} alt="" className="w-8 h-8 flex justify-start  cursor-pointer" />
  </div>
  <div className="flex sm:w-1/2 items-center justify-center sm:gap-4 lg:gap-20 xl:gap-40 ">
    <img src={categories[counter]?.character_photo} alt="nami" className=" sm:h-50 sm:ml-4 sm:mt-[-2rem] lg:mt-[-5rem]  xl:h-60 xl:ml-[-9rem] xl:mt-[-4rem] sm:max-w-[80%] sm:max-h-[30vh] sm:min-h-[30vh] md:max-w-[70%] md:max-h-[40vh] md:min-h-[40vh] lg:max-h-[20vh] lg:min-h-[20vh] xl:max-h-[30vh] xl:min-h-[30vh] " />
    <img src={categories[counter]?.cover_photo} alt="luffy" className="sm:h-50 sm:mt-[-2rem] xl:h-60 lg:mt-[-5rem]  xl:ml-[-2rem] xl:mt-[-4rem] sm:max-w-[80%] sm:max-h-[30vh] sm:min-h-[30vh] lg:max-h-[20vh] lg:min-h-[20vh] xl:max-h-[30vh] xl:min-h-[30vh]" />
  </div>
  <div className="flex sm:w-1/4 items-center justify-center xl:w-0 "></div>
  <div className="w-full sm:w-1/2  xl:mt-[4rem] ">
    <h3 className="text-white sm:text-2xl font-roboto font-semibold">{`${categories[counter]?.name[0].toUpperCase()}${categories[counter]?.name.substring(1)}`}</h3>
    <p className="text-white sm:text-1xl sm:overflow-auto sm:h-20  xl:h-40 font-roboto ">{categories[counter]?.description}</p>
  </div>
  <div className="flex sm:w-1/4 items-center justify-center ">
    <img onClick={arrowAfter} src={flechader} alt="" className="w-8 h-8  cursor-pointer" />
  </div>
</div>
</main>


</>
  )
}
