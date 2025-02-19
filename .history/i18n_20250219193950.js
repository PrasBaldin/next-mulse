// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationID from './locales/id/translation.json';

const resources = {
    en: { translation: translationEN },
    id: { translation: translationID },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // Bahasa default
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // React sudah melakukan escaping
        },
    });

export default i18n;
