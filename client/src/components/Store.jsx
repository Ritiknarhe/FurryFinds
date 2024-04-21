import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import {Users}from "./users";
import { useState } from 'react'
import Table from './table'


const Store = () => {
  const [query, setQuery] = useState("");const keys = ["first_name", "last_name", "email"];
    const Search = (data) => {
      return data.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(query))
      );
    };
  return (
    <div><NavBar/>
     <br />
      <br /> <br />
      <br />
      <br />
    <div name="contact" className="w-full  bg-sky-50 text-gray-950">
        <div className="flex flex-col  justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8 text-justify">
            
<form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div >
   
    <input  type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Name Place or Pincode..." required onChange={(e) => setQuery(e.target.value.toLowerCase())} />
        
    </div>
</form>
<br />
<Table data={Search(Users)} />








            
          </div>
        </div>
      </div>


    
    <Footer/>
    </div>
  )
}

export default Store