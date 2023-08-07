import "./App.css"
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Project from "./Views/Projects/Project";

const App =()=>{
 
  return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route index path="*" element={<Home />} />
        <Route path="/project"  element={<Project />} />

    </Routes>

  )
}
export default App
 