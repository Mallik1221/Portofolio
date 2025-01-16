import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer-bottom">
        <div className="row justify-content-center text-center"> {/* Center the content */}
          <div className="col-12 footer-info">
          
            <p>All rights reserved &copy; 2024</p>
            <div className="social-links mt-3 d-flex justify-content-center">
            {/* <a href="https://x.com/" className="twitter"><i className="bi bi-twitter"></i></a> */}
          <a href="https://www.facebook.com/profile.php?id=100041112729671" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="https://github.com/Mallik1221" className="github"><i class="fa-brands fa-github"></i></a>
          
          <a href="https://www.linkedin.com/in/bksssmallik" className="linkedin"><i className="bi bi-linkedin"></i></a>
        
            </div>
          </div>
        </div>
          <p>Designed & Developed by <a href="#">Mallik</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
