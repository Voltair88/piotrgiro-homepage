import { Hom } from 'Styled';
import Swiperplayer from '../Components/Swiperplayer';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { actor, dance, biografi, kommercielt } from '../Assets/Pictures';
import { NavLink } from 'react-router-dom';
export default function Home() {
  return (
    <Hom>
      <ParallaxProvider>
        <Swiperplayer />
        <div className="sections">
          <NavLink to="/biography">
            <img src={biografi} alt="Biografy" />
            <Parallax speed={40} translateY={[50, -150]}>
              <h1>Biografy</h1>
            </Parallax>
          </NavLink>
          <NavLink to="/Actor">
            <img src={actor} alt="Actor" />
            <Parallax translateY={[0, -150]}>
              <h1>Actor</h1>
            </Parallax>
          </NavLink>
          <NavLink to="/dancer">
            <img src={dance} alt="Dance" />
            <Parallax translateY={[50, -50]}>
              <h1>Dancer</h1>
            </Parallax>
          </NavLink>
          <NavLink to="/commercially">
            <img src={kommercielt} alt="commercially" />
            <Parallax translateY={[-50, -150]}>
              <h1>Kommercielt</h1>
            </Parallax>
          </NavLink>
        </div>
      </ParallaxProvider>
    </Hom>
  );
}
