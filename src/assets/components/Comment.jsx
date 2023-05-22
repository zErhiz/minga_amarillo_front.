import { useState, useEffect } from 'react';
import apiUrl from '../../../api';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import comments_actions from '../../store/actions/comments.js'



const {read_comments, delete_comment, upd_comment}= comments_actions

export default function Comment() {
let[editComment, setEditComment]=useState('')

  const {id}= useParams()

    let comments = useSelector(store=>store?.comment?.comments)

    console.log(comments)
    let dispatch = useDispatch()

  let token = localStorage.getItem("token");

  const [page, setPage] = useState(1);

  let email = JSON.parse(localStorage.getItem("user"))?.email;


 let headers = { headers: { Authorization: `Bearer ${token}` } };
 let [reload, setReload]= useState(false)

console.log(token)

  useEffect(
    () => {
     dispatch(read_comments({id}))
      
    },
    [ id] //array de dependencias vacio ya que necesitamos fetchear una unica vez al montarse el componente (ydespues los datos no van a cambiar)
  );
 

 const commentNew=useRef()
 

function inputEdit(e){
setEditComment(e.target.value)

}
  


function editComm(edit){
  Swal.fire({
    title: 'Are you sure to edit your comment?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, edit it!'
}).then((result) => {
    if (result.isConfirmed) {
      dispatch(upd_comment({id:edit, comment:editComment}))
        Swal.fire(
            'Edited!',
            'Your comment has been edited .',
            'success'
        )
    }
})
}


function deleteComment(del){
  
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
      dispatch(delete_comment({id:del}))
        Swal.fire(
            'Deleted!',
            'Your comment has been deleted.',
            'success'
        )
    }
})


}

  function handleForm(e){
    e.preventDefault()
    let data ={
      comment:commentNew?.current?.value,
      chapter_id:id

    }
axios.post(apiUrl+ "comments",data, headers )
.then(res=> {
  dispatch(read_comments({id}))
  Swal.fire({
    title: 'Comment posted',
    icon: 'success',
    confirmButtonText: 'Ok'
  });
  
})
.catch(err=>{console.log(err)
  Swal.fire({
    title: 'Check the fields',
    text: err.response.data.message,
    icon: 'error',
    confirmButtonText: 'Ok'
  });
})
  }
/*  function next() {
    setPage(page + 1);
    setReload(!reload);
   
  }

  function prev() {
    if (comments) setPage(page - 1);
    setReload(!reload); //para que refresque los componentes o la pÃ¡gina cuando realizo un accion 
     
  }*/
  return (
   
  <div className='gap-6 flex flex-col  border relative h-[150vh] w-[100vw] bg-slate-100  sm:w-[30vw]'>
    
   
  {comments.map(comm=>(
    
  <p className="text-gray-500">
     <div
    className="rounded-md relative w-[100%]  sm:w-[30vw] gap-2   sm:h-[30vh]  justify-center items-center border border-blue-100 bg-white p-4 shadow-lg sm:p-6 lg:p-8"
    role="alert"
  >
    <div className="flex items-center  gap-4 " >

{email ==comm.user_id?.email ? (<button  className='flex border text-blue-500 p-2 rounded-md' onClick={()=>editComm(comm._id) }>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="  text-blue-500 h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>

    Edit



  </button>):null}



      {email == comm.user_id?.email? ( <button onClick={()=>deleteComment(comm._id)}
      
      
      className="inline-block w-[10%] sm:w-[10%] rounded-lg border bg-red-100 px-5 py-3 text-center text-sm font-semibold text-red-500 "> 
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4  h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
    </button>):null}
       <img src={comm.user_id?.photo} className='rounded-full ms-16 sm:ms-44 p-2 w-16 h-16' alt="" />
 
  
 
    </div>
     <p className="font-medium  sm:text-lg">{comm.user_id?.email}</p>
     
     {email === comm.user_id?.email? ( <input type="text" onChange={inputEdit} defaultValue={comm.comment} />):null}
    {email != comm.user_id.email &&<p className=" text-gray-500">{comm.comment}</p>}

  <div className='flex justify-between'>
       <p>10</p>
      <button  className='flex border text-blue-500 p-2 rounded-md'>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="  text-blue-500 h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>

    Reply



  </button>
  <p>{comm.createdAt}</p>
  </div>



    </div>
    
   </p>
    
  ))
}

    <form  onSubmit={(e)=>handleForm(e)} className='w-[100%]   text-orange-500 flex flex-col px gap-2'>
   <label htmlFor=""></label>
<div className='border flex  justify-between'>

   <input className=' bg-slate-100 px-4 h-[6vh] py-2 rounded-md w-[85%]' type="textarea" placeholder='Say something here...'  ref={commentNew}/>
   <input className='   py-4  text-center rounded-md font-semibold  w-[15%] h-[4vh] cursor-pointer' type="submit" value='->' />
</div>
    </form>
/
  </div>
  )
}