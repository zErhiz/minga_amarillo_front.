
import { createBrowserRouter } from 'react-router-dom'
import Main from '../../src/App'
import Layout from '../../src/assets/layouts/Main'
import Authorform from '../assets/pages/Authorform'
const routes = createBrowserRouter(
    [
        { path: '/', element:<Layout/>, children:
        [
              {path:'/mangas-form',element: <MangaForm/> }
            {path:'/', element:<Main/> },
            {path:'/author-form', element:<Authorform/>}
        ]}
    ])
    export default routes

