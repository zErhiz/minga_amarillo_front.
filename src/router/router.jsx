import { createBrowserRouter } from "react-router-dom";
import Main from "../../src/App";
import Layout from "../../src/assets/layouts/Main";
import Authorform from "../assets/pages/Authorform";
import ChapterForm from "../assets/components/ChapterForm.jsx";
import SignUp from "../../src/assets/pages/SignUp";
import Login from "../../src/assets/pages/Login";
import MangaForm from "../../src/assets/components/MangaForm.jsx";
import CompanyForm from "../assets/pages/CompanyForm";
import Author from "../assets/pages/Author"
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/mangas-form", element: <MangaForm /> },
      { path: "/", element: <Main /> },
      { path: "/author-form", element: <Authorform /> },
      { path: "/chapters/:id", element: <ChapterForm /> },
      { path: "/", element: <Main /> },
      { path: "/register", element: <SignUp /> },
      { path: "/login", element: <Login /> },
      { path: "/home", element: <Main /> },
      { path: "/auth", element: <Login /> },
      { path: "/cia-form", element: <CompanyForm /> },
      { path: "/author/:id", element: <Author />},
    ],
  },
]);
export default routes;
