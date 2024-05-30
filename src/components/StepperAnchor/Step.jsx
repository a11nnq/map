import React from "react"; // Импорт React для использования JSX и других функций React
import clsx from "clsx"; // Импорт библиотеки clsx для условного соединения классов

import {
  blueRadioButtonIcon,
  checkCircleFillIcon,
} from "../../assets/images/index";

import styles from "./step.module.scss";

import useIsMobile from "../../utils/useIsMobile"; // Импорт хука для определения, мобильное ли устройство


// Объявление компонента Step с пропсами и значениями по умолчанию
const Step = ({
  mode = "blue", // Режим отображения шага, по умолчанию "blue"
  title,
  subtitle1,
  subtitle2,
  isItemFullWidth = false, // Ширина элемента, по умолчанию не на всю ширину
  isDone, // Статус завершенности шага
  isLast, // Является ли шаг последним
  isActive, // Активен ли шаг
  isSubtitle2, // Наличие второго подзаголовка
}) => {
  const isMobile = useIsMobile(); // Определение, используется ли мобильное устройство

  // Объект для маппинга классов фонового цвета в зависимости от режима
  const activeBgClassName = {
    green: styles.bgSuccessLightGreen,
    blue: styles.bgPrimaryLightBlue,
  };

  // Функция для определения класса стиля линии прогресса
  const progressLine = () => {
    if (!isDone) {
      return styles.bgAlphaBlack15; // Если шаг не завершен, используется прозрачный черный
    }

    return styles.bgSuccessGreen; // Если завершен, используется зелены
  };

  // Функция для определения иконки прогресса
  const progressIcon = () => {
    if (isDone) {
      return checkCircleFillIcon; // Если шаг завершен, показывается заполненный круг
    }

    if (isActive && mode === "blue") {
      return blueRadioButtonIcon; // Если шаг активен и режим синий, показывается синяя иконка
    }

    if (isActive && mode === "green") {
      return checkCircleFillIcon; // Если шаг активен и режим зеленый, показывается заполненный круг
    }

    return blueRadioButtonIcon; // По умолчанию синяя иконка
  };

  return (
    // Контейнер для шага с адаптивностью для мобильных и десктопов
    <div className={isMobile ? styles.mobileContainer : styles.desktopContainer}>
      <div
        className={clsx(
          styles.container,
          isSubtitle2 ? styles.subtitle2Height : styles.subtitle1Height,
          isActive && activeBgClassName[mode],
          !isItemFullWidth && styles.rounded
        )}
      >
        <div
          className={clsx(
            styles.container2,
            !isLast && isSubtitle2 && styles.subtitle2Margin,
            !isLast && !isSubtitle2 && styles.subtitle1Margin,
            isItemFullWidth ? styles.fullWidthMargin : styles.normalMargin
          )}
        >
          <div className={styles.iconContainer}>
            <img
              src={progressIcon()}
              alt="progressIcon"
              className={styles.progressIcon}
            />
          </div>
          {!isLast && (
            <div className={clsx(styles.progressLine, progressLine())} /> // Линия прогресса, если не последний шаг
          )}
        </div>
        <div className={styles.texts}>
          <div
            className={clsx(
              isItemFullWidth ? styles.fullWidth : styles.normalWidth
            )}
          >
            <p
              className={clsx(
                styles.text2,
                !isDone && !isActive && styles.textNeutralDarkGrey,
                isDone && isActive && styles.neutralBlack,
                mode === "green" && styles.textPrimaryBlue
              )}
            >
              {subtitle1} 
            </p>
            <p
              className={clsx(
                styles.text1,
                !isDone && !isActive && styles.textNeutralDarkGrey,
                isDone && isActive && styles.neutralBlack
              )}
            >
              {title}
            </p>
            {subtitle2 && (
              <p
                className={clsx(
                  !isDone && !isActive && styles.textNeutralDarkGrey,
                  isDone && isActive && styles.neutralBlack
                )}
              >
                {subtitle2}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Экспорт компонента по умолчанию
export default Step;
