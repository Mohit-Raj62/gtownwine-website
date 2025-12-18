import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Wines from './pages/Wines';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import OnlineOrder from './pages/OnlineOrder';

// Placeholders for pages not yet implemented to avoid errors
const Placeholder = ({ title }) => (
  <div className="container section-padding text-center">
    <h2>{title}</h2>
    <p>Coming Soon</p>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/wines" element={<Wines />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/online-order" element={<OnlineOrder />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
