import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div className="Logo">
      <Link to="/">
        <img src={require('Assets/Logo/smallLogo.webp')} alt="logo" className="Logo-img" />
      </Link>
    </div>
  );
}
