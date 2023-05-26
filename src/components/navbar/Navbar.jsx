import { useContext } from 'react';
import logo from '../../../public/logo.jpg'
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';

const Navbar = () => {
 

  const {logOut, user} = useContext(AuthContext)
  // console.log(user.email);
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
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
            </label>
            <ul
              tabIndex={0}
              className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
               <Link to="/">Home</Link>
              </li>
              <li tabIndex={0} >
                <a className="justify-between">
                  Toy
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2 overflow-visible bg-base-300">
                <li>
                {
                  user?.email ? <Link to="/mytoy">my Toy</Link> :""
                }
              </li>
              <li>
              <Link to="/alltoys">All Toy</Link>
               
            </li>
                  <li>
                  {
                  user?.email ? <Link to="/addtoy">Add a toy</Link> :""
                }
                  </li>
                </ul>
              </li>
              <li>
              <Link to="/blog">Blog </Link>
              </li>
            </ul>
          </div>
          <img className='w-[50px]' src={logo} alt="" />
          <a className="text-xl normal-case btn btn-ghost">Robo-Toy</a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
            <li>
            <Link to="/">Home</Link>
            </li>
           
            
            <li tabIndex={0}>
              <a>
               Toy
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 overflow-visible bg-base-300 ">
              <li>
              <Link to="/alltoys">All Toys</Link>
              </li>
            <li>
            {
                  user?.email ? <Link to="/mytoy">my Toy</Link> : ""
                }
            </li>
            <li>
            {
                  user?.email ? <Link to="/addtoy">add a toy</Link> :""
                }
                  </li>
              </ul>
            </li>
            <li>
            <Link to="/blog">Blog </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
        {
          user? <button onClick={logOut} className="btn btn-outline">Logout</button>: <Link to='/login'><button className="btn btn-outline">login</button></Link>  
        }
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL} title={user?.displayName
}  />
        </div>
      </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
