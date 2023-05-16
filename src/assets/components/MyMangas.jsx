import { useEffect, useState, useRef } from "react";

import { useSelector,useDispatch } from "react-redux";
import { Link as Anchor } from "react-router-dom";
import categories_actions from '../../store/actions/categories'
import mangas_actions from '../../store/actions/manga'
import store from "../../store/store";

let {categories_read}=categories_actions
let {manga_read}=mangas_actions
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
        dispatch(manga_read())
        dispatch(categories_read())
    }, []);
    



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


    return (
     <div className='h-screen flex flex-col justify-center items-center '>
       <div className="bg-bgfavourites  w-full h-[100%] flex flex-col justify-center items-center bg-cover bg-top">
          
            <h2 className=" text-2xl text-white font-bold ">CompanyName</h2>
            <h2 className=" text-2xl text-white font-bold ">0</h2>
            <h2 className=" text-2xl text-white font-bold ">AuthorName</h2>
          </div>
          <div className=" flex flex-col justify-around   rounded-t-[3rem] bg-white min-h-[50vh] border border-black z-20 w-full relative bottom-10">
          <div className="flex  gap-4 p-6 w-[100%] justify-center items-center border border-black">
         <form ref={category_id}>
           {categories &&
             categories.map((category) => (
                console.log(category.color),
               <label
                 htmlFor={category._id}
                 key={category._id}
                 style={{
                 textcolor: category?.color,
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
       <div className="flex justify-center content-center items-center">
        <div className="border border-black w-64 h-32 flex rounded-2xl ">
            <div className="w-[60%] h-32 border border-yellow-400">
            <div className="border border-red-600 h-[20%]">
                <button>+</button>
                <button>-</button>
            </div>
            <div className="border border-green-600 h-[80%] flex flex-col justify-around content-center items-center">
            <div className="">
                <h2>titulo</h2>
                <h4>company o autor</h4>
            </div>
            <div className="border borde-black flex justify-evenly w-full">
                <button>edit</button>
                <button>delete</button>

            </div>
            </div>
            </div>
            <img className="h-full w-[40%] rounded-2xl rounded-l-[4rem] " src="https://i.postimg.cc/V6HWZ9k2/main-planet-hulk.jpg" alt="" />

        </div>

       </div>

          </div>
        </div>
              
            
)
}









{/*  <div className="flex  w-full justify-around items-center">
     <div className="">
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
<img className="h-[35vw]  min-[320px] max-[540px]:hidden object-cover rounded-3xl " src="https://i.postimg.cc/PqQHYqrL/main-alice-in-borderland.jpg" alt="" />
</div> */}
