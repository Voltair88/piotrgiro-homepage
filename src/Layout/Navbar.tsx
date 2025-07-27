import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Nav } from '../Styled';
import Links from 'Components/Links';
import Hamburger from 'hamburger-react';
import Logo from 'Components/Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  const [currentSection, setCurrentSection] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  
  // Determine current section of landing page (0: biografi, 1: actor, 2: dance, 3: kommercielt)
  const getCurrentLandingSection = (): number => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    return Math.floor(scrollY / windowHeight);
  };
  
  // Enhanced background detection: considers scroll position on home pages
  const getIsLightBackground = (): boolean => {
    const isHomePage = location.pathname === '/' || location.pathname === '/en';
    
    if (!isHomePage) {
      // Non-home pages have light backgrounds
      return true;
    }
    
    // Home page: check current section
    // Sections: 0=biografi(dark), 1=actor(dark), 2=dance(dark), 3=kommercielt(light)
    const section = currentSection;
    
    // Only the last section (kommercielt) has a light background
    return section === 3;
  };
  
  const isLightBackground = getIsLightBackground();

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 80;
      setScroll(isScrolled);
      
      // Update current section for home pages
      const isHomePage = location.pathname === '/' || location.pathname === '/en';
      if (isHomePage) {
        const section = getCurrentLandingSection();
        setCurrentSection(section);
      }
      
      // Close hamburger menu when scrolling back to top
      if (!isScrolled && !isMobile) {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      const mobile = window.innerWidth <= 1000;
      setIsMobile(mobile);
      
      // Close hamburger menu when resizing to desktop and not scrolled
      if (!mobile && !scroll) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        hamburgerRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    // Initial section detection for home pages
    const isHomePage = location.pathname === '/' || location.pathname === '/en';
    if (isHomePage) {
      const section = getCurrentLandingSection();
      setCurrentSection(section);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMobile, scroll, isOpen, location.pathname]);

  const showHamburger = isMobile || scroll;

  const getNavClasses = () => {
    let classes = scroll ? 'scrolled' : 'notScrolled';
    if (showHamburger) {
      classes += ' nav-transparent';
      // Add background-based theme class when transparent
      const themeClass = isLightBackground ? ' nav-light-bg' : ' nav-dark-bg';
      classes += themeClass;
    }
    return classes;
  };

  return (
    <Nav className={getNavClasses()}>
      {showHamburger && (
        <div ref={hamburgerRef}>
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            color={isLightBackground ? '#333333' : '#ffffff'}
            onToggle={() => {
              if (isOpen) {
                setIsOpen(false);
              } else {
                setIsOpen(true);
              }
            }}
          />
        </div>
      )}
      {showHamburger && isOpen && (
        <div
          ref={menuRef}
          className={`hammenu ${isMobile ? 'hammenu-mobile' : 'hammenu-desktop'}`}
        >
          {isMobile && (
            <button className="close-btn" onClick={closeMenu} aria-label="Close menu">
              ×
            </button>
          )}
          <div className="menu-content">
            <Links onLinkClick={closeMenu} />
          </div>
        </div>
      )}
      <Logo />
      {!showHamburger && (
        <div className="navlinks">
          <Links />
        </div>
      )}
    </Nav>
  );
}
