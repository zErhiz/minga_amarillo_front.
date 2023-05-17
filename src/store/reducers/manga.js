import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/manga";

const {manga_read,manga_delete}=actions

let inicialState={
    mangas:[]
}
const reducer=createReducer(
    inicialState,
    (builder)=>builder
    .addCase(
        manga_read.fulfilled,
        (state,action)=>{
            let newState={
                ...state,
                mangas:action.payload.mangas
            }
            return  newState
        }
        )   
   .addCase(
            manga_delete.fulfilled,
            (state,action)=>{
                let newState={
                    ...state,
                    mangas:state.mangas.filter(each=>each._id!==action.payload.delete)
                }
                
                return newState
            }
            

    )  
        
        )
        


export default reducer