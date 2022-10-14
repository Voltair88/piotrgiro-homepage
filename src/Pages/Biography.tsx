import { useTranslation } from 'react-i18next';
import { Bio } from 'Styled';
import Swiperplayer from '../Components/Swiperplayer';
import { biografi, biografi2, biografi3, biografi4, biografi5, biografi6 } from '../Assets';

const slides = [
  {
    src: biografi,
    title: 'Biografi',
    alt: 'Slide 1',
  },
  {
    src: biografi2,
    title: 'Biografi2',
    alt: 'Slide 2',
  },
  {
    src: biografi3,
    title: 'Biografi2',
    alt: 'Slide 2',
  },
  {
    src: biografi4,
    title: 'Biografi2',
    alt: 'Slide 2',
  },
  {
    src: biografi5,
    title: 'Biografi2',
    alt: 'Slide 2',
  },
  {
    src: biografi6,
    title: 'Biografi2',
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
