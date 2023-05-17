import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/getme";
const {getData, getInfo, delete_chapter} = actions

let initialState = {
    chapters: [],
    title: "" ,
    order: null,
    chapter: {}
}

const reducer = createReducer(
    initialState, 
    (builder) => builder
    .addCase(
        getData.fulfilled,
        (state, action) => {
            let newState = {
                ...state,

                chapters: action.payload.chapter,
                title: action.payload.title
                
            }
            return newState
        }
    )
    .addCase(
        getInfo.fulfilled,
        (state,action)=>{
            let newState = {
                ...state,
                order: action.payload.order,
                chapter: action.payload.chapter
            }
            return newState
        }    
    ).addCase(
        delete_chapter.fulfilled,
        (state, action) => {
            let newState = {
                ...state,

                chapters: state.chapters.filter(each => each._id!==action.payload.delete )
                
                
            }
            return newState
        }
        
    )
)
export default reducer