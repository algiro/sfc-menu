import React, { createContext, useState, useContext, useEffect } from 'react';
const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('es');
    useEffect(() => {
        // Add click handlers to language buttons
        const esButton = document.getElementById('lang-es');
        const enButton = document.getElementById('lang-en');


        const handleLanguageChange = (lang) => {
            setLanguage(lang);
            // Update button styles
            esButton.classList.toggle('active', lang === 'es');
            enButton.classList.toggle('active', lang === 'en');
        };


        esButton.addEventListener('click', () => handleLanguageChange('es'));
        enButton.addEventListener('click', () => handleLanguageChange('en'));


        // Cleanup
        return () => {
            esButton.removeEventListener('click', () => handleLanguageChange('es'));
            enButton.removeEventListener('click', () => handleLanguageChange('en'));
        };
    }, []);


    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );


};
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
