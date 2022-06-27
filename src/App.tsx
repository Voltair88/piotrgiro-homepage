import About from 'Pages/About';
import Contact from 'Pages/Contact';
import Home from 'Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Layout/Footer';
import Navbar from './Layout/Navbar';
import { GlobalStyled } from 'Styled';

function App() {
  return (
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
  );
}

export default App;
