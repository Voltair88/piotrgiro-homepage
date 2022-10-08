import { Show } from 'Styled';
import Player from 'Components/player';
export default function Showreel() {
  return (
    <Show>
      <Player src="https://www.youtube.com/embed/GSzP953UJlM" />
      <Player src="https://www.youtube.com/embed/05XFB2ZOESg" />
      <Player src="https://www.youtube.com/embed/GpplYQPzSxc" />
      <Player src="https://www.youtube.com/embed/RzCpF4VSQBo" />
      <Player src="https://www.youtube.com/embed/rLLD3WmikJs" />
      <Player src="https://www.youtube.com/embed/dK-J5b1MdgY" />
      <Player src="https://www.youtube.com/embed/O5KAKB6f-DU" />
      <Player src="https://www.youtube.com/embed/MRkMOrh2LBI" />
      <Player src="https://www.youtube.com/embed/lBwA_yJwxho" />
      <Player src="https://www.youtube.com/embed/4IBbn61yC-c" />
      <Player src="https://www.youtube.com/embed/7ABe1fQhzFw" />
      <Player src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1508522236&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></Player>
      <div>
        <a
          href="https://soundcloud.com/mattias-gulec"
          title="Mattias Gulec"
          target="_blank"
          style={{ color: 'white', textDecoration: 'none' }}
          rel="noreferrer"
        >
          Mattias Gulec
        </a>
        <a
          href="https://soundcloud.com/mattias-gulec/sets/piotr-giro-laser-upp-sjalvportratt-av-okanda-man"
          title='Piotr Giro läser upp "Självporträtt av okända män"'
          target="_blank"
          style={{ color: 'white', textDecoration: 'none' }}
          rel="noreferrer"
        >
          Piotr Giro läser upp &quot;Självporträtt av okända män&quot;
        </a>
      </div>
    </Show>
  );
}
