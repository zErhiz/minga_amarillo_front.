import { configureStore } from "@reduxjs/toolkit";
import inputs_reducer from "./reducers/save_page._title"

const store = configureStore({
    reducer: {
        inputs: inputs_reducer
    }
})

export default store