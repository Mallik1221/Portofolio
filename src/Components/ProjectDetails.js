
import { useParams } from "react-router-dom";
import Carousel from 'react-material-ui-carousel';// Using React-Bootstrap for the carousel
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import "./ProjectDetails.css"; // Import custom styles
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './PortfolioDetailsHeader.css'; // Use the provided styles here

import CertiTrack from "../assets/img/Certitrack.jpg"

import Portfolio from "../assets/img/personalportfolio.jpg";

import powerfit from "../assets/img/powerfit.jpg";

import jntugv1 from "../assets/img/jntugv1.png"
import jntugv2 from "../assets/img/jntugv2.png"
import jntugv3 from "../assets/img/jntugv3.png"
 
import issue1 from "../assets/img/issue1.png"
import issue2 from "../assets/img/issue2.png"
import issue3 from "../assets/img/issue3.png"
import resucraft1 from "../assets/img/resucraft.png"
import resucraft2 from "../assets/img/resucraft4.png"
import resucraft3 from "../assets/img/resucraft3.png"

import portfolio1 from "../assets/img/portfolio.png"
import portfolio2 from "../assets/img/portfolio2.png"
import portfolio3 from "../assets/img/portfolio3.png"


import library1 from "../assets/img/library1.png"
import library2 from "../assets/img/library2.png"
import library3 from "../assets/img/library3.png"
import Button from '@mui/material/Button';


// Mock data for demonstration
const projectData = { 
    "SIH-website": {
      title: "CertiTrack - Real-time Monitoring and Resource Allocation for Certificate Issuance",
      description: `CertiTrack is a project developed for the Smart India Hackathon 2024 Grand Finale, addressing the challenge of optimizing the issuance of caste and other certificates by the Revenue Department of NCT of Delhi. The system focuses on enhancing efficiency, streamlining processes, and ensuring real-time tracking of certificate issuance. The project features a real-time monitoring dashboard that allows for better resource allocation, automated alerts, and load balancing. CertiTrack aims to minimize bottlenecks, reduce delays, and improve transparency in the certificate issuance workflow.`,
      features: [
        
        "Real-time monitoring to capture and track data effectively.",
        "Centralized dashboards with role-based access for VROs, RIs, and MROs.",
        "Automated notifications for pending tasks, ensuring timely follow-ups.",
        "Dynamic load balancing for equitable task distribution."
      ],
      techStack: ["ReactJS", "Tailwindcss", "Node.js",,"Express.js", "PostgreSQL","Prisma "],
      images: [CertiTrack], // Replace with actual paths
      liveLink: null,
    },
    "portfolio": {
      title: "Personal Portfolio",
      description: `An interactive and visually appealing portfolio website created to showcase my skills, projects, and professional experiences as a front-end developer.`,
      features: [
        "Visually appealing and responsive layout.",
        "Sections for skills, projects, and contact information.",
        "Optimized for performance and accessibility."
      ],
      techStack: ["HTML5", "CSS3", "Javascript","BootStrap"],
      images: [Portfolio], // Replace with actual paths
      liveLink: null,
    },
    "Gym-landing-page": {
      title: "PowerFit - Gym Landing Page",
     "description": `PowerFit is a modern and responsive gym landing page designed to attract fitness enthusiasts and promote gym services effectively. The page features a sleek UI with an engaging layout, showcasing gym facilities, membership plans, customer reviews, and contact details. The goal is to provide an intuitive user experience while emphasizing the benefits of joining PowerFit.`,
      features: [
        "Home Section – Eye-catching hero section with a motivational gym banner and CTA (Call-To-Action) button for membership sign-ups.",
        "Services Section – Highlights different fitness programs, including weight training, cardio, personal training, and group workouts.",
        "Pricing Section – Displays membership plans with pricing tiers and benefits to help users choose the right plan.",
        "Reviews – Customer testimonials for credibility."
      ],
      techStack: ["HTML5", "CSS3", "Javascript","BootStrap"],
      images: [powerfit], // Replace with actual paths
      liveLink: null,
    }
  };
  



function PortfolioDetailsHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, []);

  return (
    <header className="header1 header d-flex align-items-center sticky-top justify-content-around">
      <div className="container-fluid d-flex align-items-center justify-content-between ">
        <Link to="/" className="logo" onClick={closeMenu}>
          <h1 className="sitenames">Mallik</h1>
        </Link>
        <nav className={`navmenu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>
                
             
              <Button variant="outlined">Home</Button>
              
              </Link>
            </li>
          </ul>
        </nav>
        <button className="mobile-nav-toggle d-xl-none" onClick={toggleMenu}>
          <i className={`bi ${menuOpen ? 'bi-x' : 'bi-list'}`}></i>
        </button>
        <div className="header-social-links">
        {/* <a href="https://x.com/" className="twitter"><i className="bi bi-twitter"></i></a> */}
          <a href="https://www.facebook.com/profile.php?id=100041112729671" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="https://github.com/Mallik1221" className="github"><i class="fa-brands fa-github"></i></a>
          
          <a href="
          " className="linkedin"><i className="bi bi-linkedin"></i></a>
       
        </div>
      </div>
    </header>
  );
}






const ProjectDetails = () => {
    const { projectId } = useParams();
    const project = projectData[projectId];
  
    if (!project) {
      return <p>Project not found!</p>;
    }
  
    return (
      <div className="project-details">
        <PortfolioDetailsHeader />
        <br />
        <br />

        <h1 className="text-center mt-4">{project.title}</h1>

        <div className="d-flex flex-column">
          {/* Left Column: Carousel */}
          <div className="carousel-container align-self-center">
            <Carousel
              animation="fade"
              interval={2000}
              duration={700}
            >
              {project.images.map((image, index) => (
                <div key={index} className="carousel-slide">
                  <img
                    src={image}
                    alt={`Project ${index + 1}`}
                    className="carousel-image"
                  />
                </div>
              ))}
            </Carousel>
          </div>

          {/* Right Column: Project Details */}
          <div className="project-info">
            <div className="description mt-4">
              <h3>About the Project</h3>
              <p>{project.description}</p>

              {project.features && (
                <>
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}

              {project.techStack && (
                <>
                  <h4>Tech Stack:</h4>
                  <ul>
                    {project.techStack.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {project.liveLink && (
              <div className="text-center mt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Live Project
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
};

export default ProjectDetails;
