import React from "react";

const Certifications = () => {
  const certifications = [
    {
      title: "PHP Full Stack Web Development Certificate",
      issuer: "Interface Software Services",
      description: "PHP-based full stack development with database integration.",
      year: "1st Nov 2022 to 4th Feb 2023",
      link: "https://drive.google.com/file/d/1Www5bnyTpaNsmooIGBvF5PGDvzqet4vH/view?usp=drive_link"
    },
    {
      title: "PHP Full Stack Internship Certificate",
      issuer: "Interface Software Services",
      description: "PHP-based full stack development with database integration.",
      year: "1st Nov 2022 to 4th Feb 2023",
      link: "https://drive.google.com/file/d/1ueX1pU6MB9MMVt5QY9lAzd1H1U40CKNX/view?usp=sharing"
    },
    {
      title: "Project Certificate",
      issuer: "Interface Software Services",
      description: "PHP-based full stack development with database integration.",
      year: "1st Nov 2022 to 4th Feb 2023",
      link: "https://drive.google.com/file/d/1qAD0ql4xrQ5ISZUgNcGLyzjq7oGffZtm/view?usp=sharing"
    },
    {
      title: "Cloud Computing Engineer Certification",
      issuer: "Devs India",
      description: "Cloud platforms and architecture.",
      year: "2024",
      link: "https://drive.google.com/file/d/13rOzpVDLWBiQ1INeXzGEYoE9ygkzLaHl/view?usp=sharing"
    },
    {
      title: "AWS Certificate Of Attendance",
      issuer: "AWS Summit India",
      description: "AWS Cloud services and security.",
      year: "2023",
      link: "https://drive.google.com/file/d/1_BaMYRXtp-3Mb8OBujbN2RT9J_goRvbY/view?usp=sharing"
    },
    {
      title: "Internship In Full Stack Development",
      issuer: "BSH Technologies",
      description: "Front-end and back-end development.",
      year: "2025",
      link: "https://drive.google.com/file/d/1VMrS8UdVg_Zyvh07CDzJPJzmjcEzndh7/view?usp=sharing"
    },
  ];

  return (
    <div className="pt-28 pb-16 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-gray-800 dark:to-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Certifications</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transform transition duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">📜</span>
                <div>
                  <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    {cert.title}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{cert.description}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white bg-blue-600 dark:bg-blue-500 px-4 py-2 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
