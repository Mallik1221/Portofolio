import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faLinkedin, faSquareGithub, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Contact.css';

function TextControlsExample({ formRef, handleSubmit }) {
  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="user_name" placeholder="Enter your name" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="user_email" placeholder="example@gmail.com" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" name="message" rows={3} placeholder="Write something" required />
      </Form.Group>
      <Button variant="primary" type="submit">Send Message</Button>
    </Form>
  );
}

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Setting the template params from the formData state
    const templateParams = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      message: formData.message
    };

    emailjs.sendForm('service_idffv7s', 'template_m0qw49q', formRef.current, 'e4HgT1jXbsGvpfUJg')
      .then((result) => {
        alert("Thank you for visiting my profile, I will reach you soon 🤗");
        formRef.current.reset();
        setFormData({
          user_name: '',
          user_email: '',
          message: ''
        });
      }, (error) => {
        console.log(error.text);
        alert("An error occurred, please try again later.");
      });
  };

  return (
    <div>
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact Me</h2>
        <p>Let's Connect! I'm always open to discussing new opportunities, collaborations, or projects. Feel free to reach out!</p>
      </div>
      <div className="contact">
        <div className="c-leftdiv">
          <TextControlsExample formRef={formRef} handleSubmit={handleSubmit} />
        </div>
        <div className="c-rightdiv">
          <h1>Get in Touch</h1>
          <p>Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you. Simply fill the form and send me an email.</p>
          <p>You can also reach me through...</p>
          <br />
          <a href="https://www.facebook.com/profile.php?id=100041112729671"><FontAwesomeIcon className="icons" icon={faSquareFacebook} /></a>
          <a href="https://www.linkedin.com/in/bksssmallik"><FontAwesomeIcon className="icons" icon={faLinkedin} /></a>
          <a href="https://github.com/Mallik1221"><FontAwesomeIcon className="icons" icon={faSquareGithub} /></a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
