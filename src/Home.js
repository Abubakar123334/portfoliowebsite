import "./App.css"
import React from "react"
 
import dogpic from "./Image/nazim.jpg"

import { useNavigate } from "react-router-dom"

const Home =()=>{

  const navigation = useNavigate();
 
  return(
    <div>
  <img src= {dogpic} className="pics"/>

  <h2 className="text">ABUBAKAR NAZIM</h2>

  <div className="menuContainer">
<h4 className="menuitem">WORK</h4>
<h4 onClick={()=>navigation("/project")} className="menuitem">PROJECTS</h4>
<h4 className="menuitem">ARTICLES</h4>
<h4 className="menuitem">CONTACT</h4>
</div>


<div>
<h1 className="pay">Hi I´m Nazim.</h1>
<h4>i`m a web developer from Manchester,UK. currently lead developer at a local agaency, Fhoke. In my spare time i enjoy DIY, gaming and building my own projects. My preffered tools are PHP, Laravel and Vue.js</h4>
<h4>i`m on Whatsapp, Threads, Github and Instagram.</h4>

</div>

<div>
  <h2>Recent Articles</h2>
</div>

<div>
 <h2>Converting a Laravel Inertia App from Mix to Vite</h2>
 <h3>Laravel</h3>
 <h4>I reently converted my inertia app from Laravel Mix to using vite. In this post ill talk about how it went, as well as some of the gotchas</h4>
 <h4>Read Article </h4>
</div>

<div>
<h2>Using a Ziggy with Laravel, Inertia [Vue] and Vite</h2>
<h3>Laravel</h3>
<h4>I recently converted one of my apps from Laravel Mix [Webpack] to vite. Unfortunately there was a big stumbling block when it came to getting Ziggy working. In this post i discuss how i found a solution</h4>
<h4>Read Article </h4>
</div>

<div>
<h2>Multi-Image Uploader with Laravel, Javascript & Tailwind</h2>
<h3>Laravel</h3>
<h4>A step-by-guide on creating a multi-image uploader using Laravel, Javascript & Tailwind</h4>
<h4>Read Article </h4>
</div>

<div className="naz"> @2023 Abubakar Nazim.             Built with Laravel... </div>


 </div>
 

  )
}
export default Home
 