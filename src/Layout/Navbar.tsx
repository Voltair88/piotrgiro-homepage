import { Nav } from '../Styled';
import { Link } from 'react-router-dom';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
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

export default function Navbar() {
  const { t } = useTranslation();

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Nav>
      <div className="Logo">
        <Link to="/">
          <img src={require('Assets/Logo/smallLogo.webp')} alt="logo" />
        </Link>
      </div>
      <Link to="/">{t('home')}</Link>
      <Link to="/about">{t('about')}</Link>
      <Link to="/contact">{t('contact')}</Link>
      <select name="language" onChange={onChange}>
        <option value="sv">Svenska</option>
        <option value="en">English</option>
      </select>
    </Nav>
  );
}
