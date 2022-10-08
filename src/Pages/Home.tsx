import { Hom } from 'Styled';
import Swiperplayer from '../Components/Swiperplayer';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import {
  actor,
  dance,
  biografi,
  kommercielt,
  PiotrGiro1,
  PiotrGiro2,
  PiotrGiro3,
  PiotrGiro4,
  PiotrGiro5,
} from '../Assets';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Landingpage = [
  {
    src: PiotrGiro1,
    title: 'Piotr Giro',
    alt: 'Slide 1',
  },
  {
    src: PiotrGiro2,
    title: 'Piotr Giro',
    alt: 'Slide 2',
  },
  {
    src: PiotrGiro3,
    title: 'Piotr Giro',
    alt: 'Slide 3',
  },
  {
    src: PiotrGiro4,
    title: 'Piotr Giro',
    alt: 'Slide 4',
  },
  {
    src: PiotrGiro5,
    title: 'Piotr Giro',
    alt: 'Slide 5',
  },
];

export default function Home() {
  const { t } = useTranslation();
  return (
    <Hom>
      <ParallaxProvider>
        <Swiperplayer slides={Landingpage} />
        <div className="sections">
          <NavLink to="/biography">
            <img src={biografi} alt="Biografy" className="skeleton" />
            <Parallax className="par" speed={40} translateY={[-150, 50]}>
              <h1>{t('Biografi')}</h1>
            </Parallax>
          </NavLink>
          <NavLink to="/Actor">
            <img src={actor} alt="Actor" className="skeleton" />
            <Parallax className="par" translateY={[-150, 50]}>
              <h1>{t('Skådespelaren')}</h1>
            </Parallax>
          </NavLink>
          <NavLink to="/dancer">
            <img src={dance} alt="Dance" className="skeleton" />
            <Parallax className="par" translateY={[-150, 50]}>
              <h1>{t('Dansaren')}</h1>
            </Parallax>
          </NavLink>
          <NavLink to="/commercially">
            <img src={kommercielt} alt="commercially" className="skeleton" />
            <Parallax className="par" translateY={[-150, 50]}>
              <h1>{t('Commercially')}</h1>
            </Parallax>
          </NavLink>
        </div>
      </ParallaxProvider>
    </Hom>
  );
}
