import { configureStore } from "@reduxjs/toolkit";
import manga_reducer from './reducers/manga_one'


const store = configureStore({
  reducer: {
    blobal:manga_reducer
  }
})

export default store;