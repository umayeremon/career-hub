import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";


const Layout = () => {
  return (
  <div >
      <div className="max-w-7xl mx-auto">
        <Nav/>
        <Outlet/>
      </div>
    <Footer/>
  </div>
  );
};

export default Layout;