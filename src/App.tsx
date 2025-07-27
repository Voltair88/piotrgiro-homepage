import { Biography, Contact, Home, Actor, Dancer, Commercially, CV, Archive } from './Pages/';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Footer from './Layout/Footer';
import Navbar from './Layout/Navbar';
import LanguageWrapper from './Components/LanguageWrapper';
import { GlobalStyled } from 'Styled';
import { Suspense } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translationsEnglish } from 'Translations/TranslationEnglish';
import { translationSvenska } from 'Translations/TranslationSvenska';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationsEnglish },
    sv: { translation: translationSvenska },
  },
  lng: 'sv',
  fallbackLng: 'sv',
  interpolation: { escapeValue: false },
});

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="App">
        <GlobalStyled />
        <BrowserRouter>
          <LanguageWrapper>
            <Navbar />
            <Routes>
              {/* Swedish routes */}
              <Route path="/" element={<Home />} />
              <Route path="/biography" element={<Biography />} />
              <Route path="/actor" element={<Actor />} />
              <Route path="/dancer" element={<Dancer />} />
              <Route path="/commercially" element={<Commercially />} />
              <Route path="/CV" element={<CV />} />
              <Route path="/archive" element={<Archive />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* English routes */}
              <Route path="/en" element={<Home />} />
              <Route path="/en/biography" element={<Biography />} />
              <Route path="/en/actor" element={<Actor />} />
              <Route path="/en/dancer" element={<Dancer />} />
              <Route path="/en/commercially" element={<Commercially />} />
              <Route path="/en/cv" element={<CV />} />
              <Route path="/en/archive" element={<Archive />} />
              <Route path="/en/contact" element={<Contact />} />
              
              {/* Fallback routes */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
          </LanguageWrapper>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
