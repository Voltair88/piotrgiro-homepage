import { kommercielt } from 'Assets';
import { Trans, useTranslation } from 'react-i18next';
import { Bio } from 'Styled';
import Swiperplayer from '../Components/Swiperplayer';
const slides = [
  {
    src: kommercielt,
    title: 'Dance',
    alt: 'Slide 1',
  },
];

export default function commercially() {
  const { t } = useTranslation();
  return (
    <Bio>
      <div className="Swipercontainer">
        <Swiperplayer slides={slides} />
      </div>
      <div className="Text">
        <h1>{t('Commercially')}</h1>
        <Trans components={{ italic: <i></i> }}>{t('kommercielt')}</Trans>
        <Trans t={t}>{t('STkontakta')}</Trans>
        <a href={'https://stockholmsgruppen.com/contact-us'}>Stockholmsgruppen</a>
      </div>
    </Bio>
  );
}
