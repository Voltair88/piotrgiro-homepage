import { useTranslation } from 'react-i18next';
import { Bio } from 'Styled';
import Swiperplayer from '../Components/Swiperplayer';
import { biografi, arkiv2, biografi3,
  biografi5, arkiv5 } from '../Assets';

const slides = [
  {
    src: biografi,
    title: 'Biografi',
    alt: 'Slide 1',
  },
  {
    src: arkiv2,
    title: 'Biografi2',
    alt: 'Slide 2',
  },
  {
    src: biografi3,
    title: 'Biografi3',
    alt: 'Slide 3',
  },
/*   {
    src: biografi4,
    title: 'Biografi4',
    alt: 'Slide 4',
  }, */
  {
    src: biografi5,
    title: 'Biografi5',
    alt: 'Slide 5',
  },
  {
    src: arkiv5,
    title: 'Biografi6',
    alt: 'Slide 6',
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
