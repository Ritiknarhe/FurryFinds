import React from 'react'
import NavBar from './NavBar'

import Footer from'./Footer'
import Home from'./Home'
import Stories from'./Stories'
import Contact from'./Contact'


import SocialLinks from './SocialLinks'
import About from './About'



const Full = () => {
  return (
    <div>
       <NavBar/>
       
       
     
       <SocialLinks/>
       <Home/>
       <About/>
       <Stories/>
       <Contact/>
       <Footer/>
      

    </div>
  )
}

export default Full