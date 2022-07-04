import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Languageselector from './Languageselector';

export default function Links() {
  const { t } = useTranslation();

  return (
    <>
      <Link to="/biography">{t('Biografi')}</Link>
      <Link to="/actor">{t('Skådespelaren')}</Link>
      <Link to="/dancer">{t('Dansaren')}</Link>
      <Link to="/Showreel">{t('Showreel')}</Link>
      <Link to="/contact">{t('Kontakt')}</Link>
      <Languageselector />
    </>
  );
}
