import React from "react";
import About from "./About";
import { Link, useNavigate } from "react-router-dom";


const Footer = () => {
  const about = () => {
    navigate("/about");
  };
  
  const navigate = useNavigate();
  return (
    <footer class="bg-cyan-200 dark:bg-gray-900 border-t border-gray-300">
      <div class="mx-auto w-full max-w-screen-xl p-4  py-6  lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <Link to="/" class="flex items-center">
              <img
                src="https://img.icons8.com/?size=512&id=9199&format=png "
                class="h-8 mr-3"
                alt="FlowBite Logo"
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap  dark:text-white">
                Furry Finds
              </span>
            </Link>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Support{" "}
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4 cursor-pointer" onClick={about}>
                  <Link to={About} class="hover:underline">
                    About Us
                  </Link>
                </li>
                <Link to='/contact' className="cursor-pointer">
                  <Link  class="hover:underline">
                    Contact US
                  </Link>
                </Link>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <Link to="/girldog" class="hover:underline ">
                    Top 20 Girl Dog Names
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/boydog" class="hover:underline">
                   Top 20 Boy Dog Names
                  </Link>
                </li>
                <li class="mb-4">
                  <Link to="/pdog" class="hover:underline ">
                  Most Popular Dog Breeds
                  </Link>
                </li>
                
                
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900  uppercase dark:text-white">
                Legal
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <Link to="/privacy" class="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" class="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-950 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link to="/" class="hover:underline">
              Furry Finds™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
