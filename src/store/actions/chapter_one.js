import { createAction } from "@reduxjs/toolkit";

const chapter_one=createAction(
    'chapter_one',
    (objeto)=>{
        return{
     payload:{
        title: objeto.title,
        order: objeto.order,
        cover_photo: objeto.cover_photo,
}
        
    }}
)
const actions ={chapter_one}
export default actions