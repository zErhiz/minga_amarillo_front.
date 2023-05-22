import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ChatBot from "../components/ChatBot"
import { Outlet } from "react-router-dom"

export default function Main() {



    return (
    <>
    <Navbar/>


    
        <Outlet/>
    
        
<div className=" hidden lg:block">
<ChatBot/>
</div>
    <Footer/>
    </>
  )
}
