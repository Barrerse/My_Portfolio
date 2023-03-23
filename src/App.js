import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import Resume from "./routes/Resume";


// importing routes
import { Routes, Route } from "react-router-dom";


function App() {
  return (
	<>	
	<Routes>
		
		<Route path="/about" element={<About />} />
		<Route path="/project" element={<Project />} />
		<Route path="/resume" element={<Resume />} />
		<Route path="/contact" element={<Contact />} />
		<Route path="*" element={<Home />} />	

	</Routes>
	</>
  );
}


export default App;