import React from "react";
import "./index.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";


function App() {
  return (
	<>	
	<Routes>
		<Route path="/" element={<Home />} />	
		<Route path="/about" element={<About />} />
		<Route path="/contact" element={<Contact />} />
		<Route path="/project" element={<Project />} />

	</Routes>
	</>
  );
}


export default App;