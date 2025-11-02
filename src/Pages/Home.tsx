import { Hom } from 'Styled';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { PiotrGiro2, dance, biografi, arkiv6 } from '../Assets';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../Components/LanguageWrapper';

// change picture 3 with 1

// PiotrGiro1 biografi2  PiotrGiro3 PiotrGiro4

/* const Landingpage = [
  {
    src: PiotrGiro1,
    title: 'Piotr Giro',
    alt: 'Slide 1',
  },
  {
    src: biografi2,
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
    alt: 'Slide 2',
  },
]; */

export default function Home() {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLanguage();
  
  return (
    <Hom>
      <ParallaxProvider>
        {/* <Swiperplayer slides={Landingpage} /> */}
        <div className="sections">
          <NavLink to={getLocalizedPath('biography')}>
            <img src={biografi} alt="Biografy" className="skeleton" />
            <Parallax className="par" speed={40} translateY={[-150, 50]}>
              <h1>{t('Biografi')}</h1>
            </Parallax>
          </NavLink>
          <NavLink to={getLocalizedPath('actor')}>
            <img src={PiotrGiro2} alt="Actor" className="skeleton" />
            <Parallax className="par" translateY={[-150, 50]}>
              <h1>{t('Skådespelaren')}</h1>
            </Parallax>
          </NavLink>
          <NavLink to={getLocalizedPath('dancer')}>
            <img src={dance} alt="Dance" className="skeleton" />
            <Parallax className="par" translateY={[-150, 50]}>
              <h1 className="left">{t('Dansaren')}</h1>
            </Parallax>
          </NavLink>
          <NavLink to={getLocalizedPath('archive')}>
            <img src={arkiv6} alt="Archive" className="skeleton" />
            <Parallax className="par" translateY={[-150, 50]}>
              <h1 className="dark-text">{t('Archive')}</h1>
            </Parallax>
          </NavLink>
        </div>
      </ParallaxProvider>
    </Hom>
  );
}
