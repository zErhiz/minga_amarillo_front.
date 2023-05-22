
import { createBrowserRouter } from "react-router-dom";
import Main from "../../src/App";
import Layout from "../../src/assets/layouts/Main";
import Authorform from "../assets/pages/Authorform";
import ChapterForm from "../assets/components/ChapterForm.jsx";
import Manga2 from '../assets/components/MangaDetail';

import NewRole from "../assets/pages/NewRole";

import SignUp from "../../src/assets/pages/SignUp";
import Login from "../../src/assets/pages/Login";
import MangaForm from "../../src/assets/components/MangaForm.jsx";
import CompanyForm from "../assets/pages/CompanyForm";
import Author from "../assets/pages/Author"
import ReadChapter from '../assets/components/ReadChapter';
import Manga from '../assets/components/Manga';




import EdithChapter from "../assets/pages/EdithChapter";




import Admin from "../assets/pages/Admin";


import ListComment from "../assets/components/ListComment";

import MyMangas from "../assets/components/MyMangas";
import EditManga from "../assets/components/EditManga";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/mangas-form", element: <MangaForm /> },
      { path: "/", element: <Main /> },
      { path: "/author-form", element: <Authorform /> },
      { path: "/chapters-form", element: <ChapterForm /> },
      {path: "/chapters/:id/:page", element: <ReadChapter/>  },
      {path: "/edit/:manga_id", element: <EdithChapter/>  },
      { path: "/", element: <Main /> },
      { path: "/register", element: <SignUp /> },
      { path: "/login", element: <Login /> },
      { path: "/home", element: <Main /> },
      { path: "/auth", element: <Login /> },
      { path: "/cia-form", element: <CompanyForm /> },
      { path: "/author/:id", element: <Author />},

       { path:'/mangas/:page', element:<Manga/> },
       { path:'/manga/:id/:page',element: <Manga2/>},
      { path:'/listcomment', element: <ListComment/>},
      {path:'/mymangas',element: <MyMangas/>},
      {path:'/new-role',element: <NewRole/> },
      { path:'/admin',element: <Admin/>}




    ],
  },
]);
export default routes;



