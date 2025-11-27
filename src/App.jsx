
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import { useTheme } from "./context/ThemeContext";

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen`}>
      <Navbar />

      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}






















// import { Routes, Route } from "react-router-dom";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Projects from "./pages/Projects";
// import Certifications from "./pages/Certifications";
// import { useTheme } from "./context/ThemeContext";
// import Footer from "./components/Footer";

// function App() {
//   const { theme } = useTheme();
//   return (
//     <div className={`min-h-screen ${theme === "dark" ? "bg-dark text-white" : "bg-light text-black"}`}>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/certifications" element={<Certifications />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;