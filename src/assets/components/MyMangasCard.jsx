import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import Swal from 'sweetalert2'
import pencil from '../../../public/img/pencil.png'
import further from '../../../public/img/further.png'
import mangas_actions from '../../store/actions/manga'
import Editmanga from './EditManga'
import { Link as Anchor } from "react-router-dom";
import { useNavigate } from "react-router-dom";



let { manga_delete } = mangas_actions

const MyMangasCard = ({ manga, categories }) => {
  
    let navigate=useNavigate()
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);


    const alertEdit = () => {
        setOpen(true);
    }



    //funcion para eliminar el manga 
    const alertDelete = ({ id }) => {
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
                dispatch(manga_delete({ id }))
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }
    let chapterUrl=()=>{
        navigate(`/chapters/${manga._id}`)
     }
     let detailsUrl=()=>{
        navigate(`/manga/${manga._id}/1`)
     }

     let role = JSON.parse(localStorage.getItem('user'))?.role


    return (
    
        <>
        {role==1||role==2?(<div key={manga._id} className='   w-72 sm:w-80 h-32 flex rounded-2xl mt-7   shadow-2xl  sm:m-7 items-center  bg-slate-50 ' >
            <div className='h-[60%] w-1' style={{ backgroundColor: manga.category_id?.color }}></div>
            <p className=""></p>
            <div className="w-[60%] h-32 ">
                <div className="h-[20%] flex items-center ml-3">
                <img onClick={chapterUrl}  className="h-3  sm:h-4  object-cover" src={further} alt="" /> 
                <Anchor to=' /edit/:id_manga	' ><img     className="h-3 sm:h-4      ml-2  object-cover" src={pencil} alt="" /> </Anchor>
                   
                </div>
                <div className=" h-[80%] flex flex-col justify-around content-center items-center">
                    <div className="">
                        <h2 onClick={detailsUrl} className="hover:scale-90 cursor-pointer font-semibold">{manga.title}</h2>
                        <h4></h4>
                    </div>
                    <div className="  flex justify-evenly h-8 w-full">
                      <button onClick={alertEdit} className="h-full font-semibold  w-16 cursor-pointer hover:bg-[#8883F0]  hover:text-[#E0DBFF]  rounded-2xl text-[#8883F0] bg-[#E0DBFF] font">Edit</button>
                        <button onClick={() => alertDelete({ id: manga._id })} className="h-ful cursor-pointer hover:bg-red-400 hover:text-white  font-semibold w-16 rounded-2xl text-[#EF8481] bg-[#FBDDDC] " >Delete</button>

                    </div>
                </div>
            </div>
            <img onClick={detailsUrl} className=" hover:scale-90 cursor-pointer   h-full w-[40%] rounded-2xl rounded-l-[4rem] object-cover " src={manga.cover_photo} alt="" />
            <Editmanga manga={manga} categories={categories} open={open} setOpen={setOpen} />
        </div>):(navigate('/'))}
        
        </>
    )
}

export default MyMangasCard

