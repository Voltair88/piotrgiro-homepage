import { useTranslation } from 'react-i18next';
import { Bio } from 'Styled';
import Swiperplayer from '../Components/Swiperplayer';
import { actor } from '../Assets';

const slides = [
  {
    src: actor,
    title: 'Actor',
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
        <h1>{t('Skådespelaren')}</h1>
        <p>{t('Actor')}</p>
      </div>
    </Bio>
  );
}
