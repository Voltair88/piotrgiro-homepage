import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Languageselector from './Languageselector';
import { useLanguage } from './LanguageWrapper';

interface LinksProps {
  onLinkClick?: () => void;
}

export default function Links({ onLinkClick }: LinksProps) {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLanguage();

  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <>
      <NavLink to={getLocalizedPath('biography')} onClick={handleLinkClick}>{t('Biografi')}</NavLink>
      <NavLink to={getLocalizedPath('actor')} onClick={handleLinkClick}>{t('Skådespelaren')}</NavLink>
      <NavLink to={getLocalizedPath('dancer')} onClick={handleLinkClick}>{t('Dansaren')}</NavLink>
      <NavLink to={getLocalizedPath('CV')} onClick={handleLinkClick}>CV</NavLink>
      <NavLink to={getLocalizedPath('contact')} onClick={handleLinkClick}>{t('Kontakt')}</NavLink>
      <Languageselector onLanguageChange={onLinkClick} />
    </>
  );
}
