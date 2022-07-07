import { useTranslation } from 'react-i18next';
import { Bio } from 'Styled';
import { biografi2 } from 'Assets/Pictures';

export default function Biography() {
  const { t } = useTranslation();
  return (
    <Bio>
      <div className="div1">
        <h1>{t('Biografi')}</h1>
      </div>
      <div className="div2">
        <img src={biografi2} alt="Biografi" className="skeleton" />
      </div>
      <div className="div3">
        <p>{t('biography')}</p>
      </div>
    </Bio>
  );
}
