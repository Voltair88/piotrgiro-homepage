import { useTranslation } from 'react-i18next';
import { Bio } from 'Styled';
import { actorheader } from 'Assets/Pictures';

export default function Actor() {
  const { t } = useTranslation();
  return (
    <Bio>
      <div
        style={{
          backgroundImage: 'url(' + actorheader + ')',
        }}
        className="img skeleton"
      />
      <h1>{t('Skådespelaren')}</h1>
      <p>{t('Actor')}</p>
    </Bio>
  );
}
