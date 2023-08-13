import "./App.css"
import React from "react"
 
import dogpic from "../../Image/nazim.jpg"

const Work =()=>{
 
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
      <h1>I am Work Page</h1>

 </div>
 

  )
}
export default Work
 