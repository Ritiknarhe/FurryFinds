import React from 'react'

import Full from './components/Full'
import {     Routes,   Route } from "react-router-dom";

import Login from './components/Login';
import Blog from './components/Blog';
import Store from './components/Store'
import SignUp from './components/SignUp';
import Prediction from './components/Prediction';
import About from './components/About';
import Contact from './components/Contact'
import Dog1 from './components/DogsInfo/Dog1'
import Dog2 from './components/DogsInfo/Dog2'
import Dog3 from './components/DogsInfo/Dog3'
import Eat from './components/TopStories/Eat';
import Guide from './components/TopStories/Guide';
import Spot from './components/TopStories/Spot';
import Anxiety from './components/TopStories/Anxiety';
import Dog4 from './components/DogsInfo/Dog4';
import Pug from './components/DogsInfo/Pug';
import Siberian from './components/DogsInfo/Siberian';
import Pomerian from './components/DogsInfo/pomerian';
import Bulldog from './components/DogsInfo/Bulldog'
import Shihtuz from './components/DogsInfo/Shihtuz';
import Rottweiler from './components/DogsInfo/Rottweiler';
import MDog from './components/MDog';
import FDog from './components/FDog';
import PDog from './components/PDog';





const  App= () => {
  return (
    
     <>
          <Routes>
            <Route path='/' element={<Full/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/store' element={<Store/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/predication' element={<Prediction/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/eat' element={<Eat/>}/>
            <Route path='/guide' element={<Guide/>}/>
            <Route path='/spot' element={<Spot/>}/>
            <Route path='/anxiety' element={<Anxiety/>}/>
            <Route path='/contact' element={<Contact/>}/>

            <Route path='/Dog1' element={<Dog1/>}/>
            <Route path='/Dog2' element={<Dog2/>}/>
            <Route path='/Dog3' element={<Dog3/>}/>
            <Route path='/Dog4' element={<Dog4/>}/>
            <Route path='/pug' element={<Pug/>}/>
            <Route path='/siberian' element={<Siberian/>}/>
            <Route path='/pomerian' element={<Pomerian/>}/>
            <Route path='/bulldog' element={<Bulldog/>}/>
            <Route path='/shihtuz' element={<Shihtuz/>}/>
            <Route path='/rot' element={<Rottweiler/>}/>
            <Route path='/boydog' element={<MDog/>}/>
            <Route path='/girldog' element={<FDog/>}/>
            <Route path='/pdog' element={<PDog/>}/>
            

            
            
            


          </Routes>
    </>
   
     
  )
}

export default App;