import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import for routing
import CertiTrack from "../assets/img/Certitrack.jpg"
import Portfolioo from "../assets/img/personalportfolio.jpg";
import powerfit from "../assets/img/powerfit.jpg";

import issue1 from "../assets/img/issue1.png";
import library from "../assets/img/library.png";
import portfolio from "../assets/img/portfolio.png";
import resucraft from "../assets/img/resucraft.png";
import jntugv from "../assets/img/jntugv-website.png";
import './Portfolio.css'; // Import the CSS file for styling

const Portfolio = () => {
  const navigate = useNavigate(); // For navigation to detailed components

  useEffect(() => {
    // Add your AOS (Animate On Scroll) initialization here if you're using it
    // AOS.init();
  }, []);

  const projects = [
    {
      id: 1,
      category: "filter-app",
      imgSrc: CertiTrack,
      title: "CertiTrack – Smart India Hackathon 2024",
      description: "Desgined and Developed CertiTrack, a project aimed at optimizing the issuance of caste and other certificates by the Revenue Department.",
      github: "https://github.com/Sivakalki/SIH",
      detailsRoute: "/projects/SIH-website",
    },
    {
      id: 2,
      category: "filter-product",
      imgSrc: Portfolioo,
      title: "Personal Portfolio",
      description: "An interactive and visually appealing portfolio website created to showcase my skills, projects, and professional experiences as a front-end developer.",
      github: "https://github.com/Mallik1221/Myportfolio",
      detailsRoute: "/projects/portfolio",
    },
    {
      id: 3,
      category: "filter-branding",
      imgSrc: powerfit,
      title: "PowerFit - Gym Landing Page",
      description: "Collaboratively developed a free online resume builder to make resumes with ease.",
      github: "https://github.com/Harsha-vivek03/ResuCraft",
      detailsRoute: "/projects/Gym-landing-page",
    }
  ];

  return (
    <main className="main">
      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>Explore My Projects: A glimpse into my work as a softeware engineer, combining creativity and functionality.</p>
        </div>

        <div className="container">
          <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
            <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-product">Card</li>
              <li data-filter=".filter-branding">Web</li>
            </ul>

            <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
              {projects.map((project) => (
                <PortfolioItem
                  key={project.id}
                  category={project.category}
                  imgSrc={project.imgSrc}
                  title={project.title}
                  description={project.description}
                  github={project.github}
                  detailsRoute={project.detailsRoute}
                  navigate={navigate}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const PortfolioItem = ({ category, imgSrc, title, description, github, detailsRoute, navigate }) => {
  return (
    <div className={`col-lg-4 col-md-6 portfolio-item isotope-item ${category}`}>
      <img src={imgSrc} className="img-fluid" alt={title} />
      <div className="portfolio-info">
        <h4>{title}</h4>
        <p>{description}</p>
        <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          GitHub <i className="bi bi-github"></i>
        </a> 
        <button
          className="btn btn-secondary"
          onClick={() => navigate(detailsRoute)}
        >
          View Details <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
