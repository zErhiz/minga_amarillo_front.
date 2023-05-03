import React,{useRef}from 'react'
import axios from 'axios'
import swal from 'sweetalert2';

function Formulario() {
  let user = JSON.parse(localStorage.getItem('user'))
let role = user ? user.role : null

    const categories = ['Shonen','Comic','Shojo','Seinen']

    let apiUrl='http://localhost:8000/mangas'
    let token=localStorage.getItem('token')
    let headers ={headers: {'authorization': `bearer ${token}`}} 
    
    let title= useRef();
    let category_id= useRef();
    let description= useRef();


  const handleSubmit = (e) => {
    e.preventDefault()
    //capturo los datos del formulario
    const data = {
        title: title.current.value,
        category_id: category_id.current.value,
        description: description.current.value,
      }
      if (title.current.value === '' || category_id.current.value === '' || description.current.value === '') {
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
    console.log(data)
     
    axios.post(apiUrl,data,Headers)
     .then(res=> console.log(res))
     .catch(err=> console.log(err))
    
  }


  return (
   /*  <>{ role ===1 || role === 2 ?(  */
    <div  className=' mt-20  sm:mt-36 w-screnn h-screen  flex flex-col justify-center items-center'>
          <h2 className='h- text-3xl text-orange-500  sm:text-6xl'> New Manga</h2>
    <form  className='w-[80%] mt-5 sm:mt-10  h-screen  flex flex-col justify-center items-center content-center' action="" onSubmit={handleSubmit} >
      <div className='  sm:w-[50%] sm:mt-20 0 h-[60%] flex flex-col justify-around items-center'>
      <label>
        <input ref={title}  className= ' w-44      sm:w-[60vh] border-b border-black px-4 sm:text-2xl '  type="text" placeholder="Insert Title"
        />
      </label>
      <label  className=''>
   
      <select
              className='w-44 sm:mt-5 sm:w-[60vh] border-b border-black px-4 sm:text-2xl'
              defaultValue=''
              ref={category_id}
            >
              <option disabled value=''>
                insert category
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
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
 /*  ): null} </>  */ )
}

export default Formulario         
















