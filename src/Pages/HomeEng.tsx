import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import i18n from 'i18next';

export default function HomeEng() {

    const onChange = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    useEffect(() => {
        onChange('en');
    }, []);

    return (
        <Navigate to="/" />
    );
}
