import { useTranslation } from 'react-i18next';
import { Page } from 'Styled';
export default function Actor() {
  const { t } = useTranslation();
  return <Page>{t('Dancer')} </Page>;
}
