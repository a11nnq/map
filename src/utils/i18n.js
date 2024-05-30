import i18n from 'i18next'; // Импортируем основной объект i18n из библиотеки i18next для управления интернационализацией
import { initReactI18next } from 'react-i18next'; // Импортируем модуль initReactI18next из пакета react-i18next для интеграции i18next с React

// Импортируем локализационные данные из папки libs/i18n
import locales from '../libs/i18n/index';

// Определяем начальные настройки для i18next
const initOptions = {
  fallbackLng: 'ru', // Язык по умолчанию
  resources: locales, // Объект с ресурсами перевода, содержащий переводы для каждого языка
  lng: 'ru', // Начальный язык, который будет использоваться при загрузке приложения
  debug: false, // Опция отладки, при включении показывает в консоли информацию о процессе загрузки переводов
  backend: {
    loadPath: '../libs/i18n/{{lng}}.json', // Путь к файлам ресурсов. {{lng}} будет заменено на текущий активный язык
  },
};

i18n.use(initReactI18next).init(initOptions); // Инициализация i18n с использованием модуля initReactI18next для интеграции с React и передачей опций initOptions

export default i18n; // Экспорт настроенного объекта i18n для использования в других частях приложения
