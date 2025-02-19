"use client";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

import translationEN from './app/languages/en/translation.json';
import translationID from './app/languages/id/translation.json';

const resources = {
    en: { translation: translationEN },
    id: { translation: translationID },
};

i18n
    .use(HttpApi)
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
