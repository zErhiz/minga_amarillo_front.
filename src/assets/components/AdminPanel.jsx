import React from 'react'
import AdminTable from './AdminTable'
function AdminPanel() {
  return (
    <>
    <div className='border border-fuchsia-950 flex justify-center'>
    <div className='bg-white w-[100%] sm:w-[95%] h-[65vh] sm:h-[65vh] md:h-[55vh] lg:h-[50vh] border border-fuchsia-500 rounded-2xl relative -top-48 flex justify-center items-center gap-4 flex-col'><h1 className='text-orange-500 font-bold text-3xl border-b-8 border-b-orange-500'> Entities</h1> <AdminTable/></div>
    </div>
    </>
  )
}

export default AdminPanel