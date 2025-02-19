"use client";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './public/languages/en/translation.json';
import translationID from './public/languages/id/translation.json';

const resources = {
    en: { translation: translationEN },
    id: { translation: translationID },
};

i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        resources,
    });


export default i18n;
