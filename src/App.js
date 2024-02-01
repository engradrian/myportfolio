import React from "react"

import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Skills from "./components/Skills"

import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";

function App() {
  const [isLightMode, setIsLightMode] = React.useState(false)

  return (
    <div className="App">
      <Header 
        isLightMode={isLightMode}
        setIsLightMode={setIsLightMode}
      />
      <HeroSection />
      <AboutMe
        isLightMode={isLightMode}
      />
      <Skills 
        isLightMode={isLightMode}
      />
      <Projects 
        isLightMode={isLightMode}
      />
      <Contact 
        isLightMode={isLightMode}
      />
    </div>
  );
}

export default App;
