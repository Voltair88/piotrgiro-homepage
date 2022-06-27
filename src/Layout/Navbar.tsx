import { Nav } from '../Styled';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </Nav>
  );
}
