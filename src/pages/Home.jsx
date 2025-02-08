
import React from 'react';
const Home = () => {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold mb-3">Welcome to My Portfolio</h1>
        <p className="lead text-muted">
          Explore my technical skills and expertise through projects and certifications.
        </p>
      </div>

      {/* Blockchain Section */}
      <div className="card custom-card shadow-sm border-0 rounded-3">
        <div className="card-body p-4 p-md-5">
          <h2 className="h3 mb-4">Blockchain Technology</h2>
          <p className="text-secondary">
            Passionate about building secure and transparent solutions through blockchain technology.
          </p>

          <div className="mt-4">
            <h5 className="mb-3">Key Blockchain Concepts:</h5>
            <div className="row g-3">
              {[
                'Smart Contracts',
                'Cryptocurrency',
                'Decentralized Apps (dApps)',
                'Supply Chain Solutions',
                'Consensus Algorithms'
              ].map((item, index) => (
                <div key={index} className="col-12 col-md-6">
                  <div className="p-3 border rounded hover-shadow concept-box bg-info">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 text-muted">
            Aiming to implement blockchain solutions in real-world projects for enhanced transparency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
