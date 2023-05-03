

import { createBrowserRouter } from 'react-router-dom'
import Main from '../../src/App'
import Layout from '../../src/assets/layouts/Main'
import Authorform from '../assets/pages/Authorform'
import ChapterForm from "../assets/components/ChapterForm.jsx";
import SignUp from '../../src/assets/pages/SignUp'
import  Login  from '../../src/assets/pages/Login'
let user = JSON.parse(localStorage.getItem('user'));
let role = user ? user.role : null;
const routes = createBrowserRouter(
    [
        { path: '/', element:<Layout/>, children:
        [
              {path:'/mangas-form',element: <MangaForm/> },
            {path:'/', element:<Main/> },
            {path:'/author-form', element:<Authorform/>},
            {path: "/chapters/:id", element: ( role === 1||role === 2 ?  <ChapterForm/> : <Main/>  )},
            {
                path:'/', element:<Main/>
            },
            {
                path:'/register', element:<SignUp/>
            },
          {
            path:'/login', element:<Login/>
          },
          {
            path:'/home', element:<Main/>
          },
          {
            path:'/auth', element:<Login/>
          },
        ]}
    ])
    export default routes


