import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const LanguageDetector: React.FC = () => {
  const [redirectTo, setRedirectTo] = useState<string | null>(null);
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    // Prevent multiple runs
    if (hasRun) return;
    
    // Add a small delay to ensure this only runs once
    const timeoutId = setTimeout(() => {
      setHasRun(true);
      
      // Check if user has a saved language preference
      const savedLanguage = localStorage.getItem('preferred-language');
      
      if (savedLanguage && (savedLanguage === 'sv' || savedLanguage === 'en')) {
        // User has visited before, redirect to their preferred language
        setRedirectTo(`/${savedLanguage}`);
        return;
      }

      // First-time visitor: detect browser language
      const browserLanguage = navigator.language || navigator.languages?.[0] || 'en';
      const languageCode = browserLanguage.toLowerCase();
      
      // Check if Swedish is preferred
      const isSwedish = languageCode.startsWith('sv') || 
                       languageCode.startsWith('se') ||
                       languageCode.includes('sweden');
      
      const detectedLanguage = isSwedish ? 'sv' : 'en';
      
      // Save the detected language for future visits
      localStorage.setItem('preferred-language', detectedLanguage);
      
      // Set redirect path
      setRedirectTo(`/${detectedLanguage}`);
    }, 10);

    return () => clearTimeout(timeoutId);
  }, [hasRun]);

  // Redirect using React Router Navigate
  if (redirectTo) {
    return <Navigate to={redirectTo} replace />;
  }

  // Show minimal loading (should be very brief)
  return null;
};

export default LanguageDetector;