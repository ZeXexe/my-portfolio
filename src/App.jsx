import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import philiImage from './assets/phili2.jpg';
import './index.css'; // Imported first
import './App.css'; // Imported last
import DialogflowChatbot from './components/DialogFlowChatbot'; // Import the Dialogflow chatbot

// Import the page components
import AboutMe from './pages/AboutMe.jsx';
import Projects from './pages/Projects.jsx';
import MyResume from './pages/MyResume.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream text-purple-900 flex flex-col items-center justify-center">
        {/* Header Section */}
        <header className="mt-5 text-center">
          <h1 className="text-4xl font-bold mb-5">Welcome to my Portfolio</h1>
        </header>

        {/* Image and Name Section */}
        <section className="text-center mb-10 name-section">
          <img 
            src={philiImage} 
            alt="Your Name" 
            style={{ width: '250px', height: '300px' }} 
            className="rounded-full mb-4"
          />
          <h2 className="text-3xl font-semibold" style={{ color: '#008080' }}>Ryan Alcada</h2>
        </section>

        {/* Navigation Tabs */}
        <nav className="flex mb-10">
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/resume" className="nav-link">Resume</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        {/* Main Content Container */}
        <div className="app-container bg-white text-black p-5 min-h-screen w-full flex flex-col items-center justify-center">
          {/* Routes */}
          <Routes>
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<MyResume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Chatbot Section */}
        <div className="chatbot-container mt-10"> {/* Added mt-10 class for margin top */}
          <DialogflowChatbot /> {/* Add the Dialogflow chatbot here */}
        </div>
      </div>
    </Router>
  );
}

export default App;
