import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About';
import Content from './components/Content/Content';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <>
    <Header />
    {/* <About /> */}
    {/* <Content /> */}
    {/* <Features /> */}
    <Routes>
      <Route path="/About" element={<About />} />

      <Route path="/Skills" element={<Content />} />

      <Route path="/Other Skills" element={<Features />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App