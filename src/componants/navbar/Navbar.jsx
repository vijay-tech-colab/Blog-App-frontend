import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="2xl:container 2xl:mx-auto fixed w-full z-10 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 top-0 left-0">
      <div className="bg-white rounded shadow-lg py-3 px-7">
        <nav className="flex justify-between">
          <div className="flex items-center space-x-3 lg:pr-16 pr-6">
            <svg
              className="cursor-pointer"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 17H0H1ZM7 17H6H7ZM17 27V28V27ZM27 17H28H27ZM17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918L6.3934 6.3934C9.20644 3.58035 13.0218 2 17 2V0ZM4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17H2C2 13.0218 3.58035 9.20644 6.3934 6.3934L4.97918 4.97918ZM0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208L6.3934 27.6066C3.58035 24.7936 2 20.9782 2 17H0ZM4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34V32C13.0218 32 9.20644 30.4196 6.3934 27.6066L4.97918 29.0208ZM17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208L27.6066 27.6066C24.7936 30.4196 20.9782 32 17 32V34ZM29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17H32C32 20.9782 30.4196 24.7936 27.6066 27.6066L29.0208 29.0208ZM34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918L27.6066 6.3934C30.4196 9.20644 32 13.0218 32 17H34ZM29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0V2C20.9782 2 24.7936 3.58035 27.6066 6.3934L29.0208 4.97918ZM17 6C14.0826 6 11.2847 7.15893 9.22183 9.22183L10.636 10.636C12.3239 8.94821 14.6131 8 17 8V6ZM9.22183 9.22183C7.15893 11.2847 6 14.0826 6 17H8C8 14.6131 8.94821 12.3239 10.636 10.636L9.22183 9.22183ZM6 17C6 19.9174 7.15893 22.7153 9.22183 24.7782L10.636 23.364C8.94821 21.6761 8 19.3869 8 17H6ZM9.22183 24.7782C11.2847 26.8411 14.0826 28 17 28V26C14.6131 26 12.3239 25.0518 10.636 23.364L9.22183 24.7782ZM17 28C19.9174 28 22.7153 26.8411 24.7782 24.7782L23.364 23.364C21.6761 25.0518 19.3869 26 17 26V28ZM24.7782 24.7782C26.8411 22.7153 28 19.9174 28 17H26C26 19.3869 25.0518 21.6761 23.364 23.364L24.7782 24.7782ZM28 17C28 14.0826 26.8411 11.2847 24.7782 9.22183L23.364 10.636C25.0518 12.3239 26 14.6131 26 17H28ZM24.7782 9.22183C22.7153 7.15893 19.9174 6 17 6V8C19.3869 8 21.6761 8.94821 23.364 10.636L24.7782 9.22183ZM10.3753 8.21913C6.86634 11.0263 4.86605 14.4281 4.50411 18.4095C4.14549 22.3543 5.40799 26.7295 8.13176 31.4961L9.86824 30.5039C7.25868 25.9371 6.18785 21.9791 6.49589 18.5905C6.80061 15.2386 8.46699 12.307 11.6247 9.78087L10.3753 8.21913ZM23.6247 25.7809C27.1294 22.9771 29.1332 19.6127 29.4958 15.6632C29.8549 11.7516 28.5904 7.41119 25.8682 2.64741L24.1318 3.63969C26.7429 8.20923 27.8117 12.1304 27.5042 15.4803C27.2001 18.7924 25.5372 21.6896 22.3753 24.2191L23.6247 25.7809Z"
                fill="#1F2937"
              />
            </svg>
            <h2 className="font-normal text-2xl leading-6 text-gray-800">
              Blogger
            </h2>
          </div>
          <ul className="hidden md:flex flex-auto space-x-2">
      <li className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white bg-indigo-600 cursor-pointer px-5 py-3 font-normal text-xs leading-3 shadow-md rounded">
        <NavLink
          to={"/"}
          className="text-white"
          activeClassName="bg-indigo-700" // Active class for Home
        >
          Home
        </NavLink>
      </li>
      <li className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-3 font-normal text-xs leading-3 shadow-md rounded">
        <NavLink
          to={"/all-blog"}
          className="text-gray-600"
          activeClassName="bg-indigo-700" // Active class for All Blog
        >
          All Blog
        </NavLink>
      </li>
      <li className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-3 font-normal text-xs leading-3 shadow-md rounded">
        <NavLink
          to={"/about"}
          className="text-gray-600"
          activeClassName="bg-indigo-700" // Active class for About
        >
          About
        </NavLink>
      </li>
      <li className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-3 font-normal text-xs leading-3 shadow-md rounded">
        <NavLink
          to={"/contact"}
          className="text-gray-600"
          activeClassName="bg-indigo-700" // Active class for Contact Us
        >
          Contact Us
        </NavLink>
      </li>
      <li className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-3 font-normal text-xs leading-3 shadow-md rounded">
        <NavLink
          to={"/login"}
          className="text-gray-600"
          activeClassName="bg-indigo-700" // Active class for Log in
        >
          Log in
        </NavLink>
      </li>
      <li className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-3 font-normal text-xs leading-3 shadow-md rounded">
        <NavLink
          to={"/signup"}
          className="text-gray-600"
          activeClassName="bg-indigo-700" // Active class for Sign up
        >
          Sign up
        </NavLink>
      </li>
    </ul>
          <div className="flex space-x-5 justify-center items-center pl-2">
            <div className="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="animate-ping w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto duration-200"></div>
              <div className=" w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto shadow-lg"></div>
            </div>
            <div
              className="story-ring flex justify-center items-center
                              bg-gradient-to-tl from-yellow-200 to-orange-500 
                                  rounded-full relative cursor-pointer
                                  hover:from-orange-300 hover:to-red-400
                                  transition-all duration-150 delay-100"
            >
              <img
                className="w-10 rounded-full"
                src="https://images.unsplash.com/photo-1638708644743-2502f38000a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
              />

            </div>
            {showMenu ? <IoCloseSharp className="md:hidden" size={"30px"} onClick={() => setShowMenu(!showMenu)}/>: <MdOutlineMenuOpen className="md:hidden" size={"30px"} onClick={() => setShowMenu(!showMenu)}/>}
          </div>
        </nav>

        
          
          <div className="relative w-full left-0 top-1">
            <ul
              className={
                showMenu
                  ? "font-normal text-base leading-4 absolute top-2  w-full rounded shadow-md"
                  : "hidden font-normal text-base leading-4 absolute top-2  w-full rounded shadow-md"
              }
            >
              <li
                className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
              > <NavLink to={"/"}>Home</NavLink>
                
              </li>
              <li
                className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
              > <NavLink to={"/about"}>About</NavLink>
                
              </li>
              <li
                className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
              > <NavLink to={"/all-blog"}>All Blogs</NavLink>
                
              </li>
              <li
                className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
              > <NavLink to={"/contact"}>Contact Us</NavLink>
                
              </li>
              <li
                className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
              > <NavLink to={"/login"}>Login</NavLink>
                
              </li>
              <li
                className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
              > <NavLink to={"/signup"}>Sign Up</NavLink>
                
              </li>
            </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
