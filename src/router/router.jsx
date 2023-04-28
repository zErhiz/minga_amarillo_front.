import { createBrowserRouter } from "react-router-dom";
import Main from "../App.jsx";
import Layout from "../assets/layouts/Main.jsx"
import ChapterForm from "../assets/components/ChapterForm.jsx";

const routes = createBrowserRouter([
    {path: "/", element:<Layout/>, children:[
        {path: "/", element:<Main/>},
        {path: "/chapters/:id", element:<ChapterForm/>}
    ]}
])

export default routes