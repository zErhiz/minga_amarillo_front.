import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
export default function Main({children}) {
  console.log(children)
    return (
    <>
    <Navbar/>
    
        <Outlet/>
    
    <Footer/>
    </>
  )
}
