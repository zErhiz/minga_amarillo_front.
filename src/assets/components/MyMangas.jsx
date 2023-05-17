import { useEffect, useState, useRef } from "react";
import pencil from '../../../public/img/pencil.png'
import further from '../../../public/img/further.png'
import Swal from "sweetalert2";
import { useSelector,useDispatch } from "react-redux";
import { Link as Anchor } from "react-router-dom";
import categories_actions from '../../store/actions/categories'
import mangas_actions from '../../store/actions/manga'
import store from "../../store/store";
import EditManga from "./EditManga";


let {categories_read}=categories_actions
let {manga_read,manga_delete}=mangas_actions
export default function MyMangas() {
  const dispatch = useDispatch()

    let categories =useSelector(store=>store.categories.categories)
     console.log(categories); 
     let mangas =useSelector(store=>store.mangas.mangas)
     console.log(mangas);

    let title = useRef();
    let description = useRef();
    let cover_photo = useRef()
    let category_id = useRef();
   
    useEffect(() => {
        if(mangas.length===0){

            dispatch(categories_read())
            dispatch(manga_read())
        }
    },[])


const [open,setOpen]=useState(false)


 
    const alertEdit = () => {
        setOpen(true);
      }

    const alertDelete = ({id}) => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(manga_delete({id}))
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
              }
            })
      }
    









/* let rute=()=>{
    navigate(``)
} */



    /* let [categories, setCategories] = useState([]);
    
    console.log(category()); */

    /*  useEffect()
    const form = (e) => {
        e.preventDefault()
        //capturo los datos del formulario
        */
   /*  const data = {
        title: title.current.value,
        description: description.current.value,
        cover_photo: cover_photo.current.value,
        category_id: category_id.current.value,
    } */

let AuthorName=mangas.find(m =>m.author_id)?.author_id.name
 let borderColor=categories.map(c=>c.hover) 
    return (
     <div className='min-h-screen flex flex-col justify-center items-center '>
       <div className="bg-bgfavourites  w-full h-[70vw] sm:h-[25vw] flex flex-col justify-center items-center bg-cover bg-top sm:bg-center">
          
            <h2 className=" text-2xl text-white font-bold ">{AuthorName}</h2>
         
          </div>
          <div className=" flex flex-col justify-around content-center sm:items-center   rounded-t-[3rem] bg-white m-h-[30vh]  z-20 w-full relative bottom-9 ">
          <div className="flex  gap-4 p-6 w-[100%] justify-center items-center border border-black">
         <form ref={category_id}>
           {categories &&
             categories.map((category) => (
               <label
                 htmlFor={category._id}
                 key={category._id}
                 style={{
                    color: category.color,
                   backgroundColor: category.hover,
                   padding: "0.3rem",
                   borderRadius: "20px",
                 }}
               >
                 {category.name}
                 <input className="gap-6"
                   defaultChecked={ categories.includes(category._id)}
                   name="category_id"
                   /*  onChange={checkbox} */
                   type="checkbox"
                   value={category._id}
                   id={category._id}
                 />
               </label>
             ))}
         </form>
       </div>
       <div className="flex flex-col lg:w-2/3 sm:flex sm:flex-wrap sm:flex-row justify-center items-center content-center  border border-orange-500 ">
        {mangas.map((manga)=>(
           
        <div className='border-l-4   w-72 sm:w-80 h-32 flex rounded-2xl mt-7  shadow-xl border sm:m-5' >
            <p className=""></p>
            <div className="w-[60%] h-32 ">
            <div className="h-[20%] flex items-center ml-3">
                <img /* onClick={} */ className="h-3 object-cover" src={further} alt="" />
                <img  /* onClick={} */ className="h-3 ml-2  object-cover" src={pencil}alt="" />
            </div>
            <div className=" h-[80%] flex flex-col justify-around content-center items-center">
            <div className="">
                <h2 className="">{manga.title}</h2>
                <h4></h4>
            </div>
            <div className="  border-black flex justify-evenly h-8 w-full">
                <button onClick={alertEdit}  className="h-full font-semibold  w-16 rounded-2xl text-[#8883F0] bg-[#E0DBFF] font">Edit</button>
                <button onClick={ ()=>  alertDelete({id:manga._id})}className="h-ful  font-semibold w-16 rounded-2xl text-[#EF8481] bg-[#FBDDDC] " >Delete</button>

            </div>
            </div>
            </div>
            <img className="h-full w-[40%] rounded-2xl rounded-l-[4rem] object-cover " src={manga.cover_photo} alt="" />

        </div>)
        
        )}

       </div>

          </div>
          <div>
          <EditManga open={open} setOpen={setOpen} />
          </div>
        </div>
              
            
)
}









/* 
import React from 'react'
import categories_actions from '../../store/actions/categories'
import { useEffect,useState,useRef } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Dialog,Transition } from '@headlessui/react'


let {categories_read}=categories_actions

export default function EditManga({open,setOpen}) {

    const dispatch=useDispatch()

    let categories =useSelector(store=>store.categories.categories)
    console.log(categories); 


    useEffect(()=>{
        dispatch(categories_read())

    },[])



    let title = useRef();
    let description = useRef();
    let cover_photo = useRef()
    let category_id = useRef();

    const category = () => {
        return categories.map(categoria => (
          <option key={categoria._id} value={categoria._id}>
            {categoria.name}
          </option>
        ))
      }

const calcelButton =useRef(null)
  return (
    <> 

    <div className="flex  w-full justify-around items-center">
    <div className="border border-black mt-28">
<h2 className=' text-2xl sm:text-4xl text-center   font-bold'>Edit Manga</h2>
<form  action="" className="'w-[80%] mt-1 sm:mt-10  h-screen  flex flex-col justify-center items-center content-center border border-black">
<div className=' w-[18rem] h-[25rem]  sm:h-[30rem]  sm:w-[45vw] sm:mt-8  flex flex-col justify-evenly items-center '>
    <label>
        <input  ref={title}  className=' w-44      sm:w-[60vh] border-b border-black px-4 sm:text-2xl ' type="text" placeholder="Title"
        />
    </label>
    <label>
        <textarea className=' w-44 sm:mt-5 sm:mb-[2rem] sm:w-[60vh] border-b border-black px-4 sm:text-2xl ' placeholder=" Description"  ref={description} 
        />
    </label>
    <label>
        <input ref={cover_photo}  className=' w-44      sm:w-[60vh] border-b border-black px-4 sm:text-2xl ' type="text" placeholder="Photo"
        />
    </label>
    <label className=''>

        <select
            className='w-44 sm:mt-5 sm:w-[60vh] border-b border-black px-4 sm:text-2xl'
ref={category_id} >
            <option>
                 Category
            </option>
            {category()}
        </select>
    </label>
</div>
<div className=" flex flex-col justify-between w-[18rem] h-44 sm:w-[26rem] sm:h-56     mt-5 mb-3  ">
<div className=' flex  justify-center items-center  h-[40%]  '>
<button className=' font-bold  text-white sm:text-2xl bg-[#34D399]  h-[100%] w-[12rem] sm:w-[18rem]  rounded-full' type="submit">Edit</button>
</div> 
<div className=' flex  justify-center items-center   h-[40%] '>
<button className=' font-bold  text-[#EE8380] sm:text-2xl bg-[#FBDDDC]  h-[100%] w-[12rem] sm:w-[18rem]  rounded-full' type="submit">Delete</button>
</div> 
</div>
</form>
</div>

</div>

</>
  )
  
  } */