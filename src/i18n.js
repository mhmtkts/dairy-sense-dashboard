import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Çeviri dosyalarını import ediyoruz
import translationEN from './locales/en.json';
import translationTR from './locales/tr.json';

const resources = {
  en: {
    translation: translationEN
  },
  tr: {
    translation: translationTR
  }
};

i18n
  // Tarayıcı dilini algılaması için eklentiyi ekliyoruz
  .use(LanguageDetector)
  // i18n'i react-i18next'e iletiyoruz
  .use(initReactI18next)
  // i18n'i başlatıyoruz
  .init({
    resources,
    fallbackLng: 'tr', // Eğer algılanan dilin çevirisi yoksa Türkçe'yi kullan
    interpolation: {
      escapeValue: false // React zaten XSS'e karşı koruma sağladığı için gerekli değil
    }
  });

export default i18n;