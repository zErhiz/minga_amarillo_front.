import actioGetme from "../../store/actions/getme.js"
import Swal from "sweetalert2"
// import edit_chapter from '../../store/reducers/edith_chapter.js'
import { useParams } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"

const {getData, getInfo, upd_chapter,delete_chapter} = actioGetme 

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
  
  setOrderToEdit(Number(e.target.value)-1 )
  setSelectedChapter(e.target[Number(e.target.value)-1].id)
  // console.log(e);
}

function handleChange(e) {
  setData(e.target.value)
}  

  
  useEffect(()=> {
    if(readChapter){
      setChapterData(readChapter)
    }
  },
    [readChapter]
  )
let showAlert = (title, httCB ) => {

  Swal.fire({
    title: 'Do you want to delete the chapter?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Delate',
    denyButtonText: `Don't Delete`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      httCB()
      Swal.fire('Delete!!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })

}

 

// console.log(data);  
// console.log(orderToEdit)
  return (
    <>
      <div className="w-screen h-screen flex">
      <div className="w-[50vw] h-[100vh]  flex flex-col justify-center items-center max-md:w-[100vw]">
          <p className="text-black text-3xl"> Edith Chapter </p>
          <form action="" className="h-[70vh] flex flex-col justify-center items-center gap-4 max-md:gap-6">
            <p type="text" className="border-b border-black px-4 w-[20vw] h-[6vh] max-md:w-[50vw]"> {readChapter[orderToEdit]?.manga_id.title}</p>
            <select className='border-b border-black px-4 w-[20vw] h-[6vh] max-md:w-[50vw]' name="" id="" placeholder=''  onChange={handleSelect }  >

{/* {data === null && <option value="">Seleccione uno</option>} */}
              {
                readChapter?.map(read => {
                  
                  return (<option key={read?._id} id={read?._id}  value={read?.order} >{read?.order} </option>)
                })
              }
            </select>
            <select className='border-b border-black px-4 w-[20vw] h-[6vh] max-md:w-[50vw]'  onChange={handleChange } >
              <option> Cover_photo  </option>
              <option> Pages  </option>
              <option> Title  </option>
             
            </select>
          
            <input type="text" className="border-b border-black px-4  w-[20vw] h-[6vh] max-md:w-[50vw]" placeholder="data to edit" />
            <input className="text-white   rounded-full bg-green-500 w-[15vw] h-[8vh] max-md:w-[45vw]" type="submit"  value="Edith"/>
            <input className="text-red-500  rounded-full bg-red-200 w-[15vw] h-[8vh] max-md:w-[45vw]" type="button"  value="Delete" onClick={()=>showAlert('Want to dele chapter', () => dispatch(delete_chapter({id:selectedChapter,manga_id})))}/>
            
          </form>
        </div>
        <div className="w-[50vw] h-[100vh] flex flex-col justify-center items-center gap-2 max-md:hidden">
          <p className="text-black">{readChapter[orderToEdit]?.title} </p>
          <img src={readChapter[orderToEdit]?.cover_photo} alt="" className="bg-cover h-[70vh]" />
        </div>
        
      </div>
    </>
  )
}

