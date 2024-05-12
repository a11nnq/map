import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import locales from '../libs/i18n/index';

const initOptions = {
  fallbackLng: 'ru',
  resources: locales,
  lng: 'ru',
  debug: false,
  backend: {
    loadPath: '../libs/i18n/{{lng}}.json',
  },
};

i18n.use(initReactI18next).init(initOptions);

export default i18n;
