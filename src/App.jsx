import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import { useTheme } from "./context/ThemeContext";
import Footer from "./components/Footer";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-dark text-white" : "bg-light text-black"}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;