import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIChatWidget from './components/AIChatWidget';
import Home from './pages/Home';
import Submission from './pages/Submission';
import Registration from './pages/Registration';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/submission" element={<Submission />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </main>
        <Footer />
        <AIChatWidget />
      </div>
    </HashRouter>
  );
};

export default App;