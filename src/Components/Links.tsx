import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Languageselector from './Languageselector';

export default function Links() {
  const { t } = useTranslation();

  return (
    <>
      <NavLink to="/biography">{t('Biografi')}</NavLink>
      <NavLink to="/actor">{t('Skådespelaren')}</NavLink>
      <NavLink to="/dancer">{t('Dansaren')}</NavLink>
      <NavLink to="/Showreel">{t('Showreel')}</NavLink>
      <NavLink to="/commercially">{t('Commercially')}</NavLink>
      <NavLink to="/contact">{t('Kontakt')}</NavLink>
      <Languageselector />
    </>
  );
}
