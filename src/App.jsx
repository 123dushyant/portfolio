import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Expertise from "./Pages/Expertise";
import Skills from "./Pages/Skills";
import ConnectSection from "./Pages/ConnectSection";
import Work from "./Pages/Work";


const Academics = () => <div>Academics Page</div>;
const Admissions = () => <div>Admissions Page</div>;
const Faculty = () => <div>Faculty Page</div>;
const Students = () => <div>Students Page</div>;
const Gallery = () => <div>Gallery Page</div>;
const Contact = () => <div>Contact Us Page</div>;
const DataScience = () => <div>Data Science Page</div>;
const UiUxDesign = () => <div>UI/UX Design Page</div>;
const ModernPhysics = () => <div>Modern Physics Page</div>;
const MusicProduction = () => <div>Music Production Page</div>;
const PersonalFinance = () => <div>Personal Finance Page</div>;
const Fitness = () => <div>Fitness Page</div>;
const Categories = () => <div>Categories Page</div>;

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <About />
      <Expertise />
      <Skills />
      <Work />
      <ConnectSection />
      <Routes>
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/students" element={<Students />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/ui-ux-design" element={<UiUxDesign />} />
        <Route path="/modern-physics" element={<ModernPhysics />} />
        <Route path="/music-production" element={<MusicProduction />} />
        <Route path="/personal-finance" element={<PersonalFinance />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/categories" element={<Categories />} />
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
