
 import { configureStore } from "@reduxjs/toolkit";
import input_reducer from "./reducer/inputs_filter_switch"
import storage_reducer from "./reducer/author_storage"
import inputs_reducer_chapter from "./reducers/save_page._title"
const store = configureStore({
        reducer:{
       inputs: input_reducer,
       almacenamiento: storage_reducer,
        inputsChapter: inputs_reducer_chapter
        }
    })
    export default store 

