import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
// import About from './Components/About';
// import Resume from './Components/Resume';
// import Portfolio from './Components/Portfolio';
// import Contact from './Components/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faLinkedin, faSquareGithub, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import ProjectDetails from './Components/ProjectDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <main className="main">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/projects/:projectId" element={<ProjectDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
