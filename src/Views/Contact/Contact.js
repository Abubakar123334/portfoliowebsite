import React from "react"
import { useNavigate } from "react-router-dom";

const Contact = ()=>{

  const navigation = useNavigate()
return(
  <>
  
  <div>

         
  <div className="menuContainer">
<h4 onClick={()=>navigation("/")} className="menuitem">WORK</h4>
<h4  className="menuitem">PROJECTS</h4>
<h4 className="menuitem">ARTICLES</h4>
<h4 className="menuitem">CONTACT</h4>


</div>

<h1>Contact Me</h1>

  <h3>If you would like to chat about a project or just have question, please fill in the form below.I aim to get back within 2 days</h3>
  
  <h4>NAME</h4>
  
  <h4>EMAIL</h4>
  
  <h4>SUBJECT</h4>

  <h4>MESSAGES</h4>
</div>

  </>
)




}

export default Contact