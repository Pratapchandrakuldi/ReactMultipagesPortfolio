
export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white mt-10 py-6">
      <div className="container mx-auto grid md:grid-cols-3 gap-6">

        <div>
          <h3 className="font-bold text-lg px-2">Pratap Chandra Kuldi</h3>
          <p className="text-sm mt-2 px-3">
            Full Stack Developer passionate about innovation & modern technologies.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/" className="hover:text-yellow-300">Home</a></li>
            <li><a href="/projects" className="hover:text-yellow-300">Projects</a></li>
            <li><a href="/certifications" className="hover:text-yellow-300">Certifications</a></li>
            <li><a href="/contact" className="hover:text-yellow-300">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg">Connect</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>📧 pratapkuldi489@gmail.com</li>
            <li>📱 +91 9348756496</li>
            <li>
              <a href="https://linkedin.com/in/pratapchandrakuldi" target="_blank" className="hover:text-yellow-300">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/Pratapchandrakuldi" target="_blank" className="hover:text-yellow-300">GitHub</a>
            </li>
          </ul>
        </div>

      </div>

      <p className="text-center text-xs mt-6">
        © {new Date().getFullYear()} Pratap Chandra Kuldi — All Rights Reserved.
      </p>
    </footer>
  );
}
























