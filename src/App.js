import React from "react";

import Header from "./Component/Header";
import About from "./Component/About";
import Skill from "./Component/Skill";
import Project from "./Component/Project";
import Contact from "./Component/Contacts";

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Skill/> <hr/>
      <Project/><hr/> 
      <Contact/>
    </div>
  );
}

export default App;
