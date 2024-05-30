import React, { useState } from "react"; // Импорт React и хука useState для использования состояния в функциональном компоненте
import clsx from "clsx"; // Импорт функции clsx для условного объединения имен классов
import { Link, useLocation } from "react-router-dom"; // Импорт Link и useLocation для навигации и доступа к текущему пути
import { useTranslation } from "react-i18next";// Импорт хука useTranslation для локализации

// Импорт компонентов Languages и Sidebar
import { Languages } from "../Languages";
import { Sidebar } from "../Sidebar/Sidebar";

import { logoDesktop, sidebarIcon } from "../../assets/images/index";

import styles from "./style.module.scss";

import useIsMobile from "../../utils/useIsMobile";

// Определение компонента Navbar
export const Navbar = () => {
  const location = useLocation(); // Получение текущего пути через хук useLocation
  const { t } = useTranslation("navbar"); // Получение функции для локализации текста
  const isMobile = useIsMobile(); // Определение, является ли устройство мобильным

  // Локальное состояние для контроля видимости Sidebar
  const [isOpen, setIsOpen] = useState(false);

  // Функция для переключения состояния видимости Sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return isMobile ? (
    // Мобильная версия навбара
    <div className={styles.mobileContainer}>
      <div className={styles.navbar}>
        <button
          type="button"
          onClick={toggleSidebar}
          className={styles.toggleButton}
        >
          <img
            src={sidebarIcon}
            alt="fileIcon"
            className={styles.sidebarIcon}
          />
        </button>
        <img
          className={styles.logo}
          alt="logo"
          src={logoDesktop}
          loading="lazy"
        />
        <div className={styles.langs}>
          <Languages />
        </div>
      </div>
      {isOpen && <Sidebar />}
      {isOpen && (
        <div aria-hidden className={styles.backdrop} onClick={toggleSidebar} />
      )}
    </div>
  ) : (
    // Десктопная версия навбара
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <img
            src={logoDesktop}
            alt="logo desktop"
            className={styles.logoImg}
          />
        </div>
        <div className={styles.navigationLinks}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div
              className={clsx(
                styles.button,
                location.pathname === "/" && styles.active
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
        <div className={styles.langs}>
          <Languages />
        </div>
      </div>
    </div>
  );
};
