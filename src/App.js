import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './RactMenu/Navbar';
import Home from './RactMenu/Home';
import About from './RactMenu/About';
import Services from './RactMenu/Services';
import Contact from './RactMenu/Contact';
import Footer from './RactMenu/Footer';
import Error from './RactMenu/Error';

function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
