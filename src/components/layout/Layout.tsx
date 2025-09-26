import Footer from "./Footer"
import Navbar from "./Sidebar"
import Sidebar from "./Navbar"
import { Outlet } from "react-router-dom"

function Layout (){
    return(
        <>
        <div className="container-scroller">
      {/* <!--\1--> */}
      <Sidebar/>
      {/* <!--\1--> */}
      <div className="container-fluid page-body-wrapper">
        {/* <!--\1--> */}
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <Navbar/>
        </nav>
        {/* <!--\1--> */}
        <div className="main-panel">
          <div className="content-wrapper">
           <Outlet/>
          </div>
          {/* <!--\1--> */}
          {/* <!--\1--> */}
          <Footer/>
          {/* <!--\1--> */}
        </div>
        {/* <!--\1--> */}
      </div>
      {/* <!--\1--> */}
    </div>
        
        </>
    )
}
export default Layout