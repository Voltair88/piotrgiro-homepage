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
  const isSwedish = location.pathname.startsWith('/sv');

  useEffect(() => {
    let language = 'sv'; // default
    
    if (isEnglish) {
      language = 'en';
    } else if (isSwedish) {
      language = 'sv';
    }
    
    // Only save language preference if user has explicitly navigated to a language route
    // and it's different from the current saved preference (to avoid overwriting detection)
    const currentSavedLanguage = localStorage.getItem('preferred-language');
    if ((isEnglish || isSwedish) && currentSavedLanguage !== language) {
      // Only update if this seems like an intentional language change
      localStorage.setItem('preferred-language', language);
    }
    
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [isEnglish, isSwedish]);

  const getLocalizedPath = (path: string): string => {
    // Remove leading slash for consistency
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    
    if (isEnglish) {
      return `/en/${cleanPath}`;
    }
    return `/sv/${cleanPath}`;
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