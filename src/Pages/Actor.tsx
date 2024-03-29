import { useTranslation } from 'react-i18next';
import { Bio } from 'Styled';
import Swiperplayer from '../Components/Swiperplayer';
import { actor, actor2, actor3, actor4, actor5 } from '../Assets';

const slides = [
  {
    src: actor,
    title: 'Actor',
    alt: 'Slide 1',
  },
  {
    src: actor2,
    title: 'Actor2',
    alt: 'Slide 2',
  },
  {
    src: actor4,
    title: 'Actor3',
    alt: 'Slide 3',
  },
  {
    src: actor3,
    title: 'Actor4',
    alt: 'Slide 4',
  },
  {
    src: actor5,
    title: 'Actor5',
    alt: 'Slide 5',
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
