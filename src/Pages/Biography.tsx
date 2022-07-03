import { useTranslation } from 'react-i18next';
import { Page } from 'Styled';

export default function Biography() {
  const { t } = useTranslation();
  return <Page>{t('biography')} </Page>;
}
