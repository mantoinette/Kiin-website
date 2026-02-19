import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";       // import AboutPage
import ContactPage from "./pages/ContactPage";   // import ContactPage
//import Projects from "./pages/Projects";         // import Projects page
import ServicesPage from "./pages/ServicesPage"; // import Services page (if exists)

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />         {/* About route */}
        <Route path="/contact" element={<ContactPage />} />     {/* Contact route */}
      {/* Projects route */}
        <Route path="/services" element={<ServicesPage />} />   {/* Services route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;