import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageWrapper';

export default function Logo() {
  const { isEnglish } = useLanguage();
  const homeLink = isEnglish ? '/en' : '/';

  return (
    <div className="Logo">
      <Link to={homeLink}>
        <p>Piotr Giro</p>
      </Link>
    </div>
  );
}
