import React from "react";
import Title from "./components/title";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Education from "./components/education";
import Skills from "./components/skills";
import Projects from "./components/projects";
import AboutMe from "./components/aboutMe";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main-content">
        <Title />
        <AboutMe />
        <Education />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
