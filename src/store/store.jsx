 import { configureStore } from "@reduxjs/toolkit";
import input_reducer from "./reducer/inputs_filter_switch"
import storage_reducer from "./reducer/author_storage"
const store = configureStore({
        reducer:{
       inputs: input_reducer,
       almacenamiento: storage_reducer 
        }
    })
    export default store 