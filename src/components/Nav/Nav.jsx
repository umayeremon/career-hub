import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const links=
    <>
    <li><NavLink className="font-bold" to='/'>Home</NavLink></li>
    <li><NavLink className="font-bold" to='/statistics'>Statistics</NavLink></li>
    <li><NavLink className="font-bold" to='/appliedJobs'>Applied Jobs</NavLink></li>
    <li><NavLink className="font-bold" to='/blog'>Blog</NavLink></li>
    </>  
  return (
     <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to='/' className=" bg-white outline-none hover:bg-white text-xl lg:text-3xl text-[#1A1919] font-bold">Career Hub</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn bg-gradient-to-r from-[#9873FFFF] to-[#7E90FE] text-base font-medium text-white">Apply Now</button>
      </div>
    </div>
  );
};

export default Nav;
