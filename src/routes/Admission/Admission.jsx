import React from "react";  // Импорт React для использования JSX и хуков
import { useTranslation } from "react-i18next"; // Импорт хука useTranslation из библиотеки react-i18next для локализации текста

import StepperAnchor from "../../components/StepperAnchor";
import { Footer } from "../../components/Footer/index";

import { calendar } from "../../assets/images/index";

import useIsMobile from "../../utils/useIsMobile"; // Импорт пользовательского хука useIsMobile для определения, используется ли мобильное устройство

import styles from "./admission.module.scss";

// Определение и экспорт функционального компонента Admission
export const Admission = () => {
  const { t } = useTranslation("admission"); // Инициализация хука useTranslation для обращения к набору переводов для "admission"
  const isMobile = useIsMobile();   // Использование хука useIsMobile для проверки, отображается ли контент на мобильном устройстве


  // Определение массива шагов для компонента StepperAnchor, использующее функцию t для локализации
  const steps = [
    {
      id: 1,
      title: `${t("title1")}`, // Локализованный заголовок первого шага
      isDone: false, // Статус завершения шага
      subtitle2: `${t("subtitle1")}`, // Локализованный второй подзаголовок
    },
    {
      id: 2,
      title: `${t("title2")}`,
      isDone: false,
      subtitle2: `${t("subtitle2")}`,
    },
    {
      id: 3,
      title: `${t("title3")}`,
      isDone: false,
      subtitle2: `${t("subtitle3")}`,
    },
    {
      id: 4,
      title: `${t("title4")}`,
      isDone: false,
      subtitle2: `${t("subtitle4")}`,
    },
  ];

  // Основная JSX разметка компонента
  return (
    // Контейнер с адаптивным классом стиля
    <div className={isMobile ? styles.mobileContainer : styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.section1}>
          <div className={styles.topText}>
            <h2>{t("mainTitle")}</h2>
            <p>{t("mainsubtitle")}</p>
          </div>

          <div className={styles.stepperCard}>
            <div className={styles.titles}>
              <p className={styles.title}>
                {t("contentTitle")}
              </p>
              <div className={styles.subCard}>
                <img src={calendar} alt="calendar" className={styles.img} />
                <p className={styles.subtitle}>{t("contentSubtitle")}</p>
              </div>
            </div>
            <div className={styles.stepperAnchor}>
              <StepperAnchor steps={steps} mode="blue" />
            </div>
          </div>
          <div style={{ height: "30px", backgroundColor: "#f5f5f5" }}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
