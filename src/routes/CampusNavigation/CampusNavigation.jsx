import React from "react"; // Импорт React для использования JSX и хуков в компоненте
import { useTranslation } from "react-i18next"; // Импорт хука useTranslation из библиотеки react-i18next для локализации

import useIsMobile from "../../utils/useIsMobile"; // Импорт пользовательского хука useIsMobile для определения, отображается ли контент на мобильном устройстве

import styles from "./campusnavigation.module.scss";

// Определение и экспорт функционального компонента CampusNavigation
export const CampusNavigation = () => {
  const isMobile = useIsMobile(); // Использование хука useIsMobile для проверки, используется ли мобильное устройство
  const { t } = useTranslation("campus"); // Использование хука useTranslation для обращения к набору переводов для "campus"

  // Возвращение JSX разметки
  return(
    // Контейнер с адаптивным классом стиля в зависимости от того, мобильное устройство или нет
    <div className={isMobile ? styles.mobileContainer : styles.container}>
      <div className={styles.main}>
        <h2 style={{marginTop: isMobile ? '' : '5vh'}}>{t("title")}</h2>
        <iframe
          style={{width: '95%', paddingLeft: isMobile ? '10px' : '8vh', paddingRight: isMobile ? '10px' : '8vh', paddingBottom: isMobile ? '10px' : '8vh', paddingTop: isMobile ? '10px' : '3vh', height: '80vh', flex: 'inline-flex'}}
          frameBorder={0} 
          href="https://www.mappedin.com/" 
          title="Mappedin Map" 
          name="Mappedin Map" 
          src="https://app.mappedin.com/map/662640c03d4f85efee0e4886?embedded=true">
        </iframe>
      </div>
    </div>
  )
}