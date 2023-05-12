import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Main from "../Components/main";

const Layout = () => {
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Main/>
      <Footer/>
    </>
  )
}

export default Layout