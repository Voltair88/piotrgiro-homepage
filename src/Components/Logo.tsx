import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div className="Logo">
      <Link to="/">
        <img src={require('Assets/Logo/smallLogo.webp')} width="65px" height="65px" alt="logo" className="Logo-img" />
      </Link>
    </div>
  );
}
