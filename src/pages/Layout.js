import { Outlet } from "react-router-dom";
import Header from "../comps/Header";
import Footer from "../comps/Footer";


const Layout = () => {
//NAV AND HEADER FOOTER LAYOUT

  return (
    
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Outlet/>
      </div>
      <Footer/>
    </div>

  );
};

export default Layout;
