import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-5 pt-4">
      <div className="container">
        <div className="row g-4">
          {/* About Section */}
          <div className="col-md-4">
            <h5>Pratap Chandra Kuldi</h5>
            <p className="small">
              Full Stack Developer passionate about building innovative solutions 
              and continuously learning new technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li className="mt-2"><Link to="/projects" className="text-white text-decoration-none">Projects</Link></li>
              <li className="mt-2"><Link to="/certifications" className="text-white text-decoration-none">Certifications</Link></li>
              <li className="mt-2"><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <h5>Connect With Me</h5>
            <ul className="list-unstyled small">
              <li className="mt-2">📧 pratapkuldi489@gmail.com</li>
              <li className="mt-2">📱 +91 9348756496</li>
              <li className="mt-2">
                <a href="https://linkedin.com/in/pratapchandrakuldi" 
                   className="text-white text-decoration-none"
                   target="_blank" 
                   rel="noopener noreferrer">
                  🔗 LinkedIn
                </a>
              </li>
              <li className="mt-2">
                <a href="https://github.com/Pratapchandrakuldi" 
                   className="text-white text-decoration-none"
                   target="_blank" 
                   rel="noopener noreferrer">
                  🐱 GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center py-3 mt-4 border-top">
          <small>
            © {new Date().getFullYear()} Pratap Chandra Kuldi. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;