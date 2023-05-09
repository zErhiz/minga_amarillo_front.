import React from 'react'
import axios from 'axios'
import { useEffect,useState} from 'react'
import apiUrl from '../../../api'
import { useParams } from 'react-router-dom'
import finger1 from '../../../public/img/finger1.png'
import finger2 from '../../../public/img/finger2.png'
import sorprendido from '../../../public/img/sorprendido.png'
import love from '../../../public/img/love.png'



export default function Manga() {

 /* const {id}= useParams()  */ 

  let [chapter,setChapter]= useState([])
useEffect(()=>{
    axios(apiUrl+'chapters')
    .then(res => setChapter(res.data.response))
    .catch(err=>console.log(err))
},[]) 
console.log(chapter);
 

 
  let [mangas, setMangas] = useState([]);
  useEffect(() => {
      axios(`${apiUrl}mangas/645521454883c503d5e515dd`)
      .then(res => setMangas(res.data.response))
      .catch(err => console.log(err))
    }, [])

    
    
    
    
    
    
   
    let [showMangaContent, setShowMangaContent] = useState(true);
    return (
      <>


{showMangaContent ? (
    <div className='mt-24  min-h-screen w-screen  flex flex-col justify-center items-center sm:mt-24'>
    
    <img className='h-[16rem] w-[90%] bg-cover rounded-xl sm:w-[50vw] sm:h-[22rem]'  src={mangas.cover_photo}  />  
 
        <h2 className='w-[90%] text-4xl text-center mt-5 sm:text-7xl '>{mangas.title}</h2>
        <div className='w-[90%] flex justify-between mt-3'>
            <button className=' bg-cyan-400 rounded-xl w-14 h-7 sm:text-3xl  '>{mangas.category_id?.name}</button> 
            <h3 className='sm:text-3xl'>{mangas.author_id?.name}</h3>
        </div>
        <div className='flex justify-evenly w-full mt-8 '>
       <img className= 'h-12 sm:h-24' src={finger1}alt="" />
        <img className= 'h-12 sm:h-24' src={finger2}alt="" />
        <img className= 'h-12 sm:h-24'src={sorprendido}alt="" />
         <img className= 'h-12 sm:h-24'src={love}a lt="" />
        </div>
        <div className='mt-4 flex justify-evenly items-center content-center h-20 w-[90%] border border-black rounded-2xl sm:h-32 '>
        <div className=' flex flex-col '>
            <h2 className=' font-bold sm:text-3xl'>4.5/5</h2>
            <h6 className=' sm:text-xl'>Rating</h6>
        </div>
        <div className=' flex flex-col  items-center '>
            <h2 className=' font-bold sm:text-3xl'>265</h2>
            <h6 className=' sm:text-xl'>Chah6ters</h6>
        </div>
        <div className=' flex flex-col items-center'>
            <h2 className=' font-bold sm:text-3xl'>Eng</h2>
            <h6 className=' sm:text-xl'>Lenguage</h6>
        </div >
        </div>
        <div className='mt-8 w-[90%] flex justify-around  rounded-lg sm:h-20 '>
        <button className={`bg-slate-500 w-[50%] rounded-lg sm:text-xl sm:rounded-3xl ${showMangaContent && "bg-slate-600"}`} onClick={() => setShowMangaContent(true)}>Mangas</button>
        <button className={`bg-orange-600 w-[50%] rounded-lg sm:text-xl sm:rounded-3xl ${!showMangaContent && "bg-orange-500"}`} onClick={() => setShowMangaContent(false)}>Chapters</button>
        </div>

        <h2 className='mt-5 h-[25rem]  w-[80%] sm:text-4xl sm:mt-9'>{mangas.description}</h2> 

</div>):(

      <div className='mt-20  min-h-screen w-screen  flex flex-col justify-center items-center sm:mt-24'>
    <img className='h-[16rem] w-[90%] bg-cover rounded-xl sm:w-[50vw] sm:h-[22rem]'src={mangas.cover_photo}/>
  <h2>Chapters</h2>
  <div className='mt-8 w-[90%] flex justify-around  rounded-lg sm:h-20 ' >
  <button className={`bg-slate-500 w-[50%] rounded-lg sm:text-xl sm:rounded-3xl ${showMangaContent && "bg-slate-600"}`} onClick={() => setShowMangaContent(true)}>Mangas</button>
  <button className={`bg-orange-600 w-[50%] rounded-lg sm:text-xl sm:rounded-3xl ${!showMangaContent && "bg-orange-500"}`} onClick={() => setShowMangaContent(false)}>Chapters</button>
  </div>
  <img className='h-[16rem] w-[90%] bg-cover rounded-xl sm:w-[50vw] sm:h-[22rem]'src={mangas.cover_photo}/>
</div>
)}

          </>
  )
}

/* bg-[-#FFE0DF] */