import React from "react";

export default function About() {
  return (
    <div className="relative pt-28 pb-16 bg-gradient-to-br from-blue-500 to-indigo-700 dark:from-gray-800 dark:to-gray-900">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>

      <div className="relative container mx-auto px-4">
        {/* Heading */}
        <div className="text-center text-white mb-12">
          <h1 className="text-4xl font-bold mb-3">About Me</h1>
          <p className="text-lg text-gray-200">
            Dedicated Full-Stack Java & MERN Developer, <span className="text-1xl font-semibold mb-4 text-green-100 dark:text-blue-100">MCA Degree</span>, with hands-on experience in Cloud, Web3, and modern web technologies.
          </p>
        </div>

        {/* Summary Section */}
        <div className="mb-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl backdrop-blur-md border border-white/20">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
            Professional Summary
          </h2>
          <p className="text-gray-700 dark:text-gray-300 space-y-2">
            I have completed multiple internships and projects, including AWS cloud deployments, Web3 smart-contract integration, and full-stack development, delivering scalable, efficient, and user-friendly applications.
          </p>
        </div>

        {/* Key Skills & Experience */}
        <div className="mb-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg backdrop-blur-md border border-white/20">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">Full-Stack Development</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>Java, JavaScript, PHP, React.js, Node.js, Express.js</li>
              <li>MongoDB, MySQL — full-lifecycle development</li>
              <li>Responsive web applications with clean, modular code</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg backdrop-blur-md border border-white/20">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">Cloud & Blockchain</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>AWS Services: EC2, S3, RDS, VPC, Load Balancer</li>
              <li>Blockchain/Web3: Smart-contracts, dApps, decentralized solutions</li>
              <li>Projects: Real-estate deployment, attendance systems, chatbots</li>
            </ul>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg backdrop-blur-md border border-white/20">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Bachelor of Computer Applications (BCA)</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Completed with strong fundamentals in computer science.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg backdrop-blur-md border border-white/20">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Master of Computer Applications (MCA)</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Completed from Centurion University of Technology and Management, Bhubaneswar, enhancing technical expertise and practical skills.
            </p>
          </div>
        </div>

        {/* Career Goals Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl backdrop-blur-md border border-white/20">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
            Career Goals
          </h2>
          <p className="text-gray-700 dark:text-gray-300 space-y-2">
            <strong>Short-term:</strong> Secure a role to apply and enhance my skills. <br />
            <strong>Long-term:</strong> Join a reputed organization to leverage my expertise and gain growth opportunities in full-stack and blockchain technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

