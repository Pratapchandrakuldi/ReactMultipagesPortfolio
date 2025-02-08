import React from 'react'
import { Card, ListGroup, Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="mt-5 pt-5">
      {/* Background Section */}
      <Row className="mb-5">
        <Col lg={12}>
          <h2 className="display-5 mb-4">Background</h2>
          <p className="lead">
            I am Pratap Chandra Kuldi, a MERN Stack Developer and Blockchain Enthusiast, 
            with a completed MCA from Centurion University of Technology and Management, Bhubaneswar.
          </p>
        </Col>
      </Row>

      {/* Education Section */}
      <Row className="mb-5">
        <Col lg={12}>
          <h3 className="mb-4">Education</h3>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h5>Bachelor of Computer Applications (BCA)</h5>
              <p className="mb-0">
                Completed from a reputed institution with strong fundamentals in computer science
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Master of Computer Applications (MCA)</h5>
              <p className="mb-0">
                Currently pursuing at Centurion University, enhancing technical expertise
                and practical skills (Expected Graduation: 2025)
              </p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      {/* Skills Section */}
      <Row className="mb-5">
        <Col lg={12}>
          <h3 className="mb-4">Technical Skills</h3>
          <Row>
            <Col md={6} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Full Stack Development</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>HTML/CSS/JavaScript</ListGroup.Item>
                    <ListGroup.Item>ReactJS & jQuery</ListGroup.Item>
                    <ListGroup.Item>PHP & .NET</ListGroup.Item>
                    <ListGroup.Item>Python, Java, C++</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>DevOps & Databases</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Docker & AWS</ListGroup.Item>
                    <ListGroup.Item>CI/CD Pipelines</ListGroup.Item>
                    <ListGroup.Item>MySQL & PostgreSQL</ListGroup.Item>
                    <ListGroup.Item>MongoDB</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Career Goals Section */}
      <Row>
        <Col lg={12}>
          <Card className="bg-secondary text-white">
            <Card.Body>
              <h3 className="mb-3">Career Goals</h3>
              <p className="lead mb-0">
                My goal is to become a proficient Full Stack Developer and DevOps Engineer,
                continuously learning and adapting to emerging technologies to build
                scalable and efficient solutions.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    
  );
};

export default About;