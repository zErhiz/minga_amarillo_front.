import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import React from 'react'


export default function EditManga({ open, setOpen }) {

  const cancelButtonRef = useRef(null);
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}>
          <div
            className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <div className="inline-block align-bottom bg-white rounded-3xl text-left overflow-hidden shadow-xl transform transition-all my-8 max-w-lg w-full z-50">
                <div className='flex justify-center bg-slate-400 py-8 '>
                  <div className='flex flex-col'>
                    <h1 className='text-4xl w-72 text-center'>Edit Manga</h1>
                    <form className='flex flex-col mt-12 w-40 gap-6' action="">
                      <label className='w-40' htmlFor="">
                        <input className='w-72 h-8 border-b rounded-md border-slate-500' type="text" name="name" id="name" placeholder='Title of the manga' />
                      </label>
                      <label htmlFor="">
                        <input className='w-72 h-8 border-b rounded-md border-slate-500' type="text" name="name" id="name" placeholder='Description' />
                      </label>
                      <label htmlFor="">
                        <input className='w-72 h-8 border-b rounded-md border-slate-500' type="text" name="name" id="name" placeholder='Photo' />
                      </label>
                      <label htmlFor="">
                        <select className='w-72 h-8 border-b rounded-md border-slate-500' name="" id="">
                          <option value="" disabled selected hidden>Category</option>
                          <option value="opcion1">Shonen</option>
                          <option value="opcion2">Seinen</option>
                          <option value="opcion3">Comic</option>
                          <option value="opcion3">Shojo</option>
                        </select>
                      </label>
                    </form>
                    <div className='flex flex-col items-center mt-12 gap-4'>
                      <input className='w-60 h-16 bg-[#34D399] rounded-full cursor-pointer text-white text-lg font-bold' type="button" value='Edit'></input>
                      <input className='w-60 h-16 bg-[#FBDDDC] rounded-full cursor-pointer text-[#EE8380] text-lg font-bold' type="button" value='Delete'></input>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}































 /*  <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}>
          <div
            className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <div className="inline-block align-bottom bg-white rounded-3xl text-left overflow-hidden shadow-xl transform transition-all my-8 max-w-lg w-full">
                <div className='flex justify-center bg-slate-400 py-8 '>
                  <div className='flex flex-col'>
                    <h1 className='text-4xl w-72 text-center'>Edit Manga</h1>
                    <form className='flex flex-col mt-12 w-40 gap-6' action="">
                      <label className='w-40' htmlFor="">
                        <input className='w-72 h-8 border-b rounded-md border-slate-500' type="text" name="name" id="name" placeholder='Title of the manga' />
                      </label>
                      <label htmlFor="">
                        <input className='w-72 h-8 border-b rounded-md border-slate-500' type="text" name="name" id="name" placeholder='Description' />
                      </label>
                      <label htmlFor="">
                        <input className='w-72 h-8 border-b rounded-md border-slate-500' type="text" name="name" id="name" placeholder='Photo' />
                      </label>
                      <label htmlFor="">
                        <select className='w-72 h-8 border-b rounded-md border-slate-500' name="" id="">
                          <option value="" disabled selected hidden>Category</option>
                          <option value="opcion1">Shonen</option>
                          <option value="opcion2">Seinen</option>
                          <option value="opcion3">Comic</option>
                          <option value="opcion3">Shojo</option>
                        </select>
                      </label>
                    </form>
                    <div className='flex flex-col items-center mt-12 gap-4'>
                      <input className='w-60 h-16 bg-[#34D399] rounded-full cursor-pointer text-white text-lg font-bold' type="button" value='Edit'></input>
                      <input className='w-60 h-16 bg-[#FBDDDC] rounded-full cursor-pointer text-[#EE8380] text-lg font-bold' type="button" value='Delete'></input>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
} */
//fran
{/* <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButton}
          onClose={setOpen}>
          <div
            className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
<Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
<Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"></Transition.Child> */}
  /*             </Transition.Child>
</div>
        </Dialog>
      </Transition.Root> */