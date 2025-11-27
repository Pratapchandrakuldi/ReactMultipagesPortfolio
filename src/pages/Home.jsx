export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-4 py-10 transition-colors duration-500">

      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3 text-black dark:text-white">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-gray-800 dark:text-gray-300">
          Explore my skills, projects, achievements & learning journey.
        </p>
      </section>

      {/* Course Information Card */}
      <div className="container mx-auto mb-10">
        <div className="bg-white dark:bg-gray-800 shadow-xl p-8 rounded-2xl border border-gray-200 dark:border-gray-700 transition-colors duration-500">
          
          <h2 className="text-3xl font-bold mb-3 text-center text-black dark:text-blue-300">
            Java Full Stack Developer – Learning Journey
          </h2>

          <p className="text-gray-900 dark:text-gray-300 mb-6 text-center">
            Currently pursuing a <strong>Java Full Stack Development Course</strong> at  
            <span className="font-semibold text-black dark:text-blue-400"> JSpiders, Marathahalli, Bangalore, Karnataka.</span>
          </p>

          <h3 className="text-2xl font-semibold mb-3 text-black dark:text-white">Subjects I Am Learning:</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Core Java",
              "Advanced Java",
              "DSA (Data Structures & Algorithms)",
              "Algorithms",
              "Spring Boot",
              "Hibernate",
              "SQL Plus",
              "HTML",
              "CSS",
              "JavaScript",
              "Bootstrap",
            ].map((subject, index) => (
              <div
                key={index}
                className="p-4 bg-gray-100 dark:bg-green-900/30 rounded-xl shadow hover:scale-105 transition font-medium text-black dark:text-white"
              >
                {subject}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blockchain Section */}
      <div className="container mx-auto">
        <div className="bg-gray-100 dark:bg-gray-800 shadow-xl p-8 rounded-2xl border border-gray-200 dark:border-gray-700 transition-colors duration-500">
          
          <h2 className="text-2xl font-bold mb-4 text-black dark:text-purple-300">
            Blockchain Technology
          </h2>
          <p className="text-gray-900 dark:text-gray-300 mb-4">
            Passionate about secure, decentralized, transparent blockchain systems that empower next-gen applications.
          </p>

          <h3 className="font-semibold mb-2 text-black dark:text-white">Key Concepts:</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Smart Contracts",
              "Cryptocurrency",
              "dApps",
              "Supply Chain Blockchain",
              "Consensus Algorithms",
            ].map((item, i) => (
              <div
                key={i}
                className="p-3 rounded-lg bg-gray-200 dark:bg-purple-900/40 hover:scale-105 transition text-black dark:text-white"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
