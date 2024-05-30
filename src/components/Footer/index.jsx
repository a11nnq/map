import React from "react"; // Импорт React для использования JSX и других функций React
import { useTranslation } from "react-i18next"; // Импорт хука useTranslation для локализации
import { Link } from "react-router-dom";// Импорт компонента Link для навигации без перезагрузки страницы

import useIsMobile from "../../utils/useIsMobile"; // Импорт хука useIsMobile для определения, используется ли мобильное устройство

import styles from "./style.module.scss";

// Экспорт функционального компонента Footer
export const Footer = () => {
  const { t } = useTranslation("footer");   // Использование хука для получения функции t для перевода текста
  const isMobile = useIsMobile(); //для определения, является ли устройство мобильным

  // Условный рендеринг: разные версии компонента 
  return isMobile ? (
    // Мобильная версия футера
    <div className={styles.mobileContainer}>
      <div className={styles.mainContent}>
        <div className={styles.col1}>
          <p className={styles.title}>{t("satbayevUniversity")}</p>
          <p className={styles.subtitle}>{t("learningThroughResearch")}</p>
        </div>
        <div className={styles.col2container}>
        <div className={styles.col2}>
          <p className={styles.title}>{t("quickLinks")}</p>
          <div className={styles.subcontainer}>
            <Link className={styles.subtitle}>{t("home")}</Link>
            <Link className={styles.subtitle}>{t("admissions")}</Link>
            <Link className={styles.subtitle}>{t("academics")}</Link>
            <Link className={styles.subtitle}>{t("contactUs")}</Link>
          </div>
        </div>
        <div className={styles.col2}>
          <p className={styles.title}>{t("pages")}</p>
          <div className={styles.subcontainer}>
            <Link className={styles.subtitle}>{t("ourBlog")}</Link>
            <Link className={styles.subtitle}>{t("ourTeam")}</Link>
            <Link className={styles.subtitle}>{t("testimonial")}</Link>
            <Link className={styles.subtitle}>{t("cta")}</Link>
          </div>
        </div>
        <div className={styles.col2}>
          <p className={styles.title}>{t("followUs")}</p>
          <div className={styles.subcontainer}>
            <Link
              to="https://www.facebook.com/satbayevuniversity/"
              target="_blank"
              className={styles.subtitle}
            >
              {t("facebook")}
            </Link>
            <Link
              to="https://www.instagram.com/satbayev_university/"
              target="_blank"
              className={styles.subtitle}
            >
              {t("instagram")}
            </Link>
            <Link
              to="https://t.me/s/Satbayev_University_Official?before=191"
              target="_blank"
              className={styles.subtitle}
            >
              {t("telegram")}
            </Link>
            <Link
              to="https://www.youtube.com/user/TheKazntu/featured"
              target="_blank"
              className={styles.subtitle}
            >
              {t("youtube")}
            </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  ) : (
    // Десктопная версия футера
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.col1}>
          <p className={styles.title}>{t("satbayevUniversity")}</p>
          <p className={styles.subtitle}>{t("learningThroughResearch")}</p>
        </div>
        <div className={styles.col2}>
          <p className={styles.title}>{t("quickLinks")}</p>
          <Link className={styles.subtitle}>{t("home")}</Link>
          <Link className={styles.subtitle}>{t("admissions")}</Link>
          <Link className={styles.subtitle}>{t("academics")}</Link>
          <Link className={styles.subtitle}>{t("contactUs")}</Link>
        </div>
        <div className={styles.col2}>
          <p className={styles.title}>{t("pages")}</p>
          <Link className={styles.subtitle}>{t("ourBlog")}</Link>
          <Link className={styles.subtitle}>{t("ourTeam")}</Link>
          <Link className={styles.subtitle}>{t("testimonial")}</Link>
          <Link className={styles.subtitle}>{t("cta")}</Link>
        </div>
        <div className={styles.col2}>
          <p className={styles.title}>{t("followUs")}</p>
          <Link
            to="https://www.facebook.com/satbayevuniversity/"
            target="_blank"
            className={styles.subtitle}
          >
            {t("facebook")}
          </Link>
          <Link
            to="https://www.instagram.com/satbayev_university/"
            target="_blank"
            className={styles.subtitle}
          >
            {t("instagram")}
          </Link>
          <Link
            to="https://t.me/s/Satbayev_University_Official?before=191"
            target="_blank"
            className={styles.subtitle}
          >
            {t("telegram")}
          </Link>
          <Link
            to="https://www.youtube.com/user/TheKazntu/featured"
            target="_blank"
            className={styles.subtitle}
          >
            {t("youtube")}
          </Link>
        </div>
      </div>
    </div>
  );
};
