import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div className="Logo">
      <Link to="/">
        <p>Piotr Giro</p>
      </Link>
    </div>
  );
}
