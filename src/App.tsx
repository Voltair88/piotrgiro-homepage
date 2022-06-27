import About from 'Pages/About';
import Contact from 'Pages/Contact';
import Home from 'Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Layout/Footer';
import Navbar from './Layout/Navbar';
import { GlobalStyled } from 'Styled';
import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="App">
        <GlobalStyled />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
