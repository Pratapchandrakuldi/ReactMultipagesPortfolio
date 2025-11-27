import { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import photo from "../assets/photo_me_2.png";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  // Background colors cycle
  const colors = ["bg-green-600", "bg-white", "bg-blue-600"];
  const [colorIndex, setColorIndex] = useState(0);

  const toggleColor = () => {
    setColorIndex((prev) => (prev + 1) % colors.length);
  };

  return (
    <nav className={`${colors[colorIndex]} fixed top-0 left-0 w-full shadow-lg z-50 transition-colors duration-300`}>
      <div className="container mx-auto flex items-center justify-between p-4">

        {/* Branding */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={photo}
            className="w-12 h-12 rounded-full object-cover border-2 border-black"
          />
          <div>
            <h1 className="font-bold text-lg text-black">Pratap Chandra Kuldi</h1>
            <p className="text-xs text-black hidden sm:block">
              MERN | C | C++ | Java | Python | PHP | MySQL | MongoDB
            </p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 font-medium">
          <Link className="text-black hover:text-yellow-600" to="/">Home</Link>
          <Link className="text-black hover:text-yellow-600" to="/about">About</Link>
          <Link className="text-black hover:text-yellow-600" to="/projects">Projects</Link>
          <Link className="text-black hover:text-yellow-600" to="/certifications">Certifications</Link>
          <Link className="text-black hover:text-yellow-600" to="/contact">Contact</Link>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3">

          {/* Background Color Toggle */}
          <button
            onClick={toggleColor}
            className="p-2 rounded-full bg-black text-white shadow hover:scale-110 transition"
          >
            🎨
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full bg-black text-white shadow hover:scale-110 transition"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 bg-black text-white rounded"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-100 shadow-lg px-6 py-4 space-y-3">
          <Link className="block text-black hover:text-blue-600" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link className="block text-black hover:text-blue-600" to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link className="block text-black hover:text-blue-600" to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link className="block text-black hover:text-blue-600" to="/certifications" onClick={() => setMenuOpen(false)}>Certifications</Link>
          <Link className="block text-black hover:text-blue-600" to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
