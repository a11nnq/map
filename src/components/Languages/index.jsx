import React from "react";
import { useTranslation } from 'react-i18next';

import { Select } from "../Select";// Импорт компонента Select

import { kzFlag, enFlag, ruFlag } from "../../assets/images/index";

import styles from './style.module.scss';

// Экспорт функционального компонента Languages
export const Languages = () => {
  const { i18n } = useTranslation(); // Получение объекта i18n для управления локализацией
  const { language } = i18n; // Получение текущего активного языка
  // Определение списка языковых опций для компонента Select
  const langOptions = [
    { label: 'Қаз', value: 'kk', flag: kzFlag },
    { label: 'Рус', value: 'ru', flag: ruFlag },
    { label: 'Eng', value: 'en', flag: enFlag },
  ];

  // Функция для изменения текущего языка
  const handleChangeLanguage = (currentLanguage) => {
    // Проверка и изменение языка, если метод доступен
    if (i18n.changeLanguage) {
      i18n.changeLanguage(currentLanguage);
      
    } else if (i18n.languages) {
      // Если нет оставляем
      i18n.languages = [currentLanguage];
    }
  };

  // Рендер компонента Select с передачей текущего языка, опций и обработка изменения
  return (
    <div className={styles.container}>
      <Select
        defaultValue={language} // Установка выбранного по умолчанию значения языка
        options={langOptions} // Передача опций языка
        onChange={handleChangeLanguage} // Передача функции для обработки изменения
      />
    </div>
  )
}