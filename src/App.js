import "./App.css"
import React from "react"
 
import dogpic from "./Image/nazim.jpg"

const App =()=>{
 
  return(
    <div>
  <img src= {dogpic} className="pics"/>

  <h2 className="text">ABUBAKAR NAZIM</h2>

  <div className="menuContainer">
<h4 className="menuitem">WORK</h4>
<h4 className="menuitem">PROJECTS</h4>
<h4 className="menuitem">ARTICLES</h4>
<h4 className="menuitem">CONTACT</h4>
</div>


<div>
<h1 className="pay">Hi I´m Nazim</h1>
<h4>i`m a web developer from Manchester,UK. currently lead developer at a local agaency, Fhoke. In my spare time i enjoy DIY, gaming and building my own projects. My preffered tools are PHP, Laravel and Vue.js</h4>
<h4>i`m on Threads a  nd Instagram.</h4>
</div>

<div>
  <h2>Recent Articles</h2>
</div>

<div>
 <h2>Converting a Laravel Inertia App from Mix to Vite</h2>
</div>


 </div>
 

  )
}
export default App
 