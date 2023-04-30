
import { useRef } from "react"
import axios from "axios"

export default function ChapterForm() {
    
let title = useRef()
let order = useRef()
let pages = useRef()

// console.log(insertTitle);
// console.log(insertPages);
// console.log(insertOrder);

function handleForm(e){
  e.preventDefault()
  let data = {

    insertTitle: title.current.value,
    insertPages: order.current.value,
    insertOrder: pages.current.value  
  }
  axios.post("http://localhost:8000/chapters", data).then(res=>console.log(res)).catch(error=>console.log(error.response.data))
  console.log(data);
}
  return (
    <>
    <form onSubmit={(e)=>handleForm(e)} action="" className="w-full h-screen flex flex-col justify-center px-28 gap-12 items-center">
      <p className="text-[34px] min-[320px]:w-[65vw] sm:text-[55px] text-center">New Chapter</p>
      <input className="border-b-slate-800 border py-2 px-4 rounded w-[20%] min-[320px]:w-[65vw] md:h-[70px]" type="text" placeholder="Insert title" ref={title} id='title'/>
      <input className="border-b-slate-800 border py-2 px-4 rounded w-[20%] min-[320px]:w-[65vw] md:h-[70px]" type="text" placeholder="Insert order" ref={order} id='order'/>
      <input className="border-b-slate-800 border py-2 px-4 rounded w-[20%] min-[320px]:w-[65vw] md:h-[70px]" type="text" placeholder="Insert pages" ref={pages} id='pages'/>
      <input className=" py-2 px-4 rounded-full bg-orange-500 w-[15%] text-white min-[320px]:w-[55vw] md:h-[70px]" type="submit"  value="send"/>
    </form>
    </>
  )
}
