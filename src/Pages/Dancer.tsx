import { useTranslation } from 'react-i18next';
import { Bio } from 'Styled';
export default function Actor() {
  const { t } = useTranslation();
  return (
    <Bio>
      <p>{t('Dancer')}</p>{' '}
    </Bio>
  );
}
