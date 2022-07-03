import { Biography, Contact, Home, Actor, Dancer, Showreel } from './Pages/';
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
            <Route path="/biography" element={<Biography />} />
            <Route path="/actor" element={<Actor />} />
            <Route path="/dancer" element={<Dancer />} />
            <Route path="/showreel" element={<Showreel />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
