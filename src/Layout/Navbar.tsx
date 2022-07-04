import { useEffect, useState } from 'react';
import { Nav } from '../Styled';
import Links from 'Components/Links';
import Hamburger from 'hamburger-react';
import Logo from 'Components/Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100 && window.innerWidth > 768) setScroll(true);
      else setScroll(false);
    });
  }, []);

  return (
    <Nav className={scroll ? 'scrolled' : 'notScrolled'}>
      <Hamburger
        toggled={isOpen}
        toggle={setIsOpen}
        onToggle={() => {
          if (isOpen) {
            setIsOpen(false);
          } else {
            setIsOpen(true);
          }
        }}
      />
      {isOpen && (
        <div className="hammenu">
          <Links />
        </div>
      )}
      <Logo />
      <div className="navlinks">
        <Links />
      </div>
    </Nav>
  );
}
