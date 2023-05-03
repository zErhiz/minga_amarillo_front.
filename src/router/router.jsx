import { createBrowserRouter } from "react-router-dom";
import Main from "../App.jsx";
import Layout from "../assets/layouts/Main.jsx"
import ChapterForm from "../assets/components/ChapterForm.jsx";

let user = JSON.parse(localStorage.getItem('user'));
let role = user ? user.role : null;

const routes = createBrowserRouter([
    {path: "/", element:<Layout/>, children:[
        {path: "/", element:<Main/>},
        {path: "/chapters/:id", element: <ChapterForm/>}
    ]}
])

export default routes

// ( role === 1||role === 2 ?  <ChapterForm/> : <Main/>  )