import { useEffect, useState, useRef } from "react";
import axios from "axios";
import apiUrl from "../../../api";
import action_manga from '../../store/actions/manga_one'
import { useSelector } from "react-redux";


let {manga_one}=action_manga
export default function MyMangas() {
/* 
    let storeManga = useSelector(store=>store.manga_one)
    console.log(storeManga); */


    let title = useRef();
    let description = useRef();
    let cover_photo = useRef()
    let category_id = useRef();
    console.log(title);

let [categories,setCategories]=useState()
console.log(categories)



    useEffect(() => {
      axios(apiUrl+'categories')
        .then(res => setCategories(res.data.categories))
        .catch(err => console.log(err));
    }, []);
    console.log();

    const category = () => {
      return categories?.map(categoria => (
        <option key={categoria._id} value={categoria._id}>
          {categoria.name}
        </option>
      ))
    }


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
    <div className='min-h-screen  mt-28  w-full flex flex-col justify-center items-center sm:mt-36 '>
        <div className="flex  w-full justify-around items-center">
            <div className="">
        <h2 className=' text-2xl sm:text-4xl text-center   font-bold'>Edit Manga</h2>
        <form  action="" className="'w-[80%] mt-5 sm:mt-10  h-screen  flex flex-col justify-center items-center content-center">
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
        <div className=" flex flex-col justify-between w-[18rem] h-44 sm:w-[26rem] sm:h-56     mt-12 mb-3  ">
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
      </div>
    </div>
)
}
