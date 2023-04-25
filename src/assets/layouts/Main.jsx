import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Main({children}) {
  console.log(children)
    return (
    <>
    <Navbar/>
    {
        children
    }
    <Footer/>
    </>
  )
}
