import { createBrowserRouter } from "react-router-dom";
import Main from '../App.jsx'
import Layout from '../assets/layouts/Main.jsx'
import MangaForm from "../assets/components/MangaForm.jsx";



const routes =createBrowserRouter([
    {path:'/',element:<Layout/>,children:[
        {path:'/',element:<Main/>},
         {path:'/mangas-form',element: <MangaForm/> }
        
        

    ]
    
}
])
export default routes