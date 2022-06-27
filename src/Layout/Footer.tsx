import { Foot } from '../Styled';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <Foot>
      <p> © 2022 Piotr Giro </p>
      <a href="https://www.instagram.com/piotrgiro/" target="_blank" rel="noreferrer">
        <InstagramIcon />
      </a>
    </Foot>
  );
}
