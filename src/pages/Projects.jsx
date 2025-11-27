import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "BookMyDoctor - Online Doctor Appointment",
      description: "Search doctors, book appointments, and get reminders.",
      link: "https://bookmydoctor.free.nf/",
      tech: "PHP, MySQL, javaScript, jQuery, AJAX, PhpMyAdmin",
    },
     {
      title: "Web3 for CRCIDF",
      description: "Web-based hotel reservation system with automated check-in/out.",
      link: "https://multipage-reactjs.vercel.app/",
      tech: "ReactReact.js, CSS, Font Awesome, HTML5, Router, React-Hooks",
    },
     {
      title: "Attendance Monitoring System",
      description: "Automated system for tracking attendance and payroll.",
      link: "https://mcaattendance.free.nf/",
      tech: "PHP, MySQL, javaScript, jQuery, AJAX, PhpMyAdmin",
    },
    {
      title: "Hospital Management System",
      description: "Manage hospital operations, patients, and staff efficiently.",
      link: "https://github.com/Pratapchandrakuldi/Hospital-Management-System",
      tech: "Java, MySQL",
    },
    {
      title: "Pizza Chatbot using Amazon Lex",
      description: "AI-powered pizza ordering chatbot with payment integration.",
     
      tech: "Amazon Lex, React",
    },
  ];

  return (
    <div className="pt-28 pb-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Featured Projects
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                {project.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-3">{project.description}</p>
              <span className="text-sm text-gray-500 dark:text-gray-400">{project.tech}</span>
              <div className="mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
