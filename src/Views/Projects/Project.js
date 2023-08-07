import React from "react"
import { useNavigate } from "react-router-dom";

const Project = () =>{

  const navigation = useNavigate()

    return(
        <div>

         
  <div className="menuContainer">
<h4 onClick={()=>navigation("/")} className="menuitem">WORK</h4>
<h4  className="menuitem">PROJECTS</h4>
<h4 className="menuitem">ARTICLES</h4>
<h4 className="menuitem">CONTACT</h4>
</div>
<h1>Projects</h1>

<h2>Some of my spare time tinkering</h2>

    



<h1>Hairlist</h1>

<h3>To do app with a focus on simplicity. Only the feature you need to get things done.</h3>



        </div>
    )





}


export default Project;