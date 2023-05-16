import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/manga";

const {manga_read}=actions

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
)
export default reducer