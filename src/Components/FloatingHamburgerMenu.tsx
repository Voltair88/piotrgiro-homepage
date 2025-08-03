import { useEffect, useState, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import Links from 'Components/Links';
import Hamburger from 'hamburger-react';
import { useLanguage } from './LanguageWrapper';

const FloatingContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1001;
`;

const HamburgerWrapper = styled.div`
  width: 40px;
  height: 40px;
`;

const MenuContainer = styled.div<{ $isMobile: boolean }>`
  position: fixed;
  background: #333;
  z-index: 998;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  overflow: hidden;
  
  ${props => props.$isMobile ? `
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    animation: slideInMobile 0.3s ease-out;
  ` : `
    top: 15px;
    right: 10px;
    width: 280px;
    max-height: 500px;
    padding: 50px 0 5px 0;
    animation: slideIn 0.3s ease-out;
  `}

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInMobile {
    from {
      opacity: 0;
      transform: translateX(-100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;


const MobileLogoHeader = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 20px 0;
  border-bottom: 1px solid #555;
  margin-bottom: 20px;
  
  h1 {
    margin: 0;
    padding: 0;
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: 2px;
    color: white;
    font-family: 'Source Sans Pro', sans-serif;
    text-align: center;
  }
  
  &:hover h1 {
    color: #bbbbbb;
  }
`;

const MenuContent = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  
  ${props => props.$isMobile ? `
    padding: 20px 20px 40px 20px;
    align-items: center;
    gap: 30px;
  ` : `
    padding: 2px 15px 2px 15px;
    gap: 18px;
  `}
  
  a {
    color: #bbbbbb;
    text-decoration: none;
    display: block;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    font-family: 'Source Sans Pro', sans-serif;
    letter-spacing: 2px;
    
    ${props => props.$isMobile ? `
      font-size: 1.5rem !important;
      padding: 15px 20px !important;
      margin: 5px 0 !important;
      width: 80% !important;
      text-align: center !important;
      border-radius: 0px !important;
    ` : `
      font-size: 2.0rem !important;
      padding: 4px !important;
      margin: 3px !important;
      border-radius: 6px !important;
      text-align: left !important;
    `}
    
    &:hover {
      background: #fff;
      color: #333;
    }
  }

  .languageselector {
    display: flex;
    align-items: center;
    justify-content: center;
    
    ${props => props.$isMobile ? '' : `
      margin: 0 0 10px 0;
    `}
    
    p {
      margin: auto 0;
      padding: 0;
      line-height: 40px;
    }
  }

  .flag {
    color: #fff;
    font-size: 1rem;
    font-family: 'Source Sans Pro', sans-serif;
    letter-spacing: 2px;
    background: transparent;
    width: 40px;
    height: 40px;
    margin: 0 5px;
    padding: 0;
    border: none;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    
    &:hover {
      background: #fff;
      color: #333;
    }

    p {
      margin: 0;
      padding: 0;
    }
  }
`;

export default function FloatingHamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  const [, setCurrentSection] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { isEnglish } = useLanguage();

  // Determine current section of landing page for theme detection
  const getCurrentLandingSection = (): number => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    return Math.floor(scrollY / windowHeight);
  };

  // Enhanced background detection for hamburger icon color
  const getIsLightBackground = (): boolean => {
    const isHomePage = location.pathname === '/sv' || location.pathname === '/en';
    
    if (!isHomePage) {
      return true;
    }
    
    // Only the last section (kommercielt) has a light background - but we removed commercial
    // So now all sections are dark
    return false;
  };

  const isLightBackground = getIsLightBackground();
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update current section for home pages
      const isHomePage = location.pathname === '/sv' || location.pathname === '/en';
      if (isHomePage) {
        const section = getCurrentLandingSection();
        setCurrentSection(section);
      }
      
      // Close hamburger menu when scrolling back to top on desktop
      if (window.scrollY <= 80 && !isMobile) {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      const mobile = window.innerWidth <= 1000;
      setIsMobile(mobile);
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
    const isHomePage = location.pathname === '/sv' || location.pathname === '/en';
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
  }, [isMobile, isOpen, location.pathname]);

  return (
    <>
      <FloatingContainer ref={hamburgerRef}>
        <HamburgerWrapper>
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            color={isOpen ? '#ffffff' : (isLightBackground ? '#333333' : '#ffffff')}
            onToggle={() => {
              if (isOpen) {
                setIsOpen(false);
              } else {
                setIsOpen(true);
              }
            }}
          />
        </HamburgerWrapper>
      </FloatingContainer>
      
      {isOpen && (
        <MenuContainer ref={menuRef} $isMobile={isMobile}>
          <MenuContent $isMobile={isMobile}>
            {isMobile && (
              <MobileLogoHeader to={isEnglish ? '/en' : '/sv'} onClick={closeMenu}>
                <h1>Piotr Giro</h1>
              </MobileLogoHeader>
            )}
            <Links onLinkClick={closeMenu} />
          </MenuContent>
        </MenuContainer>
      )}
    </>
  );
}