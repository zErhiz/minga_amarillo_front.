import React from 'react'
import ImageProfile from '../../../public/img/imageprofile.png'
import { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../../api'
import { useParams } from 'react-router-dom'
function AuthorProfile() {
  const {id} = useParams()
  console.log(id)
    useEffect(
        ()=>{axios(apiUrl+`authors/${id}`).then(res=>setAuthors(res.data.response)).catch(err=>(console.log(err)))},
        []   //array de dependencias vacio ya que necesitamos fetchear una unica vez al montarse el componente (ydespues los datos no van a cambiar)
      )
      const [authors, setAuthors] = useState(null)
      console.log(authors)
  return (
    <>
    {authors && (
    <div className='flex flex-col items-center h-[40vh] justify-end border border-red-500 sm:bg-bgauthors sm:bg-cover sm:bg-center sm:bg-no-repeat -mt-8'>
        <div className='flex flex-row   justify-between lg:px-40 2xl:px-80 border border-black items-center w-[90%] h-[20vh]  '>
            <img className='h-[80%] w-[25vw] 2xl:w-[8vw] xl:w-[15vw] lg:w-[19vw] sm:w-[15vw] rounded-full  object-cover object-center' src={authors.photo} alt="" />
            <div className='text-center'>
                <h1 className='text-[#000000] sm:text-white sm:text-2xl'>{authors.name},{authors.last_name}</h1>
                <h2 className='text-[#9D9D9D] font-semibold sm:text-white sm:text-2xl sm:font-normal'>{authors.city},{authors.country} </h2>
                <h2 className='text-[#9D9D9D] sm:text-white sm:text-2xl'>{authors.date}</h2>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>

        </div>
        <div className='border border-b-black w-[90%]'> <p className='text-[#9D9D9D] overflow-scroll w-76 h-6 sm:text-white lg:text-center '>dasdasddasdasdasdasdasdasdasdasdsadasdasdasd dsadasda  </p>
        </div>
    </div>) }
    </>
  )
}

export default AuthorProfile