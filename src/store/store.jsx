import { configureStore } from "@reduxjs/toolkit";
import manga_reducer from './reducers/manga_one.js'
import chapter_reducer from './reducers/chapter_one.js'


const store = configureStore({
  reducer:{
    chapter:chapter_reducer,
    manga:manga_reducer,

  }
})

export default store;