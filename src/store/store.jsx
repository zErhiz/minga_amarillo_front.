import { configureStore } from "@reduxjs/toolkit";
import formManga from '../store/reducers/formManga'
let store= configureStore({
    reducer:{
        formManga
    }
})
export default store