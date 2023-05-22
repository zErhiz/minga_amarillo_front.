

export default function EditChapterSection1() {
  return (
    <>
    <div className="w-[50vw] h-[100vh]  flex flex-col justify-center items-center max-md:w-[100vw]">
          <p className="text-black text-3xl"> Edit Chapter </p>
          <form action="" className="h-[70vh] flex flex-col justify-center items-center gap-4 max-md:gap-6">
            <input type="text" className="border-b border-black px-4 w-[20vw] h-[6vh] max-md:w-[50vw]" placeholder="name of the manga" />
            <select className='border-b border-black px-4 w-[20vw] h-[6vh] max-md:w-[50vw]' >
              <option>
                 select chapter
              </option>
            </select>
            <select className='border-b border-black px-4 w-[20vw] h-[6vh] max-md:w-[50vw]' >
              <option>
                 select data
              </option>
            </select>
          
            <input type="text" className="border-b border-black px-4  w-[20vw] h-[6vh] max-md:w-[50vw]" placeholder="data to edit" />
            <input className="text-white   rounded-full bg-green-500 w-[15vw] h-[8vh] max-md:w-[45vw]" type="submit"  value="Edith"/>
            <input className="text-red-500  rounded-full bg-red-200 w-[15vw] h-[8vh] max-md:w-[45vw]" type="button"  value="Delete"/>
            
          </form>
        </div>
    </>
  )
}
