import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import cz from '../cz.json';
import en from '../en.json';
import es from '../es.json';

export const defaultNS = 'translation'
export const fallbackNS = 'translation'


void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    defaultNS,
    fallbackNS,
    interpolation: {
      escapeValue: false,
    },
    returnNull: false,
    nonExplicitSupportedLngs: true,
    fallbackLng: {
      'es-DO': ['es'],
      'en-GB': ['en'],
      'cs-CZ': ['cs'],
      'es-ES': ['es'],
      'default': ['es'],
    },
    resources: {
      'en': {
        translation: en,
      },
      'cs': {
        translation: cz,
      },
      'es': {
        translation: es
      },
    },
  });

export default i18n;
