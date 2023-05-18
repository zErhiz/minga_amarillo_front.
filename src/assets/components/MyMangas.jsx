import { useEffect, useState, useRef } from "react";

import Swal from "sweetalert2";
import { useSelector,useDispatch } from "react-redux";
import { Link as Anchor } from "react-router-dom";
import categories_actions from '../../store/actions/categories'
import mangas_actions from '../../store/actions/manga'
import MyMangasCard from "./MyMangasCard";


let {categories_read}=categories_actions
let {manga_read}=mangas_actions
export default function MyMangas() {
  const dispatch = useDispatch()

    let categories =useSelector(store=>store.categories.categories)
     console.log(categories); 
     let mangas =useSelector(store=>store.mangas.mangas)
     console.log(mangas);
     

    useEffect(() => {
        if(mangas.length===0){
            dispatch(categories_read())
            dispatch(manga_read())
        }
    },[])
    
   
        
let AuthorName=mangas.find(m =>m.author_id)?.author_id.name
 
    return (
     <div className=' flex flex-col justify-center items-center'>
       <div className="bg-bgfavourites  w-full h-[70vw] sm:h-[25vw] flex flex-col justify-center items-center bg-cover bg-top sm:bg-center  ">
          
            <h2 className=" text-3xl sm:text-5xl text-white font-bold ">{AuthorName}</h2>
         
          </div>
          <div className=" flex flex-col justify-around content-center sm:items-center   rounded-t-[3rem] bg-white m-h-[30vh]  z-20 w-full relative bottom-9 ">
          <div className="flex  p-6 w-[100%] justify-center items-center border border-black">
          <form>
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
            <input
          className="gap-6"
         
          name="category_id"
          /* onChange={checkbox} */
          type="checkbox"
          value={category._id}
          id={category._id}
        />
          </label>
        ))}
    </form>
       </div>
       <div className="flex flex-col lg:w-[60rem] sm:flex sm:flex-wrap sm:flex-row justify-center items-center content-center  border border-orange-500 ">
        {mangas.map((manga)=>(
           <MyMangasCard  manga={manga} categories={categories} />
           
        )
        
        )}


       
          </div>
        </div>
       </div>
              
            
)
}








