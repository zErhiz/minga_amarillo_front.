 import { configureStore } from "@reduxjs/toolkit";
import input_reducer from "./reducer/inputs_filter_switch"
const store = configureStore({
        reducer:{
       inputs: input_reducer    
        }
    })
    export default store 