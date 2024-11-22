import React, { useRef } from 'react';
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
        <Form.Control type="text" name="user_name"  placeholder="Enter your name" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="user_email"  placeholder="example@gmail.com" required />
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

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6uo4vtl', 'template_s6u58sa', formRef.current, 'sBgRu32h1r2Lxf7ps')
      .then((result) => {
        alert("Thank you for visiting my profile, I will reach you soon 🤗");
        formRef.current.reset();
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
          <a href="https://www.facebook.com/harshavivek.nani?mibextid=ZbWKwL"><FontAwesomeIcon className="icons" icon={faSquareFacebook} /></a>
          <a href="https://www.linkedin.com/in/harsha-vivek-a47309243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FontAwesomeIcon className="icons" icon={faLinkedin} /></a>
          <a href="https://github.com/Harsha-vivek03"><FontAwesomeIcon className="icons" icon={faSquareGithub} /></a>
          <a href="https://www.instagram.com/the_hidden_hate?igsh=MTJsdTBxeDJlczU0cQ=="><FontAwesomeIcon className="icons" icon={faSquareInstagram} /></a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
