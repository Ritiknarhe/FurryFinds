import React from "react";
import { Link } from "react-router-dom";



const Progress = () => {

    
  return (
    <div name="about"
    className="w-full h-screen bg-sky-50 text-gray-950">
      <div className=" p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 max-w-screen-lg">Top Stories</p>
        </div >
        <ul className="hidden md:flex ">
            <li className="px-4">
            
        <img src="https://www.akc.org/wp-content/uploads/2019/01/summer-picnic-with-dog.jpg" className="w-[100%]  " alt="" />
   
    <p class="mb-5  text-cyan-500 font-semibold  mt-2">Fruits and Vegetables Dogs Can or Can’t Eat</p>
    <br />
    <Link to='/eat' href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </Link>
            </li>
            <li>
           
        <img src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2016/11/05221853/Bulldog-puppy-getting-a-check-up-at-the-vet.jpeg" className="w-[100%] " alt=""/>
    
    <p class="mb-4  text-cyan-500 font-semibold  mt-2">Your Complete Guide to First-Year Puppy Vaccinations.</p>
    <Link to='/guide' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </Link>
            </li>
            <li className="px-4">
           
        <img src="https://www.akc.org/wp-content/uploads/2017/06/Bulldog-puppy-laying-down-stretching-in-the-grass-1.jpeg" alt="" className="w-[100%] " />
   
    <p class="mb-2   text-cyan-500 font-semibold  mt-5">7 Places to Look for Ticks on Your Dog.</p> <br />
    <Link to='/spot' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </Link>
            </li>
            <li className="px-4">
            
        <img src="https://www.akc.org/wp-content/uploads/2018/05/saint-bernard-laying-on-grass-looking-sad.jpg" className="w-[100%]" alt=""/>
    
    <p class="mb-3 text-cyan-500 font-semibold  mt-2">Dog Anxiety: What Dog Owners Need to Know.</p>
    <Link to="/anxiety" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </Link>
            </li>
            
           


           
        </ul>
      </div>
    </div>
  );
};

export default Progress;
