
import EditChapterSection1 from "./EditChapterSection1"
import EditChapterSection2 from "./EditChapterSection2"
import naruto from "../../../public/img/naruto.png"
import actioGetme from "../../store/actions/getme.js"
// import edit_chapter from '../../store/reducers/edith_chapter.js'
import { useParams } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"

const {getData, getInfo} = actioGetme 

export default function EditChapterComponent() {
  const dispatch = useDispatch()
  
  const params = useParams()
  
  const {manga_id} = params
  
  let readChapter = useSelector(store => store.chapters.chapters)
  console.log(readChapter);
  const [orderToEdit, setOrderToEdit] = useState()
  const [data, setData] = useState(null)
  const [chapterData, setChapterData] =useState(null)
  const [selectedChapter, setSelectedChapter] = useState()
  
  
  
  
  
  
  
  useEffect ( () => {
    
    // console.log(getData);
    dispatch(getData({manga_id}))     
    
  },
  []
  )
//   useEffect(() => {
//     if (readChapter?.length > 0) {
//         let chapter = readChapter.find(data => data.order === orderToEdit)
//         setSelectedChapter(chapter)
//         dispatch(getInfo({ order: orderToEdit, chapter }))
//     }
// }, [orderToEdit])

function handleSelect(e)  { 
  setOrderToEdit(Number(e.target.value)-1 )}

  
  useEffect(()=> {
    if(readChapter){
      setChapterData(readChapter)
    }
  },
    [readChapter]
  )
  
console.log(orderToEdit)
  return (
    <>
      <div className="w-screen h-screen flex">
      <div className="w-[50vw] h-[100vh]  flex flex-col justify-center items-center max-md:w-[100vw]">
          <p className="text-black text-3xl"> Edit Chapter </p>
          <form action="" className="h-[70vh] flex flex-col justify-center items-center gap-4 max-md:gap-6">
            <p type="text" className="border-b border-black px-4 w-[20vw] h-[6vh] max-md:w-[50vw]"> {readChapter[orderToEdit]?.manga_id.title}</p>
            <select className='border-b border-black px-4 w-[20vw] h-[6vh] max-md:w-[50vw]' name="" id="" placeholder=''  onChange={handleSelect }  >

{/* {data === null && <option value="">Seleccione uno</option>} */}
              {
                readChapter?.map(read => {
                  
                  return (<option key={read?._id} value={read?.order} >{read?.order}</option>)
                })
              }
            </select>
            <select className='border-b border-black px-4 w-[20vw] h-[6vh] max-md:w-[50vw]'   >
              <option>
                 select data
              </option>
            </select>
          
            <input type="text" className="border-b border-black px-4  w-[20vw] h-[6vh] max-md:w-[50vw]" placeholder="data to edit" />
            <input className="text-white   rounded-full bg-green-500 w-[15vw] h-[8vh] max-md:w-[45vw]" type="submit"  value="Edith"/>
            <input className="text-red-500  rounded-full bg-red-200 w-[15vw] h-[8vh] max-md:w-[45vw]" type="button"  value="Delete"/>
            
          </form>
        </div>
        <div className="w-[50vw] h-[100vh] flex flex-col justify-center items-center gap-2 max-md:hidden">
          <p className="text-black">{readChapter[orderToEdit]?.title} </p>
          <img src={readChapter[orderToEdit]?.cover_photo} alt="" className="bg-cover h-[70vh]" />
        </div>
        {/* <EditChapterSection1/> */}
        {/* <EditChapterSection2/> */}
      </div>
    </>
  )
}

