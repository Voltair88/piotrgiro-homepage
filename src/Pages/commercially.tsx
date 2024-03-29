import {
  kommercielt,
  kommercielt2,
  kommercielt3,
  kommercielt4,
  kommercielt5,
  kommercielt6,
  kommercielt7,
  kommercielt8,
} from 'Assets';
import { Trans, useTranslation } from 'react-i18next';
import { Bio } from 'Styled';
import Swiperplayer from '../Components/Swiperplayer';
const slides = [
  {
    src: kommercielt,
    title: 'Dance',
    alt: 'Slide 1',
  },
  {
    src: kommercielt2,
    title: 'Dance',
    alt: 'Slide 1',
  },
  {
    src: kommercielt3,
    title: 'Dance',
    alt: 'Slide 1',
  },
  {
    src: kommercielt4,
    title: 'Dance',
    alt: 'Slide 1',
  },
  {
    src: kommercielt5,
    title: 'Dance',
    alt: 'Slide 1',
  },
  {
    src: kommercielt6,
    title: 'Dance',
    alt: 'Slide 1',
  },
  {
    src: kommercielt7,
    title: 'Dance',
    alt: 'Slide 1',
  },
  {
    src: kommercielt8,
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
