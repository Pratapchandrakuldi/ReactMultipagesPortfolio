
import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="mt-5 pt-4">
      <h2 className="text-center mb-4">Contact Me</h2>
      
      <ListGroup variant="flush" className="mx-auto" style={{ maxWidth: '600px' }}>
        <ListGroup.Item className="py-3">
          <h5>📍 Address</h5>
          <p className="mb-0">Bhubaneswar, India</p>
        </ListGroup.Item>

        <ListGroup.Item className="py-3">
          <h5>📧 Email</h5>
          <a href="mailto:pratapkuldi489@gmail.com" className="text-decoration-none">
            pratapkuldi489@gmail.com
          </a>
        </ListGroup.Item>

        <ListGroup.Item className="py-3">
          <h5>📱 Mobile</h5>
          <a href="tel:+919348756496" className="text-decoration-none">
            +91 9348756496
          </a>
        </ListGroup.Item>

        <ListGroup.Item className="py-3">
          <h5>👨💼 LinkedIn</h5>
          <a 
            href="https://linkedin.com/in/pratapchandrakuldi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            linkedin.com/in/pratapchandrakuldi
          </a>
        </ListGroup.Item>

        <ListGroup.Item className="py-3">
          <h5>🐱 GitHub</h5>
          <a 
            href="https://github.com/Pratapchandrakuldi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            github.com/Pratapchandrakuldi
          </a>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default Contact;