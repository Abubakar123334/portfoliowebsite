import "./App.css"
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Project from "./Views/Projects/Project";
import Article from "./Views/Article/Article"
import Contact from "./Views/Contact/Contact"
const App =()=>{
 
  return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route index path="*" element={<Home />} />
        <Route path="/project"  element={<Project />} />
        <Route path="/Article"  element={<Article />} />
        <Route path="/Contact"  element={<Contact />} />
    </Routes>

  )
}
export default App
 