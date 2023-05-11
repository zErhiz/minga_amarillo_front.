import { configureStore } from "@reduxjs/toolkit";
import manga_reducer from './reducers/manga_one'
import chapter_reducer from './reducers/chapter_one'


const store = configureStore({
  reducer: {
    chapter:chapter_reducer,
    manga:manga_reducer,

  }
})

export default store;