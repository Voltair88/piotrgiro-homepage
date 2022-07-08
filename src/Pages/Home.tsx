import { Hom } from 'Styled';
import Swiperplayer from '../Components/Swiperplayer';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { actor, dance, biografi, kommercielt } from '../Assets/Pictures';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <Hom>
      <ParallaxProvider>
        <Swiperplayer />
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
