import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Expertise from "./Pages/Expertise";
import Skills from "./Pages/Skills";
import ConnectSection from "./Pages/ConnectSection";
import Work from "./Pages/Work";


function App() {
  return (
    <Router>
      <Home />
      <About />
      <Expertise />
      <Skills />
      <Work />
      <ConnectSection />
      <Routes>
        
      </Routes>
    </Router>
  );
}

export default App;


/*

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />

                    </Routes>
                    </div>
                </Router>
            );
        };
        
        export default App;

 */
