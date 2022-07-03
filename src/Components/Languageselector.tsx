import React from 'react';
import i18n from 'i18next';

export default function Languageselector() {
  const onChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div className="languageselector">
      <button onClick={() => onChange('en')} className="flag">
        <p>Sve</p>
      </button>
      <p>/</p>
      <button onClick={() => onChange('sv')} className="flag">
        <p>Eng</p>
      </button>
    </div>
  );
}
