import { useTranslation } from 'react-i18next';
import { Bio } from 'Styled';
import { bioheader } from 'Assets';

export default function Biography() {
  const { t } = useTranslation();
  return (
    <Bio>
      <div
        style={{
          backgroundImage: 'url(' + bioheader + ')',
        }}
        className="img skeleton"
      />
      <h1>{t('Biografi')}</h1>
      <p>{t('biography')}</p>
    </Bio>
  );
}
