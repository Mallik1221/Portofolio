import {useState,React} from 'react';
import { Link } from 'react-router-dom';
import './hero.css';
import img1 from '../assets/img/backimage5.jpg';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Header from './Header';
const Hero = () => {

  const [activeSection, setActiveSection] = useState('');
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
     
    }
  };

  return (
    <div>
    <Header />
    <section id="home" className="hero section">
      <img src={img1} alt="Hero Background" data-aos="fade-in" />

      <div className="container text-center" data-aos="zoom-out" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2>Harsha Vivek </h2>
            <p>I'm a professional Frontend developer</p>
            <Link onClick={() => scrollToSection("about")} className="btn-get-started">Explore Me</Link>
          </div>
        </div>
      </div>
    </section>

     <section id="about">
     <About/>
     </section>

     <section id="resume">
     <Resume/>
     </section>

     <section id="portfolio">
     <Portfolio/>
     </section>

     <section id="contact">
     <Contact/>
     </section>

     </div>
  );
};

export default Hero;
