import {createBrowserRouter} from 'react-router-dom'
import Main  from '../src/App.jsx'
import Layout from '../src/assets/layouts/Main.jsx'
import SignUp from '../src/assets/pages/SignUp.jsx'
import  Login  from '../src/assets/pages/Login.jsx'
import Index from '../src/assets/pages/Index.jsx'
const routes= createBrowserRouter([
    {path:'/', element:<Layout/>, children:[
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