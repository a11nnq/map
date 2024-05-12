import React from "react";
import { useTranslation } from 'react-i18next';

import { Select } from "../Select";

import { kzFlag, enFlag, ruFlag } from "../../assets/images/index";

import styles from './style.module.scss';

export const Languages = () => {
  const { i18n } = useTranslation();
  const { language } = i18n;
  const langOptions = [
    { label: 'Қаз', value: 'kk', flag: kzFlag },
    { label: 'Рус', value: 'ru', flag: ruFlag },
    { label: 'Eng', value: 'en', flag: enFlag },
  ];

  const handleChangeLanguage = (currentLanguage) => {
    if (i18n.changeLanguage) {
      i18n.changeLanguage(currentLanguage);
      
    } else if (i18n.languages) {
      i18n.languages = [currentLanguage];
    }
  };

  return (
    <div className={styles.container}>
      <Select
        defaultValue={language}
        options={langOptions}
        onChange={handleChangeLanguage}
      />
    </div>
  )
}