import { useTranslation } from 'react-i18next';
import { Bio } from 'Styled';
import Swiperplayer from '../Components/Swiperplayer';
import { biografi, dance } from '../Assets';

const slides = [
  {
    src: biografi,
    title: 'Biografi',
    alt: 'Slide 1',
  },
  {
    src: dance,
    title: 'Dance',
    alt: 'Slide 2',
  },
];
export default function Biography() {
  const { t } = useTranslation();
  return (
    <Bio>
      <div className="Swipercontainer">
        <Swiperplayer slides={slides} />
      </div>
      <div className="Text">
        <h1>{t('Biografi')}</h1>
        <p>{t('biography')}</p>
      </div>
    </Bio>
  );
}
