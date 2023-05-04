
import { useRef } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import Swal from "sweetalert2"
import apiUrl from "../../../api.js"
import Error from "./Error.jsx"
import { Link as Anchor, useNavigate } from "react-router-dom";
export default function ChapterForm() {
const navigate = useNavigate();
let title = useRef()
let order = useRef()
let pages = useRef()
let user = localStorage.getItem("user");

let role = JSON.parse(localStorage.getItem('user'))?.role
let token = localStorage.getItem("token");

async function handleForm(e){
  e.preventDefault()

  
  let token = localStorage.getItem('token')
  let headers = { headers: { 'Authorization': `Bearer ${token}` } }

  let data = {

    title: title.current.value,
    pages: (pages.current.value).split(','),
    order: order.current.value  
  }
  try {
    await axios.post(apiUrl + "chapters", data, headers)
    navigate("/");
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'The chapter was created',
      showConfirmButton: false,
      timer: 2500
    })

  } catch (error) {
    if(error.response.data === "Unauthorized"){
      console.log(error.response.data === "Unauthorized");
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'The user needs to be logged in',
        showConfirmButton: false,
        timer: 2500
      })} else {
        if(typeof error.response.data.message === "string"){
          console.log(typeof error.response.data.message === "string");
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: error.response.data.message,
            showConfirmButton: false,
            timer: 2500
          })
        } else {
          error.response.data.message.forEach(err =>  Swal.fire({
            position: 'center',
            icon: 'error',
            title: err,
            showConfirmButton: false,
            timer: 2500
          })  )
        }
      }
  }
  console.log(data);
}
  return (
    <>
   {role === 1 || role === 2 ?
    <>

    <form onSubmit={(e)=>handleForm(e)} action="" className="w-full h-screen flex flex-col justify-center gap-9 items-center">
      <p className="text-[34px] min-[320px]:w-[65vw] md:text-[40px] sm:mt-[50px] md:mt-[70px] lg:text-[60px] text-center">New Chapter</p>
      <input className="border-b-slate-800 border py-1 px-4 mt-[5px] rounded w-[20%] min-[320px]:w-[65vw] md:h-[40px] lg:h-[60px]" type="text" placeholder="Insert title" ref={title} id='title'/>
      <input className="border-b-slate-800 border  px-4  rounded w-[20%] min-[320px]:w-[65vw] md:h-[40px] lg:h-[60px]" type="text" placeholder="Insert pages" ref={pages} id='pages'/>
      <input className="border-b-slate-800 border  px-4 rounded w-[20%] min-[320px]:w-[65vw] md:h-[40px] lg:h-[60px]" type="text" placeholder="Insert order" ref={order} id='order'/>
      <input className=" py-2 px-4 rounded-full bg-orange-500 w-[15%] text-white min-[320px]:w-[55vw] md:h-[50px] lg:h-[60px]" type="submit"  value="send"/>
    </form>
    </>
    : <Error/>} 
    </>
  )
}
