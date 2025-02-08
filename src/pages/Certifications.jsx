import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: "PHP Full Stack Web Development Certification",
      issuer: "Udemy",
      description: "PHP-based full stack development with database integration",
      year: "2023"
    },
    {
      title: "Cloud Computing Certification",
      issuer: "Devs India",
      description: "Cloud platforms and architecture",
      year: "2022"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "AWS",
      description: "AWS Cloud services and security",
      year: "2023"
    },
    {
      title: "Full Stack Web Development Certification",
      issuer: "Coding Ninjas",
      description: "Front-end and back-end development",
      year: "2022"
    }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Certifications</h2>
      
      <div className="row g-3">
        {certifications.map((cert, index) => (
          <div key={index} className="col-md-6">
            <div className="p-4 border rounded bg-white shadow-sm h-100">
              <div className="d-flex align-items-start mb-2">
                <span className="fs-4 me-3">📜</span>
                <div>
                  <h5 className="mb-1 text-danger">{cert.title}</h5>
                  <p className="text-muted small mb-1">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              </div>
              <p className="text-success mb-0">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;