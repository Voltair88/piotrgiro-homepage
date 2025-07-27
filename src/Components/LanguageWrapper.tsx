import React, { useEffect, createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import i18n from 'i18next';

interface LanguageContextType {
  isEnglish: boolean;
  getLocalizedPath: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  isEnglish: false,
  getLocalizedPath: (path: string) => path,
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageWrapperProps {
  children: React.ReactNode;
}

export default function LanguageWrapper({ children }: LanguageWrapperProps) {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');

  useEffect(() => {
    const language = isEnglish ? 'en' : 'sv';
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [isEnglish]);

  const getLocalizedPath = (path: string): string => {
    // Remove leading slash for consistency
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    
    if (isEnglish) {
      return `/en/${cleanPath}`;
    }
    return `/${cleanPath}`;
  };

  const contextValue: LanguageContextType = {
    isEnglish,
    getLocalizedPath,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}