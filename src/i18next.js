import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';
import intervalPlural from 'i18next-intervalplural-postprocessor';

import en from './locales/en/translation.json';
import ru from './locales/ru/translation.json';
import es from './locales/es/translation.json';

const languages = ['en', 'ru', 'es'];

const resources = {
    en: { translation: en },
    ru: { translation: ru },
    es: { translation: es },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .use(intervalPlural)
    .init({
        fallbackLng: 'en',
        resources,
        // lng: 'en',
        debug: false,
        whitelist: languages,
        interpolation: {
            escapeValue: false,
        },
        react: {
            wait: true,
        },
    });

export default i18n;
