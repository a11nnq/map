import React from "react"; // Импорт React для использования JSX и функций React в компоненте
import clsx from "clsx"; // Импорт функции clsx для удобной работы с классами CSS, позволяя добавлять классы условно
import { Link, useLocation } from "react-router-dom"; // Импорт компонента Link и хука useLocation из библиотеки react-router-dom
import { useTranslation } from "react-i18next"; // Импорт хука useTranslation для поддержки многоязычности в компоненте

import styles from "./sidebar.module.scss";

// Объявление и экспорт функционального компонента Sidebar
export const Sidebar = () => {
  const location = useLocation(); // Использование хука useLocation для доступа к текущему маршруту в приложении
  const { t } = useTranslation("navbar"); // Использование хука useTranslation для загрузки текстовых ресурсов, специфичных для navbar

  // JSX разметка, описывающая содержимое Sidebar
  return (
    <div className={styles.sidebarMobile}> 
      <div className={styles.open}>
        <div className={styles.sidebar}> 
          <div style={{ marginTop: "15px" }} /> 
          <div className={styles.navigationLinks}> 
            <Link to="/" style={{ textDecoration: "none" }}> 
              <div
                className={clsx(
                  styles.button, // Основной класс для стилизации кнопки
                  location.pathname === "/" && styles.active // Добавление класса active если маршрут совпадает с текущим (выделение строкой)
                )}
              >
                {t("home")}
              </div>
            </Link>
            <Link to="/admissions" style={{ textDecoration: "none" }}>
              <div
                className={clsx(
                  styles.button,
                  location.pathname === "/admissions" && styles.active
                )}
              >
                {t("admission")}
              </div>
            </Link>
            <Link to="/academics" style={{ textDecoration: "none" }}>
              <div
                className={clsx(
                  styles.button,
                  location.pathname === "/academics" && styles.active
                )}
              >
                {t("academics")}
              </div>
            </Link>
            <Link to="/contact-us" style={{ textDecoration: "none" }}>
              <div
                className={clsx(
                  styles.button,
                  location.pathname === "/contact-us" && styles.active
                )}
              >
                {t("contact")}
              </div>
            </Link>
            <Link to="/campus-navigation" style={{ textDecoration: "none" }}>
              <div
                className={clsx(
                  styles.button,
                  location.pathname === "/campus-navigation" && styles.active
                )}
              >
                {t("campus")}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
