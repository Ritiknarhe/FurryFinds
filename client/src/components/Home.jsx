import React from "react";
import HeroImage from "../assets/portfolio/dog.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";

import { useNavigate } from 'react-router-dom';






const Home = () => {
  const predict=()=>{
    navigate('/predication')
}
const navigate = useNavigate()
  return (
      <div name="home" className=" flex h-screen w-full bg-sky-50 ">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-6xl font-bold text-black">
              Discover Your Perfect Pup with <span className="text-sky-600 ">  FurryFinds</span>
              
            </h2>
            <br />
            <div>
              
              <button onClick={predict} className=" group   text-white w-fit px-6 py-3 my-2 flex items-center rounded-md  cursor-pointer transition ease-in-out delay-180 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 ...">
                Find Your Match
                <span className=" ">
                  <MdKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </button>
              
            </div>
          </div>
          <div>
            <img
              src={HeroImage}
              alt="img"
              className="rounded-2xl mx-auto w-2/3 md:w-full  "
            />
          </div>
          
        </div>
        
      </div>
   
  );
};

export default Home;
