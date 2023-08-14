import React from "react"
import { useNavigate } from "react-router-dom";

const Article = ()=>{

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
</div>

     <h1>Hello Nazim and Mahrus</h1>
  
  
  
  
  
  
  </>
)




}

export default Article