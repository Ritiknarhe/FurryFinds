import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { PiDog } from "react-icons/pi";


import {Link} from 'react-router-dom'





import { useNavigate } from 'react-router-dom';






const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const log=()=>{
      navigate('/Login')
  }
  
const store=()=>{
  navigate('/Store')
}

const home=()=>{
  navigate('/')
}
const dog1=()=>{
  navigate('/dog1')
}
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center w-full h-24 border-b border-gray-300 bg-cyan-200 px-4 fixed  ">
      <div>
        <h1 className="text-5xl  ml-5  cursor-pointer ">
          <p onClick={home} >
          <div class="mb-6 md:mb-0">
              <a href="#" class="flex items-center">
                  <img src="https://img.icons8.com/?size=512&id=9199&format=png  " class="h-10 mr-3" alt="FlowBite Logo" />
                  <span  class="self-center text-4xl font-semibold whitespace-nowrap  ">Furry Finds</span>
              </a>
          </div>
          </p>
        </h1>
      </div>
      


      
      
        
        <ul className="hidden md:flex">
          <li className="px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-500">
            <button onClick={log} className=" group   text-xl w-fit px-5 py-0  flex items-center  hover:border-b border-gray-800 hover:text-blue-700">
              Login
            </button>
          </li>
          <p onClick={home} className="px-4 cursor-pointer capitalize font-medium hover:scale-105 text-xl hover:border-b border-gray-800 duration-200 hover:text-blue-700">
          Home
            
          </p>
          <li  className="px-4 cursor-pointer capitalize font-medium  text-gray-950 ">
            
<button onClick={()=> setIsOpen((prev)=> !prev)}  data-dropdown-toggle="dropdown" class=" hover:scale-105  font-medium text-xl px-4 text-center hover:border-b border-gray-800 inline-flex items-center hover:text-blue-700 dark:bg-blue-600" type="button">Breeds   <  PiDog className="ml-2 " size ={25}/><svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
  {isOpen && (
    <nav className="absolute top-full right-10  ">
      

      
        <ul class=" text-sm "  className="px-10  bg-white overflow-y-auto max-h-60  border-2 rounded-lg  " >
         <li>
           <Link to="/dog1"  class="   hover:text-blue-700  px-4 py-2  dark:hover:bg-gray-600  block">
            Labrador 
           
           
      
           </Link>
         </li>
         <li>
          
           <Link to='/dog2' href="#" class="block px-4 py-2 hover:text-blue-700 dark:hover:bg-gray-600 dark:hover:text-white">Golden Retriever</Link>
         </li>
         <li>
           <Link to='/dog3' class="block px-4 py-2  hover:text-blue-700 dark:hover:bg-gray-600 dark:hover:text-white">German Shepherd</Link>
         </li>
         <li>
           <Link to='/dog4' class="block px-4 py-2  hover:text-blue-700 dark:hover:bg-gray-600 dark:hover:text-white">Beagle</Link>
         </li>
         <li>
           <Link to='/pug' class="block px-4 py-2  hover:text-blue-700 dark:hover:bg-gray-600 dark:hover:text-white">Pug</Link>
         </li>
         <li>
           <Link to="/siberian" class="block px-4 py-2  hover:text-blue-700 dark:hover:bg-gray-600 dark:hover:text-white">Siberian Husky</Link>
         </li>
         <li>
           <Link to="/pomerian" class="block px-4 py-2  hover:text-blue-700 dark:hover:bg-gray-600 dark:hover:text-white">Pomerian</Link>
         </li>
         <li>
           <Link to="/bulldog" class="block px-4 py-2  hover:text-blue-700 dark:hover:bg-gray-600 dark:hover:text-white">Bulldog</Link>
         </li><li>
           <Link to="/Shihtuz" class="block px-4 py-2  hover:text-blue-700 dark:hover:bg-gray-600 dark:hover:text-white">Shih Tzu</Link>
         </li>
         <li>
           <Link to="/rot" class="block px-4 py-2  hover:text-blue-700 dark:hover:bg-gray-600 dark:hover:text-white">Rottweiler</Link>
         </li>
         
         
       </ul>
       
       </nav>
       
      )}
      

          </li>
          
          
          <li onClick={store} className="px-4 cursor-pointer capitalize font-medium hover:text-blue-700 hover:border-b border-gray-800 text-xl hover:scale-105 duration-200">
            Stores
          </li>
          
         
          
        </ul>
        
      
      

      

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10  text-gray-950 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white  text-gray-950">
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl ">
            home
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl ">
            <Link
              onClick={() => setNav(!nav)}
              to="/about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              about
            </Link>
          </li>
          <li onClick={log} className="px-4 cursor-pointer capitalize py-6 text-4xl ">
            Login
          </li>
          <li onClick={store} className="px-4 cursor-pointer capitalize py-6 text-4xl ">Store</li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl ">
            <Link
              onClick={() => setNav(!nav)}
              to="/contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
          
          
        </ul>
      )}
    
    

</div>

  );
};

export default NavBar;
