import React,{useRef, useState, useEffect}from 'react'
import { Link as Anchor, useNavigate } from "react-router-dom";
import axios from 'axios'
import swal from 'sweetalert2';
import apiUrl from "../../../api";
import Error from './Error';
function Formulario() {
  const navigate = useNavigate();

let [categories, setCategories] = useState([]);

useEffect(() => {
  axios(apiUrl+'categories')
    .then(res => setCategories(res.data.categories))
    .catch(err => console.log(err));
}, []);
console.log();
const category = () => {
  return categories.map(categoria => (
    <option key={categoria._id} value={categoria._id}>
      {categoria.name}
    </option>
  ))
}
let token = localStorage.getItem('token')
let headers = { headers: { 'Authorization': `Bearer ${token}` } }

let role = JSON.parse(localStorage.getItem('user'))?.role
    let title= useRef();
    let category_id= useRef();
    let description= useRef();
    let cover_photo=  useRef();


  const handleSubmit = (e) => {
    e.preventDefault()
    //capturo los datos del formulario
    let formData = new FormData();
    formData.append('title', title.current.value),
    formData.append('category_id', category_id.current.value),
    formData.append('description', description.current.value),
    formData.append('cover_photo',cover_photo.current.files[0] )
        
      
      if (title.current.value === '' || category_id.current.value === '' || description.current.value === ''||cover_photo.current.files[0]==='') {
        swal.fire({
        title:"opps ",
        text:"you have to fill in the fields",
        icon:"error"
      })
        return;
      }else{
        swal.fire({
          title:'your new manga has been sent successfully',
          icon:"success"
        })
      }

     
    axios.post(apiUrl +'mangas', formData,headers)
     .then(res=> { navigate("/"); console.log(res);})
     .catch((error) => {  if(error.response.data === "Unauthorized"){
      console.log(error.response.data === "Unauthorized");
      swal.fire({
        position: 'center',
        icon: 'error',
        title: 'The user needs to be logged in',
        showConfirmButton: false,
        timer: 2500
      })}
      else {
        if(typeof error.response.data.message === "string"){
          console.log(typeof error.response.data.message === "string");
          swal.fire({
            position: 'center',
            icon: 'error',
            title: error.response.data.message,
            showConfirmButton: false,
            timer: 2500
          })
        } else if (Array.isArray(error.response.data.message)) {
          error.response.data.message.forEach(err => {
            swal.fire({
              position: 'center',
              icon: 'error',
              title: err,
              showConfirmButton: false,
              timer: 2500
            });
          });
        }
      }

 } )
    
  }


  return (
     <>
     { role ===1 || role === 2 ?(  
    <div  className=' mt-20  sm:mt-36 w-screnn h-screen  flex flex-col justify-center items-center'>
          <h2 className='h- text-3xl text-orange-500  sm:text-6xl'> New Manga</h2>
    <form  className='w-[80%] mt-5 sm:mt-10  h-screen  flex flex-col justify-center items-center content-center' encType="multipart/form-data" method="post"  onSubmit={handleSubmit} >
      <div className='  sm:w-[50%] sm:mt-20 0 h-[60%] flex flex-col justify-around items-center'>
      <label>
        <input ref={title}  className= ' w-44      sm:w-[60vh] border-b border-black px-4 sm:text-2xl '  type="text" placeholder="Insert Title"
        />
      </label>
      <label placeholder='insert photo' htmlFor=""><label  className=''>
    <input name='cover_photo'  className='peer block min-h-[auto] w-full rounded border-0 bg-neutral-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:bg-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' type="file" placeholder='url' ref={cover_photo}/> 
      </label>
      
   
      <select
    className='w-44 sm:mt-5 sm:w-[60vh] border-b border-black px-4 sm:text-2xl'
    ref={category_id}>
    <option>
        insert category
            </option>
        {category()}
</select>
      </label>
      <label>
        <textarea className=' w-44 sm:mt-5 sm:mb-[2rem] sm:w-[60vh] border-b border-black px-4 sm:text-2xl '  placeholder="Insert Description" ref={description}
        />
      </label>
      </div>
      <div className='h-[40%] flex  justify-center items-center'>
      <button className=' w-44 h-10  text-white sm:text-2xl bg-orange-600 sm:h-16  sm:w-72 rounded-3xl' type="submit">Send</button>
      </div>   
   </form>
 
    </div>
   ): <Error/>} </>   )
}

export default Formulario         
















