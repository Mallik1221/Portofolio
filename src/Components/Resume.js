import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Resume.css';

import { Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Carousel from 'react-material-ui-carousel';
import exp from "../assets/img/Incrivelsoft_exp.jpg";
import bda from "../assets/img/Big_data.jpg";
import se from "../assets/img/edunetIBM.jpg";
import Nosql from "../assets/img/Steel_plant.jpg";
import js from "../assets/img/AWS_CERTIFICATE.jpg";
import sql from "../assets/img/English_certi.jpg";
import workshop from "../assets/img/NPTEL.jpg";
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import resume from "../assets/BKSSSMALLIK-RESUME.pdf"
const certificationsData = [
  {
    name: "Experience Certificate",
    company: "IncrivelSoft Pvt. Ltd.",
    year: "2024",
    description: "This certificate acknowledges the successful completion of a freelance role as a Web Developer & Designer at IncrivelSoft Pvt. Ltd. from August 13, 2024, to November 2, 2024. B Kumara Siddi Satya Sai Mallik was recognized for his professionalism, consistency, and valuable contributions during the tenure.",
    image: exp
  },
  {
    name: "Big Data, Hadoop, and Spark Basics",
    company: "edX | IBM",
    year: "2024",
    description: "Successfully completed the Big Data, Hadoop, and Spark Basics course, offered by IBM through their online learning initiative, with a passing grade.",
    image: bda
  },
  {
    name: "Internship Certificate - Emerging Technologies (AI & Cloud) ",
    company: "Edunet Foundation in collaboration | AICTE",
    year: "2024",
    description: " Awarded for successfully completing a 4-week internship focused on leveraging SkillsBuild & IBM Cloud Platform in Emerging Technologies (AI & Cloud) from February 21, 2024, to March 20, 2024.",
    image: se
  },
  {
    name: "Full stack development - J2EE",
    company: "Rashtriya Ispat Nigam Limited | Steelplant",
    year: "2024",
    description: "This certificate acknowledges the successful completion of the Full Stack Development program focused on J2EE technologies. The program provided hands-on experience in building scalable web applications using Java, JSP, Servlets, and other enterprise-level technologies. The training at Rashtriya Ispat Nigam Limited | Steelplant emphasized both front-end and back-end development, equipping the participant with a comprehensive understanding of full-stack development processes.",
    image: Nosql
  },

  {
    name: "Professional Certificate in English Communication Skills",
    company: "edX | TsinghuaX ",
    year: "2024",
    description: "Completed a Professional Certificate in English Communication Skills, achieving passing grades in all courses as part of the program offered by TsinghuaX in collaboration with edX.",
    image: sql
  },
  {
    name: "AWS Cloud Practitioner Essentials",
    company: "edX | AWS",
    year: "2024",
    description: "This certificate confirms the successful completion and passing grade in the AWS Cloud Practitioner Essentials course, offered by AWS through its online learning initiative.",
    image: js
  },
  {
    name: "Data Science for Engineers",
    company: "NPTEL",
    year: "2024",
    description: "This certificate validates the successful completion of the Data Science for Engineers course offered by NPTEL. The course provided an in-depth understanding of key data science concepts such as data exploration, analysis, visualization, machine learning algorithms, and statistical modeling. It equipped participants with the skills necessary to implement data-driven solutions and analyze large datasets to make informed decisions in engineering contexts.",
    image: workshop
  }
  // Add more certifications as needed
];







const ResumeDownload = () => {
  return (
    <Button
      href={resume}
      download="BKSSSMALLIK-RESUME.pdf"
      variant="contained"
      color="primary"
      startIcon={<DownloadIcon />}
    >
      Download Resume
    </Button>
  );
};






const Resume = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  // const isMobile = useMediaQuery('(max-width: 1500px)'); // Change to your preferred breakpoint

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>Building Success Through Education, Experience, and Achievements</p>
      </div>
      <div className="container">

      <div className="row">
          

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Experience</h3>
             
             




            <div className="resume-item">
              <h4>Web Designer and Developer(Freelance)</h4>
              <h5>Aug 2024 - Nov 2024</h5>
              <p><em>Incrivelsoft</em></p>
              <p>•
 Designed and enhanced webpages for the companyʼs website, including a blog page with 
sections for articles, category carousels, video embeds and AI chatbot integration which 
received excellent feedback.</p>
              <p>•
 Freelance web developer: Delivered a highly functional landing page for the Upaasana
SMRITI project by seamlessly integrating Figma designs into WordPress website </p>
              <p>•
 Created detailed documentation on integration processes, plugin FAQs, and project 
requirements, ensuring clarity and enabling streamlined future development and 
collaboration.</p>
            </div>

            <div className="resume-item">
    <h4>Java Full Stack Intern</h4>
    <h5>2024</h5>
    <p><em>RINL-VIZAG STEEL PLANT</em></p>
    <p>• Designed and implemented a comprehensive system for managing machine maintenance 
    using J2EE and Web 2.0 technologies.</p>
    <p>• Developed key features including real-time maintenance tracking, automated alerts, and 
    data reporting.</p>
    <p>• Employed MySQL for database management and Apache Tomcat as the application server, 
    ensuring reliable data handling and server-side operations.</p>
</div>
            {/* <div className="resume-item">
              <h4>Web Development Intern</h4>
              <h5>2024</h5>
              <p><em>Brain O Vision</em></p>
              <p>During my 2-month internship at Brain O Vision, I gained valuable experience in responsive web design and various web development tools, including Canvas, Bootstrap, and WordPress. I also completed daily assessments that helped solidify my understanding and skills.</p>
            </div> */}
            {/* <div className="resume-item">
              <h4>Front End Development Intern</h4>
              <h5>2023</h5>
              <p><em>IBM</em></p>
              <p>During my 6 weeks IBM internship, I learned React.js and Bootstrap, and gained insights into collaborative practices.</p>
            </div> */}
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor's Degree in Information Technology</h4>
              <h5>2021 - 2025</h5>
              <p><em>JNTUGV College of Engineering, Vizianagaram</em></p>
              <p>Pursuing a comprehensive program focusing on core IT subjects, including programming, web development, data structures, and algorithms.</p>
            </div>
            <div className="resume-item">
              <h4>Intermediate in MPC</h4>
              <h5>2019 - 2021</h5>
              <p><em>Tirumala Junior College, Visakhapatnam</em></p>
              <p>Completed an intensive curriculum in Mathematics, Physics, and Chemistry, building a strong foundation in analytical and problem-solving skills.</p>
            </div>
            <div className="resume-item">
              <h4>High School (CBSE)</h4>
              <h5>2019</h5>
              <p><em>M.P & E.V english medium School, Visakhapatnam</em></p>
              <p>Achieved a solid academic foundation with a focus on science and mathematics, setting the stage for further studies in engineering.</p>
            </div>
          </div>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="300">
          <h3 className="resume-title">Positions of Responsibility</h3>
          <div className="col-lg-12">
            <div className="resume-item">
              <h4>Team Lead</h4>
              <h5>2024</h5>
              <p><em>Smart India Hackathon 2024 Grand Finale</em></p>
              <p>Led the team in developing the 'CertiTrack' project, focused on optimizing the issuance of certificates for the Government of NCT of Delhi.</p>
            </div>
            <div className="resume-item">
              <h4>Event Host</h4>
              <h5>2024</h5>
              <p><em>'Code Quest' at CRESENCE 2K24, JNTUGV CEV</em></p>
              <p> Organized and hosted a technical event during the branch fest for the CSE department at GV College of Engineering.</p>
            </div>
            <div className="resume-item">
              <h4>Student Affairs Coordinator</h4>
              <h5>2024</h5>
              <p><em>JNTUGV CEV</em></p>
              <p> Coordinated student activities, managed welfare initiatives, and collaborated with administration to address student concerns.</p>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="row certifications-section" data-aos="fade-up" data-aos-delay="400">
          <h3 className="resume-title">Certifications</h3>
          <div className="col-lg-12">
              <Carousel
               animation="fade" // Animation type (can be 'slide' or 'fade')
               interval={2000} // Time in milliseconds between automatic transitions
               duration={1000} 
               
               >
                {certificationsData.map((cert, index) => (
                  <div className="certification-item" key={index}>
                    <h4>{cert.name}</h4>
                    <h5>{cert.year}</h5>
                    <p><em>{cert.company}</em></p>
                    <p>{cert.description}</p>
                    <p><i class="fa-regular fa-image"></i> <i class="fa-solid fa-arrow-down"></i></p>
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="certification-image"
                      onClick={() => handleOpen(cert.image)}
                    />
                  </div>
                ))}
              </Carousel>
           
          </div>
        </div>
      </div>

      {/* Modal for larger image */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60%',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          <IconButton
            sx={{ position: 'absolute', top: 8, right: 8 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={selectedImage}
            alt="Certificate"
            style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' }}
          />
        </Box>
      </Modal>
      <br></br>
      <ResumeDownload/>
    </section>
  );
};

export default Resume;
