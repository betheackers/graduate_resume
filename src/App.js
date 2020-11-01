import React from "react";
import Title from "./components/title";
import Contact from "./components/contact";
import "./styles/style.css";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Education from "./components/education";
import Skills from "./components/skills";
import Projects from "./components/projects";
import AboutMe from "./components/aboutMe";

function App() {
  return (
    <div className="App">
      <div className="main-header">
        <Nav />
        <div className="split-header">
          <Title />
          <Contact />
        </div>
      </div>
      <AboutMe />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
