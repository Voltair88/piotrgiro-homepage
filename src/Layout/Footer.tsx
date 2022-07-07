import { Foot } from '../Styled';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <Foot>
      <p>
        <a href="https://www.mattiasgulec.com">Website by Mattias Gulec</a>
      </p>

      <a href="https://www.instagram.com/piotrgiro/" target="_blank" rel="noreferrer" className="insta">
        <InstagramIcon />
      </a>
    </Foot>
  );
}
