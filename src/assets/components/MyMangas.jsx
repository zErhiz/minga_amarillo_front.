import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link as Anchor } from "react-router-dom";
import categories_actions from '../../store/actions/categories'
import mangas_actions from '../../store/actions/manga'
import MyMangasCard from "./MyMangasCard";

import { useNavigate } from "react-router-dom";





let { categories_read } = categories_actions
let { manga_read } = mangas_actions


export default function MyMangas() {
    const dispatch = useDispatch()
    let navigate=useNavigate()
   


    let categories = useSelector(store => store.categories.categories)
    console.log(categories);
    let mangas = useSelector(store => store.mangas.mangas)
    console.log(mangas);

    const [newCategories, setNewcategories] = useState([])

    let categoriesChange = (event) => {
        const { value, checked } = event.target;

        setNewcategories((elementCategory) => {
            if (checked) {
                return [...elementCategory, value]
            } else {
                return elementCategory.filter((category) => category !== value);

            }
        });
    }
    const filterByManga = () => {

        let filterMangas = mangas

        if (newCategories.length > 0) {
            filterMangas = filterMangas.filter((manga) =>
                newCategories.includes(manga.category_id?._id)
            );
        }
        return filterMangas;
    };

    const resetFilters = (e) => {
        e.preventDefault()
        setNewcategories([])
    }

    useEffect(() => {
        if (mangas.length === 0) {
            dispatch(categories_read())
            dispatch(manga_read())
        }
    }, [])

   

    let role = JSON.parse(localStorage.getItem('user'))?.role

console.log(role);
    let AuthorName = mangas.find(m => m.author_id)?.author_id.name

    return (

        <div className=' flex flex-col justify-center items-center'>
            <div className="bg-bgfavourites  w-full h-[70vw] sm:h-[25vw] flex flex-col justify-center items-center bg-cover bg-top sm:bg-center  ">

                <h2 className=" text-3xl sm:text-5xl text-white font-bold ">{AuthorName}</h2>

            </div>
            <div className=" flex flex-col justify-around content-center sm:items-center   rounded-t-[3rem] bg-white m-h-[30vh]  z-20 w-full relative bottom-9  ">
                <div className=" flex  h-20 w-[100%] justify-center items-center ">
                    <form className="flex h-full items-center w-full  ">
                        <div className="flex  sm:w-[30%] justify-center sm:justify-end mr-10">
                        <button onClick={resetFilters} className="mt-[-0.5rem] flex flex-row items-center justify-center w-8 h-8 bg-[#999999] text-white p-[1rem] rounded-[26px] text-[12px] cursor-pointe ml-2 " style={{ backgroundColor: newCategories.length === 0 ? 'green' : '' }}>
                            All
                            <input name="category_id" onChange={categoriesChange} style={{ appearance: 'none' }} type="checkbox" checked={newCategories.length === 0} />
                        </button>
                        </div>
                        <div className="flex   sm:w-[70%] sm:justify-start">
                        {categories?.map((each) => (
                            <div key={each._id} className="m-1" >
                                <label className="cursor-pointer" htmlFor={each._id} key={each._id} style={{
                                    height:'5rem',
                                    backgroundColor: each.hover,
                                    color: each.color,
                                    padding: '0.5rem',
                                    borderRadius: '26px',
                                    fontSize: "12px",
                                    textAlign: "center ",
                                    ...(newCategories.includes(each._id) ? { backgroundColor: each.color, color: "white" } : {})
                                }}>

                                    {each.name.charAt(0).toUpperCase() + each.name.slice(1)}

                                    <input name="category_id" onChange={categoriesChange} style={{ appearance: 'none' }} type="checkbox" value={each._id} id={each._id} checked={newCategories.includes(each._id)} />
                                </label>
                            </div>
                        ))}
                        </div>
                       
                    </form>
                </div>
                <div className="flex flex-col lg:w-[65rem] sm:flex sm:flex-wrap sm:flex-row justify-center items-center content-cente ">

                    <div  className=" h-5 w-10">
                    <svg  onClick={()=>navigate('/mangas-form')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
</svg>

                    </div>

                    {filterByManga().length > 0 ? (
                        filterByManga().map((manga) => (
                            <MyMangasCard manga={manga} categories={categories} key={manga._id} />
                        ))
                    ) : (
                        <div className="flex flex-row justify-center">
                            <h1 className="text-[2rem]">No matches found in the search</h1>
                        </div>
                    )}
                </div>
            </div>
        </div>


    )
}








