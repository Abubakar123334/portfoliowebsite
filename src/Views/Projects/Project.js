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

<h3>Some of my spare time tinkering</h3>

    



<h1>Hairlist</h1>

<h3>To do app with a focus on simplicity. Only the feature you need to get things done.</h3>


<h1>The Brief</h1>
<h3>To do list apps are everywhere, but my biggest issue with them all is how bloated they all are. Social login, user tracking, email notifications.The list goes on. I wanted something really simple to get the job done, so built it. </h3>

        </div>
    )





}


export default Project;