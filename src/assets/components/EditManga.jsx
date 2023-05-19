import { Fragment, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link as Anchor, useParams } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import React from 'react'
import mangas_actions from '../../store/actions/manga'
import Swal from 'sweetalert2';

const { manga_update } = mangas_actions

export default function Editmanga({ open, setOpen, manga, categories }) {
    let dispatch = useDispatch()
    let [valueTitle, setValueTitle] = useState(manga.title)
    let [valueDescription, setValueDescription] = useState(manga.description)
    let [valuePhoto, setValuePhoto] = useState(manga.cover_photo)
    let [valuecategory, setValueCategory] = useState(manga.category_id)


    const newTitleChange = (event) => {
        setValueTitle(event.target.value)
    }

    const newDescriptionChange = (event) => {
        setValueDescription(event.target.value)
    }

    const newPhotoChange = (event) => {
        setValuePhoto(event.target.value)
    }

    const newCategoryChange = (event) => {
        setValueCategory(event.target.value)
    }



    const category = () => {
        return categories?.map(categoria => (
            <option key={categoria?._id} value={categoria?._id}>
                {categoria?.name}
            </option>
        ))
    }

    const editManga = (id) => {
        const data = {
            title: valueTitle,
            description: valueDescription,
            cover_photo: valuePhoto,
            category_id: valuecategory,
        }
        console.log(data);
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Saved!', '', 'success')
                dispatch(manga_update({ id, data }))
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
        setOpen(false)
    }


    return (
        <>
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed z-20 inset-0 overflow-y-auto"
                    initialFocus={''}
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
                            <Dialog.Overlay className="fixed inset-0 bg-gray-300 bg-opacity-75 transition-opacity" />
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
                            <div className="inline-block align-bottom bg-white text-left rounded-3xl overflow-hidden shadow-xl transform transition-all mb-32 max-w-lg w-full">
                                <div className='flex justify-center bg-white py-8 '>
                                    <div className='flex flex-col'>
                                        <h1 className='text-4xl w-72 text-center'>Edit Manga</h1>

                                        <form className='flex flex-col mt-12 w-40 gap-6' action="">

                                            <label className='w-40' htmlFor="">
                                                <input onChange={newTitleChange} className='w-72 h-8 border-b rounded-md border-slate-500' type="text" name="name" id="name" placeholder='Title of the manga' />
                                            </label>
                                            <label htmlFor="">
                                                <input onChange={newDescriptionChange} className='w-72 h-8 border-b rounded-md border-slate-500' type="text" name="name" id="name" placeholder='Description' />
                                            </label>
                                            <label htmlFor="">
                                                <input onChange={newPhotoChange} className='w-72 h-8 border-b rounded-md border-slate-500' type="text" name="name" id="name" placeholder='Photo' />
                                            </label>
                                            <label htmlFor="">
                                                <select onChange={newCategoryChange} className='w-72 h-8 border-b rounded-md border-slate-500' name="" id="">
                                                    <option value="" >Category</option>
                                                    {category()}
                                                </select>
                                            </label>

                                        </form>
                                        <div className='flex flex-col items-center mt-12 gap-4'>
                                            {<button onClick={() => editManga(manga._id)} type='submit' className="w-60 h-16 bg-[#34D399] rounded-full cursor-pointer text-white text-lg font-bold hover:bg-green-500 hover:scale-110 transition-all">
                                                Edit
                                            </button>}
                                            <button className="w-60 h-16 bg-[#FBDDDC] rounded-full cursor-pointer text-red-400 text-lg font-bold hover:bg-red-400 hover:text-white hover:scale-110 transition-all">
                                                <Anchor to="/mymangas">Cancel</Anchor>
                                            </button>
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



























