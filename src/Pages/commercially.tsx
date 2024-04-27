import {
  kommercielt,
  kommercielt2,
  kommercielt3,
  kommercielt4,
  kommercielt6,
  kommercielt7,
} from 'Assets';
import { Trans, useTranslation } from 'react-i18next';
import { Bio } from 'Styled';
import Swiperplayer from '../Components/Swiperplayer';
import { NavLink } from 'react-router-dom';
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
    src: kommercielt6,
    title: 'Dance',
    alt: 'Slide 1',
  },
  {
    src: kommercielt7,
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
        <Trans t={t}>
          <p>
          <NavLink to="/contact">{t('STkontaktaMig')}</NavLink>
          {t('STkontakta1')}<a href={'https://stockholmsgruppen.com/contact-us'}> {t('STkontakta')}</a> {t('STkontakta2')}
          </p>
          </Trans>
      </div>
    </Bio>
  );
}
