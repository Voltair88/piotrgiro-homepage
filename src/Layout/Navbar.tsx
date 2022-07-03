import { Nav } from '../Styled';
import { Link } from 'react-router-dom';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import { translationsEnglish } from 'Translations/TranslationEnglish';
import { translationSvenska } from 'Translations/TranslationSvenska';
import Logo from 'Components/Logo';
import Languageselector from 'Components/Languageselector';
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationsEnglish },
    sv: { translation: translationSvenska },
  },
  lng: 'sv',
  fallbackLng: 'sv',
  interpolation: { escapeValue: false },
});

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <Nav>
      <Logo />
      <Link to="/biography">{t('Biografi')}</Link>
      <Link to="/actor">{t('Skådespelaren')}</Link>
      <Link to="/dancer">{t('Dansaren')}</Link>
      <Link to="/Showreel">{t('Showreel')}</Link>
      <Link to="/contact">{t('Kontakt')}</Link>
      <Languageselector />
    </Nav>
  );
}
