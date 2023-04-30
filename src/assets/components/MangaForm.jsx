import React from 'react'
import { useState} from 'react'



const categories = ['Shonen','Comic','Shojo','Seinen']

function Formulario() {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title, category, description)
  }
//capturo los datos del formulario
  return (
    <div className='  mt-40 w-screnn h-screen  flex flex-col justify-center items-center'>
          <h2 className='h- text-3xl  sm:text-6xl'>New Manga</h2>
    <form className='w-[80%] mt-5 sm:mt-10  h-screen border border-black flex flex-col justify-center items-center content-center' action="" onSubmit={handleSubmit}>
      <div className='  sm:w-[50%] sm:mt-20 0 h-[60%] flex flex-col justify-around items-center'>
      <label>
        <input  className= ' w-44      sm:w-[60vh] border-b border-black px-4 sm:text-2xl '  type="text" placeholder="Insert Title" value={title}onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label  className=''>
   
        <select className=' w-44 mt-5   sm:w-[60vh] border-b border-black px-4 sm:text-2xl' value={category} onChange={(event) => setCategory(event.target.value)}
        >
          <option placeholder='insert category' value=""  >insert category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <label>
       
        <textarea className=' w-44 mt-5 sm:mb-[2rem] sm:w-[60vh] border-b border-black px-4 sm:text-2xl '  placeholder="Insert Description"value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      </div>
      <div className='h-[40%] flex  justify-center items-center'>
      <button className=' w-44 h-10  text-white sm:text-2xl bg-orange-600 sm:h-16  sm:w-72 rounded-3xl' type="submit">Send</button>
      </div>   
   </form>
    </div>
  );
}

export default Formulario         
















