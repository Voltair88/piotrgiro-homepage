import { dance, dance2, dance3, dance4, dance5, dance6, dance7, dance8, dance9, dance10 } from 'Assets';
import { Trans, useTranslation } from 'react-i18next';
import { Bio } from 'Styled';
import Swiperplayer from '../Components/Swiperplayer';

const slides = [
  {
    src: dance,
    title: 'Dance',
    alt: 'Slide 1',
  },
  {
    src: dance2,
    title: 'Dance2',
    alt: 'Slide 2',
  },
  {
    src: dance3,
    title: 'Dance2',
    alt: 'Slide 2',
  },
  {
    src: dance4,
    title: 'Dance2',
    alt: 'Slide 2',
  },
  {
    src: dance5,
    title: 'Dance2',
    alt: 'Slide 2',
  },
  {
    src: dance6,
    title: 'Dance2',
    alt: 'Slide 2',
  },
  {
    src: dance7,
    title: 'Dance2',
    alt: 'Slide 2',
  },
  {
    src: dance10,
    title: 'Dance2',
    alt: 'Slide 2',
  },
  {
    src: dance9,
    title: 'Dance2',
    alt: 'Slide 2',
  },
  {
    src: dance8,
    title: 'Dance2',
    alt: 'Slide 2',
  },
];
export default function Actor() {
  const { t } = useTranslation();
  return (
    <Bio>
      <div className="Swipercontainer">
        <Swiperplayer slides={slides} />
      </div>
      <div className="Text">
        <h1>{t('Dansaren')}</h1>
        <p>{t('Dancer')}</p>
        <ul>
          <li>{t('Dancer1')}</li>
          <li>{t('Dancer2')}</li>
          <li>{t('Dancer3')}</li>
        </ul>
        <Trans components={{ italic: <i></i> }} t={t}>
          {t('Dancerpt2')}
        </Trans>
      </div>
    </Bio>
  );
}
