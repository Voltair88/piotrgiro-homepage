import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageWrapper';
import styled from 'styled-components';

const FloatingContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
  
  @media (max-width: 1000px) {
    display: none;
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 10px 15px;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    
    p {
      color: #333;
    }
  }
`;

const LogoText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  transition: color 0.3s ease-in-out;
  font-family: 'Source Sans Pro', sans-serif;
  
  @media (min-width: 1200px) {
    font-size: 2.2rem;
  }
`;

export default function FloatingLogo() {
  const { isEnglish } = useLanguage();
  const homeLink = isEnglish ? '/en' : '/sv';

  return (
    <FloatingContainer>
      <LogoLink to={homeLink}>
        <LogoText>Piotr Giro</LogoText>
      </LogoLink>
    </FloatingContainer>
  );
}