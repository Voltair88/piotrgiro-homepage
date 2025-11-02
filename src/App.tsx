import { Biography, Contact, Home, Actor, Dancer, CV, Archive } from './Pages/';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Footer from './Layout/Footer';
import LanguageWrapper from './Components/LanguageWrapper';
import LanguageDetector from './Components/LanguageDetector';
import FloatingHamburgerMenu from './Components/FloatingHamburgerMenu';
import FloatingLogo from './Components/FloatingLogo';
import ScrollToTop from './Components/ScrollToTop';
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
          <ScrollToTop />
          <LanguageWrapper>
            <FloatingHamburgerMenu />
            <FloatingLogo />
            <Routes>
              {/* Language detection route */}
              <Route path="/" element={<LanguageDetector />} />
              
              {/* Swedish routes */}
              <Route path="/sv" element={<Home />} />
              <Route path="/sv/biography" element={<Biography />} />
              <Route path="/sv/actor" element={<Actor />} />
              <Route path="/sv/dancer" element={<Dancer />} />
              <Route path="/sv/CV" element={<CV />} />
              <Route path="/sv/archive" element={<Archive />} />
              <Route path="/sv/contact" element={<Contact />} />
              
              {/* English routes */}
              <Route path="/en" element={<Home />} />
              <Route path="/en/biography" element={<Biography />} />
              <Route path="/en/actor" element={<Actor />} />
              <Route path="/en/dancer" element={<Dancer />} />
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
