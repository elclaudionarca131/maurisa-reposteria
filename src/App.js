import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Hero/>
      <Footer/>
    </Router>
  );
}

export default App;
