import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate email sending logic here (e.g., EmailJS, backend API)
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-28 pb-16 bg-gradient-to-br from-purple-600 to-indigo-500 dark:from-gray-800 dark:to-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Contact Me</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-white/20">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Get in Touch</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-medium">📍 Address</h3>
                <p>Bhubaneswar, India</p>
              </div>
              <div>
                <h3 className="font-medium">📧 Email</h3>
                <a href="mailto:pratapkuldi489@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  pratapkuldi489@gmail.com
                </a>
              </div>
              <div>
                <h3 className="font-medium">📱 Mobile</h3>
                <a href="tel:+919348756496" className="text-blue-600 dark:text-blue-400 hover:underline">
                  +91 9348756496
                </a>
              </div>
              <div>
                <h3 className="font-medium">👨‍💼 LinkedIn</h3>
                <a
                  href="https://linkedin.com/in/pratapchandrakuldi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  linkedin.com/in/pratapchandrakuldi
                </a>
              </div>
              <div>
                <h3 className="font-medium">🐱 GitHub</h3>
                <a
                  href="https://github.com/Pratapchandrakuldi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  github.com/Pratapchandrakuldi
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-white/20">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white resize-none h-32"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
