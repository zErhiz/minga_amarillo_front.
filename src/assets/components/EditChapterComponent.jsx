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
  let newChapter = useSelector(store => store.chapters.chapter)
  // console.log(newChapter);
  
  // console.log(readChapter);
  const [orderToEdit, setOrderToEdit] = useState()
  const [data, setData] = useState(null)
  const[newData, setNewData]=useState(null)
  const [chapterData, setChapterData] =useState(null)
  const [selectedChapter, setSelectedChapter] = useState()
  
  
  let infoChapter = readChapter?.length > 0 ? Object.keys(readChapter[0] ): []
  // console.log(infoChapter);
  
  
  
  
  
  useEffect ( () => {
    
    // console.log(getData);
    dispatch(getData({manga_id}))     
    
  },
  [newChapter]
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
  console.log(e.target.value);
}  
// console.log();
function handleInput (e) {
  setNewData(e.target.value)
  console.log(e.target.value);
}

function handleSend (){
  console.log(selectedChapter);
  
  dispatch(upd_chapter({
    manga_id,
    [data]: newData,
    id: selectedChapter

  }))
 
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
    confirmButtonText: 'Delete',
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
let showAlertInput = (title, httCB ) => {

  Swal.fire({
    title: 'Do you want to modify the chapter?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Modify Data',
    denyButtonText: `Don't Modify`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      httCB()
      
      Swal.fire('Modify', '', 'success')
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
          <p className="text-black text-3xl"> Edit Chapter </p>
          <form action="" className="h-[70vh] flex flex-col justify-center items-center gap-4 max-md:gap-6">
            <p type="text" className="border-b border-black px-4 w-[20vw] h-[6vh] max-md:w-[50vw]"> {readChapter[orderToEdit]?.manga_id.title}</p>
            <select className='border-b border-black px-4 w-[20vw] h-[6vh] max-md:w-[50vw]' name="" id="" placeholder=''  onChange={handleSelect }  >

             {data === null && <option value="">Selection one</option>}
              {
                readChapter?.map(read => {
                  
                  return (<option key={read?._id} id={read?._id}  value={read?.order} >{read?.order} </option>)
                })
              }
            </select>
            <select className='border-b border-black px-4 w-[20vw] h-[6vh] max-md:w-[50vw]'  onChange={handleChange } >
            {data === null && <option value="">Selection one</option>}
              {infoChapter?.map((chapter,i) => {
                if(chapter !== "manga_id" && chapter !== "_id"){
                  return (
                    <option key={i} value={chapter}>{chapter} </option>
                  )
                }
              } )}
             
            </select>
          
            <input type="text" className="border-b border-black px-4  w-[20vw] h-[6vh] max-md:w-[50vw]" placeholder="data to edit" defaultValue={newData} onChange={handleInput} />
            <input className="text-white   rounded-full bg-green-500 w-[15vw] h-[8vh] max-md:w-[45vw]" type="button"  value="Edith"  onClick={()=>showAlertInput('Want to dele chapter', () => handleSend() )}/>
            <input className="text-red-500  rounded-full bg-red-200 w-[15vw] h-[8vh] max-md:w-[45vw]" type="button"  value="Delete" onClick={()=>showAlert('Want to dele chapter', () => dispatch(delete_chapter({id:selectedChapter,manga_id})))}/>
            
          </form>
        </div>
        <div className="w-[50vw] h-[100vh] flex flex-col justify-center items-center gap-2 max-md:hidden">
          <p className="text-black">{readChapter[orderToEdit]?.title} </p>
          <img src={readChapter[orderToEdit]?.cover_photo} alt="" className="w-[40vw] h-[70vh] object-contain" />
        </div>
        
      </div>
    </>
  )
}

