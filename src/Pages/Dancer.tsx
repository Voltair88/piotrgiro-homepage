import { dance } from 'Assets';
import { Trans, useTranslation } from 'react-i18next';
import { Bio } from 'Styled';
import Swiperplayer from '../Components/Swiperplayer';

const slides = [
  {
    src: dance,
    title: 'Dance',
    alt: 'Slide 1',
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
