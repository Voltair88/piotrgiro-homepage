import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface LanguageselectorProps {
  onLanguageChange?: () => void;
}

export default function Languageselector({ onLanguageChange }: LanguageselectorProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const switchToSwedish = () => {
    let newPath = location.pathname;
    
    // If currently on English route, remove /en prefix
    if (newPath.startsWith('/en')) {
      newPath = newPath.replace('/en', '') || '/';
    }
    
    navigate(newPath);
    if (onLanguageChange) {
      onLanguageChange();
    }
  };

  const switchToEnglish = () => {
    let newPath = location.pathname;
    
    // If currently on Swedish route, add /en prefix
    if (!newPath.startsWith('/en')) {
      newPath = newPath === '/' ? '/en' : `/en${newPath}`;
    }
    
    navigate(newPath);
    if (onLanguageChange) {
      onLanguageChange();
    }
  };

  return (
    <div className="languageselector">
      <button onClick={switchToSwedish} className="flag">
        <p>Sve</p>
      </button>
      <p>/</p>
      <button onClick={switchToEnglish} className="flag">
        <p>Eng</p>
      </button>
    </div>
  );
}
