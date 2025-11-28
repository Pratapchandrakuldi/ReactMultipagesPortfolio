import React from "react";
import resumePDF from "../assets/resume.pdf"; // <-- Add your resume in /src/assets/

export default function Resume() {
  return (
    <div className="pt-28 pb-16 min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 dark:from-gray-800 dark:to-gray-900">
      
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-white mb-10">
          My Resume
        </h1>

        {/* Resume Container */}
        <div className="max-w-4xl mx-auto bg-white/20 dark:bg-gray-800/40 backdrop-blur-xl 
                        border border-white/30 rounded-2xl shadow-2xl p-8">

          {/* Buttons */}
          <div className="flex justify-center gap-6 mb-6">
            
            {/* View Resume Online */}
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold 
                         rounded-lg shadow-lg transition duration-200"
            >
              View Resume
            </a>

            {/* Download Resume Button */}
            <a
              href={resumePDF}
              download="Pratap_Chandra_Kuldi_Resume.pdf"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold 
                         rounded-lg shadow-lg transition duration-200"
            >
              Download PDF
            </a>
          </div>

          {/* Resume Display (Embed PDF inside container) */}
          <div className="w-full h-[700px] bg-white dark:bg-gray-900 rounded-xl overflow-hidden 
                          border border-white/20 shadow-lg">

            <iframe
              src={resumePDF}
              title="Resume Preview"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
