import React from 'react'
import axios from 'axios'
import { useEffect,useState} from 'react'
import apiUrl from '../../../api'
import { useParams } from 'react-router-dom'
import finger1 from '../../../public/img/finger1.png'
import finger2 from '../../../public/img/finger2.png'
import sorprendido from '../../../public/img/sorprendido.png'
import love from '../../../public/img/love.png'
import { useSelector,useDispatch } from 'react-redux'
import action_manga from '../../store/actions/manga_one'
import action_chapter from '../../store/actions/chapter_one'

const {manga_one}=action_manga
const {chapter_one}=action_chapter

 //objeto con todas las acciones 
export default function Manga() {

  let store=useSelector(store=>console.log(store))
  const dispatch = useDispatch()
  //con useselector seleccione los estados que necesito
  
  let [chapter,setChapter]= useState([{data:[],totalPages:1}])
  let [mangas, setMangas] = useState([]);
  



   const params = useParams()
  const {id}= useParams()

  const [page,setPage]=useState(1)
  const [reload,setReload]=useState(false)
  
  
      function NEXT(){
        setPage(prevPage=>prevPage +1)
        setReload(!reload)
      }
      function PREV() {
        if (page > 1) {
          setPage(prevPage=>prevPage -1)
          setReload(!reload);
        }
      }


useEffect(() => {
  axios.get(apiUrl+`chapters?manga_id=${id}&page=${page}&limit=4`)
    .then(res =>  {const data=res.data.all
            setChapter(data)
            data.map(chapter =>{
              dispatch(chapter_one({
                title:chapter.title,
                order:chapter.order,
                cover_photo:chapter.cover_photo,
              }))
            })})
    .catch(err => console.log(err))
},
  [id,page,reload]
)


useEffect(() => {
  axios(`${apiUrl}mangas/${id}`)
  .then(res =>{
    setMangas(res.data.response)
    dispatch(manga_one({
      title:res.data.response.title,
      cover_photo:res.data.response.cover_photo,
      description:res.data.response.description
    }))
  } )
  .catch(err => console.log(err))
}, [id])


    let [showMangaContent, setShowMangaContent] = useState(true);


    return (
      <>

{showMangaContent ? (
    <div className='  mt-24  min-h-screen w-screen  flex flex-col justify-center items-center sm:mt-24'>
    
    <img className='  rounded-2xl h-[16rem] w-[90%] sm:bg-cover  sm:w-[50vw] sm:h-[30rem]'  src={mangas.cover_photo}  />  
 
        <h2 className='w-[90%] text-4xl text-center mt-5 sm:text-7xl text-[#222222] '>{mangas.title}</h2>
        <p></p>
        <div className='w-[90%] flex justify-between mt-3'>
            <button className='bg-[#FFE0DF] text-[#EF8481] rounded-xl w-16 h-9 text-lg sm:text-3xl sm:w-24 sm:h-11 '>{mangas.category_id?.name}</button> 
            <h3 className='sm:text-3xl'>{mangas.author_id?.name}</h3>
        </div>
        <div className='flex justify-evenly w-full mt-8 '>
       <img className= 'h-12 sm:h-24' src={finger1}alt="" />
        <img className= 'h-12 sm:h-24' src={finger2}alt="" />
        <img className= 'h-12 sm:h-24'src={sorprendido}alt="" />
         <img className= 'h-12 sm:h-24'src={love} alt="" />
        </div>
        <div className=' bg-[#EBEBEB] drop-shadow-2xl mt-4 flex justify-evenly items-center content-center h-20  w-[90%] rounded-2xl sm:h-24 '>
        <div   className=' flex flex-col '>
            <h2 className=' font-bold sm:text-3xl '>4.5/5</h2>
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
        <div className='mt-8 h-7 w-[90%] sm:w-[80%] flex justify-around  rounded-lg sm:h-16  '>
        <button className={` w-[50%] rounded-lg sm:text-xl sm:rounded-3xl text-white ${showMangaContent && "bg-[#F97316]"}`} onClick={() => setShowMangaContent(true)}>Mangas</button>
        <button className={` w-[50%] rounded-lg sm:text-xl sm:rounded-3xl text-[#9D9D9D] ${!showMangaContent && "bg-[#EBEBEB]"}`} onClick={() => setShowMangaContent(false)}>Chapters</button>
        </div>

        <h2 className='mt-5 h-[25rem]  w-[80%] sm:text-2xl sm:mt-9'>{mangas.description}</h2> 

</div>):(

      <div className='mt-20  min-h-screen w-screen  flex flex-col justify-center items-center sm:mt-24'>
    <img className='rounded-2xl   h-[16rem] w-[90%] sm:bg-cover  sm:w-[50vw] sm:h-[30rem]'src={mangas.cover_photo}/>
  <h2 className='w-[90%] text-4xl text-center mt-5 sm:text-7xl text-[#222222] '>Chapters</h2>
  <div className='mt-8 h-7 w-[90%] sm:w-[80%] flex justify-around  rounded-lg sm:h-20 ' >
  <button className={` w-[50%] rounded-lg sm:text-xl sm:rounded-3xl text-[#9D9D9D] ${showMangaContent &""}`} onClick={() => setShowMangaContent(true)}>Mangas</button>
  <button className={` w-[50%] rounded-lg sm:text-xl sm:rounded-3xl text-white ${!showMangaContent && "bg-[#F97316]"}`} onClick={() => setShowMangaContent(false)}>Chapters</button>
  </div>
  <div>
    {chapter.map((chapt)=>(
      <div className='w-screen sm:mb-20 h-28 flex justify-evenly  items-center  sm:mt-10'  key={chapt.title}>
      <img className='h-16 w-20 sm:h-40 sm:w-44  bg-cover rounded-xl  ' src={chapt.cover_photo} alt="" />
      <div className='flex flex-col justify-between k w-[33%]  h-16'>
        <div className='flex justify-center'>
          <h2 className='sm:text-2xl items'>{chapt.title}</h2>
          <h2>{chapt.order}</h2>
        </div>
        <div className='flex   justify-center   '>
          <p className='  sm:w-10  '>...</p>
          <p className=' '>401</p>
        </div>
      </div >
      <div className=' w-[30%]  sm:w-[15%]'>
        <button className='rounded-full bg-orange-600 h-16 w-24 sm:w-40 sm:h-28 sm:text-3xl text-white  text-lg'>Read</button>
        </div>
      </div>
    )
    
    )} 
   <div className='  flex justify-around'>
   {page != 1 &&<input className={`w-20 h-6 bg-[#F97316] rounded-2xl text-white sm:w-40 sm:h-11`} type="button" value='previus' onClick={PREV}></input>}
   {chapter && chapter.length > 0 && chapter[chapter.length - 1].totalPages !== page && <input className={`w-20 h-6 bg-zinc-600 rounded-2xl text-white sm:w-40 sm:h-11`} type="button" value='next' onClick={NEXT}></input>}


   </div>
  </div>
</div>

)}

          </>
  )
}



 