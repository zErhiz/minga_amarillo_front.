import { configureStore } from "@reduxjs/toolkit";
import inputs_reducer from "./reducers/inputs_filter";
let store= configureStore({
    reducer:{
        inputs:inputs_reducer
    }
})
export default store