import React from 'react'

import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill,BsInstagram } from "react-icons/bs";
import { RiTwitterFill } from "react-icons/ri";
import { PiFilePdfFill } from "react-icons/pi";


const SocialLinks = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed  border-gray-300">
        <ul >
            <li className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 font-bold border-t border-r-2 border-gray-300 bg-cyan-200" 
              
            }>
                <a href="https://www.instagram.com/furry_finds_4_u/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" className="flex justify-between items-center w-full text-gray-600"
              
              target="_blank"
              rel="noreferrer">
                    <>
                    Instagram <BsInstagram size ={30}/>
                </>
                </a>
            </li>
            <li className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 font-bold border-r-2 border-t border-gray-300 bg-cyan-200" 
              
            }>
                <a href="https://twitter.com/Furry_Finds_4_U" className="flex justify-between items-center w-full text-gray-600"
              
              target="_blank"
              rel="noreferrer">
                    <>
                    Twitter <RiTwitterFill size ={30}/>
                </>
                </a>
            </li>
            <li className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 font-bold border-r-2 border-t border-b border-gray-300 bg-cyan-200" 
              
            }>
                <a href="mailto:furryfinds004@gmail.com" className="flex justify-between items-center w-full  text-gray-600"
              
              target="_blank"
              rel="noreferrer">
                    <>
                    Mail <HiOutlineMail size ={30}/>
                </>
                </a>
            </li>
            <li className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 font-bold border-r-2 border-b border-gray-300 bg-cyan-200" 
              
            }>
                <a href="/dog.pdf" className="flex justify-between items-center w-full  text-gray-600 : "
                  download={true}
              target="_blank"
              rel="noreferrer">
                    <>
                    Template <PiFilePdfFill  size ={30}/>
                </>
                </a>
            </li>
            
        </ul>
    </div>
  )
}

export default SocialLinks