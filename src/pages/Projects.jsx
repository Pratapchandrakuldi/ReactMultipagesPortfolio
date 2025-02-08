import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { FaClinicMedical, FaHospital, FaUserClock, FaRobot, FaHotel } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "BookMyDoctor - Online Doctor Appointment System",
      icon: <FaClinicMedical className="text-primary" />,
      description: "Platform to search doctors based on specialization, location, and availability",
      features: [
        "User-friendly interface",
        "Secure appointment scheduling",
        "Real-time availability status",
        "Automated reminders"
      ]
    },
    {
      title: "Hospital Management System",
      icon: <FaHospital className="text-primary" />,
      description: "System to manage hospital operations and patient records",
      features: [
        "Patient record management",
        "Staff scheduling",
        "Billing system",
        "Pharmacy inventory"
      ]
    },
    {
      title: "Attendance Monitoring System",
      icon: <FaUserClock className="text-primary" />,
      description: "Automated system for tracking attendance",
      features: [
        "Biometric/RFID tracking",
        "Automated reports",
        "Real-time monitoring",
        "Payroll integration"
      ]
    },
    {
      title: "Pizza Chatbot using Amazon Lex",
      icon: <FaRobot className="text-primary" />,
      description: "AI-powered pizza ordering chatbot",
      features: [
        "Natural language processing",
        "Customizable options",
        "Order tracking",
        "Payment integration"
      ]
    },
    {
      title: "Hotel Management System using .NET",
      icon: <FaHotel className="text-primary" />,
      description: "Web-based hotel reservation system",
      features: [
        "Online booking",
        "Automated check-in/out",
        "Billing system",
        "Guest feedback system"
      ]
    }
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">Featured Projects</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map((project, index) => (
          <Col key={index}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body className="p-4">
                <div className="mb-3" style={{ fontSize: '2rem' }}>
                  {project.icon}
                </div>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text className="text-muted mb-3">
                  {project.description}
                </Card.Text>
                <ul className="list-unstyled">
                  {project.features.map((feature, fIndex) => (
                    <li key={fIndex} className="mb-2">
                      <small className="d-flex align-items-center">
                        <span className="me-2">✔️</span>
                        {feature}
                      </small>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;