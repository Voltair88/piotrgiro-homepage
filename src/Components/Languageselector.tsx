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
    
    // If currently on English route, replace /en with /sv
    if (newPath.startsWith('/en')) {
      newPath = newPath.replace('/en', '/sv');
    } else if (newPath === '/') {
      newPath = '/sv';
    } else if (!newPath.startsWith('/sv')) {
      // Handle any other paths by prefixing with /sv
      newPath = `/sv${newPath}`;
    }
    
    navigate(newPath);
    if (onLanguageChange) {
      onLanguageChange();
    }
  };

  const switchToEnglish = () => {
    let newPath = location.pathname;
    
    // If currently on Swedish route, replace /sv with /en
    if (newPath.startsWith('/sv')) {
      newPath = newPath.replace('/sv', '/en');
    } else if (newPath === '/') {
      newPath = '/en';
    } else if (!newPath.startsWith('/en')) {
      // Handle any other paths by prefixing with /en
      newPath = `/en${newPath}`;
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
