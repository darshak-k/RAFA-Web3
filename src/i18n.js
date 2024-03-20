import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './assets/locales/en/translation.json';
import hiTranslation from './assets/locales/hi/translation.json';
import esTranslation from './assets/locales/es/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      hi: { translation: hiTranslation },
      es: { translation: esTranslation }
    },
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;