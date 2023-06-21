import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import apiUrl from '../../../api'
import finger1 from '../../../public/img/finger1.png'
import finger2 from '../../../public/img/finger2.png'
import sorprendido from '../../../public/img/sorprendido.png'
import love from '../../../public/img/love.png'
import { useSelector, useDispatch } from 'react-redux'
import action_manga from '../../store/actions/manga_one'
import action_chapter from '../../store/actions/chapter_one'
import { Link as Anchor } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import store from '../../store/store'
const { manga_one } = action_manga
const { chapter_one } = action_chapter
//objeto con todas las acciones 
export default function Manga() {
  const navigate = useNavigate()

/* let store=useSelector(store =>console.log(store)) */


   let storeManga = useSelector(store=>store.manga)
  let storeChapter=useSelector(store=>store.chapter)
  console.log(storeManga);
  console.log(storeChapter); 



   

  const { id } = useParams()
  console.log(id);
    const {page} =useParams () 
  /*  let [page,setpages]=useState() */
     console.log(page);  
 


  const dispatch = useDispatch()
  //con useselector seleccione los estados que necesito
  let [cantPages, setCanpages] = useState(0)
  let [count, setCount] = useState(0)
  let [chapters, setChapters] = useState([{ data: [], totalPages: 1 }])
  let [mangas, setMangas] = useState([]);
  const [pageChange, setPage] = useState(Number(page))


  useEffect(() => {
    axios(`${apiUrl}mangas/${id}`)
      .then(res => {
        setMangas(res.data.response)
        dispatch(manga_one({
          title: res.data.response.title,
          cover_photo: res.data.response.cover_photo,
          description: res.data.response.description
        }))
      })
      .catch(err => console.log(err))
  }, [id])
  const [reload, setReload] = useState(false)

  function NEXT() {
    setPage(prevPage => prevPage + 1)
    setReload(!reload)
    navigate(`/manga/${id}/${pageChange+1}`) 


  }
  function PREV() {
    if (pageChange > 1) {
      setPage(prevPage => prevPage - 1)
      setReload(!reload);
      navigate(`/manga/${id}/${pageChange-1}`)

    }
  }

  useEffect(() => {
    axios.get(apiUrl + `chapters?manga_id=${id}&page=${page}&limit=4`)

      .then(res => {
        const data = res.data.response
        setChapters(data)
        dispatch(chapter_one(data))
        setCount(res.data.count)
        setCanpages(res.data.cantPages)


      })
      .catch(err => console.log(err))
  },
    [id, pageChange, reload]
  )




  let [showMangaContent, setShowMangaContent] = useState(true);


  return (
    <>

      {showMangaContent ? (
        <div className='  mt-24  min-h-screen w-full flex flex-col justify-center items-center sm:mt-24'>
          <div className='flex flex-col sm:flex-row w-full justify-around items-center min-h-screen '>

          <img className=' sm:mt-16  rounded-2xl w-[90%]   object-cover  sm:w-[30%]   ' src={mangas.cover_photo} />
          <div className='flex flex-col sm:w-[60%]   sm:h-[50%] items-center '>

          <h2 className='w-[90%] text-4xl text-center mt-5 sm:text-5xl text-[#222222] '>{mangas.title}</h2>
          <p></p>
          <div className='w-[90%] flex justify-between mt-3'>
            <button className='bg-[#FFE0DF] text-[#EF8481] rounded-xl w-16 h-9 text-lg sm:text-3xl sm:w-24 sm:h-11 '>{mangas.category_id?.name}</button>
            <Anchor to={`/author/${mangas?.author_id?._id}`} > <h3 className='sm:text-3xl'>{mangas.author_id?.name}</h3> </Anchor>
          </div>

          <div className='flex justify-evenly w-full mt-8 '>
            <img className='h-12 sm:h-24' src={finger1} alt="" />
            <img className='h-12 sm:h-24' src={finger2} alt="" />
            <img className='h-12 sm:h-24' src={sorprendido} alt="" />
            <img className='h-12 sm:h-24' src={love} alt="" />
          </div>
          <div className=' bg-[#EBEBEB] drop-shadow-2xl mt-4 flex justify-evenly items-center content-center h-20  w-[90%] rounded-2xl sm:h-24 sm:mt-14 '>
            <div className=' flex flex-col '>
              <h2 className=' font-bold sm:text-3xl '>4.5/5</h2>
              <h6 className=' sm:text-xl'>Rating</h6>
            </div>
            <div className=' flex flex-col  items-center '>
              <h2 className=' font-bold sm:text-3xl'>265</h2>
              <h6 className=' sm:text-xl'>Chapters</h6>
            </div>
            <div className=' flex flex-col items-center'>
              <h2 className=' font-bold sm:text-3xl'>Eng</h2>
              <h6 className=' sm:text-xl'>Lenguage</h6>
            </div >
          </div>
          <div className='mt-8 h-7 w-[90%] sm:w-[80%] flex justify-around  rounded-lg sm:h-16 sm:mt-20  '>
            <button className={` w-[50%] rounded-lg sm:text-xl sm:rounded-3xl text-white ${showMangaContent && "bg-[#F97316]"}`} onClick={() => setShowMangaContent(true)}>Mangas</button>
            <button className={` w-[50%] rounded-lg sm:text-xl sm:rounded-3xl text-[#9D9D9D] ${!showMangaContent && "bg-[#EBEBEB]"}`} onClick={() => setShowMangaContent(false)}>Chapters</button>
          </div>

          <h2 className='mt-5 h-[25rem] overflow-scroll   w-[80%] sm:text-2xl sm:mt-9'>{mangas.description}</h2>
          </div>
          </div>

        </div>) : (

        <div className='mt-20  min-h-screen w-full flex flex-col justify-center items-center sm:mt-32'>
 <div className='flex flex-col sm:flex-row w-full justify-around items-center  sm:items-start min-h-screen '>

          <img className=' sm:mt-16  rounded-2xl w-[90%]   object-cover  sm:w-[20vw]  sm:h-full' src={mangas.cover_photo} />
          <div className='flex flex-col w-[90%] sm:w-[50%]  items-center  '>

          <h2 className='w-[90%] text-2xl text-center mt-5 sm:text-5xl text-[#222222] sm:mt-10'>Chapters</h2>
          <div className='mt-8 h-7 w-[90%] sm:w-[80%] flex justify-around  rounded-lg sm:h-20 sm:mt-20 ' >
            <button className={` w-[50%] rounded-lg sm:text-xl sm:rounded-3xl text-[#9D9D9D] ${showMangaContent & ""}`} onClick={() => setShowMangaContent(true)}>Mangas</button>
            <button className={` w-[50%] rounded-lg sm:text-xl sm:rounded-3xl text-white ${!showMangaContent && "bg-[#F97316]"}`} onClick={() => setShowMangaContent(false)}>Chapters</button>
          </div>
          <div className='w-[100%]'>
            {chapters.map((chapt) => (
              <div className='w-[100%] sm:mb-20 h-28 flex justify-evenly  items-center   sm:mt-32' key={chapt.title}>
                <img className='h-16 w-[30%] sm:h-32 sm:w-[15%]  bg-cover rounded-xl  ' src={chapt.cover_photo} alt="" />
                <div className='flex flex-col justify-between  w-[20%]   h-16'>
                  <div className='flex justify-center'>
                    <h2 className='sm:text-xl items'>{chapt.title}</h2>
                    <h2>{chapt.order}</h2>
                  </div>
                  <div className='flex   justify-center   '>
                    <p className='  sm:w-10  '>...</p>
                    <p className=' '>401</p>
                  </div>
                </div >
                <div className=' w-[30%]  sm:w-[15%]'>
                  {chapt._id && <button onClick={() => navigate(`/chapters/${chapt._id}/0`)} className='rounded-full bg-orange-600 h-14 w-24 sm:w-[100%] sm:h-20 sm:text-xl text-white  text-lg'>Read</button>}
                </div>
              </div>
            )

            )}

            {count >= 5 && <div className='mb-10  flex justify-around'>
              {pageChange != 1 && <input className={`w-20 h-6 bg-[#F97316] rounded-2xl mt-5 text-white sm:w-40 sm:h-11`} type="button" value='previus' onClick={PREV}></input>}
              {pageChange != cantPages && <input className={`w-20 h-6 bg-zinc-600 rounded-2xl mt-5 text-white sm:w-40 sm:h-11`} type="button" value='next' onClick={NEXT}></input>}
            </div>}
          </div>
          </div>
          </div>
        </div>

      )}

    </>
  )
}



