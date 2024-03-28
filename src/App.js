import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Designgallery from './Components/Pages/Designgallery';
import Modularkitchen from './Components/Pages/Modularkitchen';
import Livingroom from './Components/Pages/Livingroom';
import Bedroom from './Components/Pages/Bedroom';
import Bathroom from './Components/Pages/Bathroom';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import Footer from './Components/Pages/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/design-gallery" element={<Designgallery />} />
          <Route path="/modular-kitchen" element={<Modularkitchen />} />
          <Route path="/living-room" element={<Livingroom />} />
          <Route path="/bedroom" element={<Bedroom />} />
          <Route path="/bathroom" element={<Bathroom />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer className="footer" />
      </Router>
    </div>
  );
}

export default App;
