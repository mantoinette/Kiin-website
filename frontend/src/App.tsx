import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import StarlinkPage from "./services/StarlinkPage";
import CCTVPage from "./services/CCTVPage";
import NetworkingPage from "./services/NetworkingPage";
import SoftwarePage from "./services/SoftwarePage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import AIChat from "./components/AIChat";
function App() {
  return (
    <Router>
      <div className="bg-[#F2F2F3] min-h-screen flex flex-col">
        
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            {/* <Route path="/projects" element={<Projects />} /> */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/starlink" element={<StarlinkPage />} />
            <Route path="/services/cctv" element={<CCTVPage />} />
            <Route path="/services/networking" element={<NetworkingPage />} />
            <Route path="/services/software" element={<SoftwarePage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
          </Routes>
           <AIChat />
        </main>

        {/* Footer */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;