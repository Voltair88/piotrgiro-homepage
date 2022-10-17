import { Show } from 'Styled';
import Player from 'Components/player';
export default function Showreel() {
  return (
    <Show>
      <Player src="https://www.youtube.com/embed/O5KAKB6f-DU" caption="Showreel / 2001 - 2006" />
      <Player src="https://www.youtube.com/embed/05XFB2ZOESg" caption="Robloncho / 2019" />
      <Player src="https://www.youtube.com/embed/GpplYQPzSxc" caption="Dansa först / 2018 " />
      <Player src="https://www.youtube.com/embed/Y7-NQL7eQXA" caption="Ikea / 2015" />
      <Player src="https://www.youtube.com/embed/GSzP953UJlM" caption="Ikea / 2021" />
      <Player src="https://www.youtube.com/embed/Cdmumgrb92Y" caption="Magnus Uggla (VR) / 2016" />
      <Player src="https://www.youtube.com/embed/rLLD3WmikJs" caption="Weeping Willows / 2016" />
      <Player src="https://www.youtube.com/embed/dK-J5b1MdgY" caption="Takida / 2014" />
      <Player src="https://www.youtube.com/embed/MSlncHYgIeo" caption="Roxette / 2002" />
      <Player src="https://www.youtube.com/embed/RzCpF4VSQBo" caption="Flickan, Mamman och demonerna / 2016" />
      <Player src="https://www.youtube.com/embed/MRkMOrh2LBI" caption="Keillers Park / 2006" />
      <Player src="https://www.youtube.com/embed/lBwA_yJwxho" caption="Wellkåmm to Verona / 2006" />
      <Player src="https://www.youtube.com/embed/4IBbn61yC-c" caption="Kyrkogårdsön / 2004" />
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
