import React from "react"; // Импорт React для использования JSX и функциональности React
import { useTranslation } from "react-i18next"; // Импорт хука useTranslation для поддержки многоязычности

import { Footer } from "../../components/Footer";

import useIsMobile from "../../utils/useIsMobile";

import styles from "./style.module.scss";

// Определение и экспорт функционального компонента Academics
export const Academics = () => {
  const { t } = useTranslation("academics");// Инициализация хука useTranslation для получения функции t для локализации текстов
  const isMobile = useIsMobile();// Использование хука useIsMobile для проверки, отображается ли сайт на мобильном устройст

  // Массив данных для первой секции, использующий функцию t для получения локализованных заголовков
  const section1data = [
    { title: `${t("section1.data.title1")}` },
    { title: `${t("section1.data.title2")}` },
    { title: `${t("section1.data.title3")}` },
    { title: `${t("section1.data.title4")}` },
    { title: `${t("section1.data.title5")}` },
    { title: `${t("section1.data.title6")}` },
  ];
  
  const section2data = [
    { title: `${t("section2.data.title1")}` },
    { title: `${t("section2.data.title2")}` },
    { title: `${t("section2.data.title3")}` },
    { title: `${t("section2.data.title4")}` },
    { title: `${t("section2.data.title5")}` },
    { title: `${t("section2.data.title6")}` },
    { title: `${t("section2.data.title7")}` },
    { title: `${t("section2.data.title8")}` },
    { title: `${t("section2.data.title9")}` },
    { title: `${t("section2.data.title10")}` },
    { title: `${t("section2.data.title11")}` },
    { title: `${t("section2.data.title12")}` },
    { title: `${t("section2.data.title13")}` },
    { title: `${t("section2.data.title14")}` },
    { title: `${t("section2.data.title15")}` },
    { title: `${t("section2.data.title16")}` },
    { title: `${t("section2.data.title17")}` }
  ];

  const section3data = [
    { title: `${t("section3.data.title1")}` },
    { title: `${t("section3.data.title2")}` },
    { title: `${t("section3.data.title3")}` },
    { title: `${t("section3.data.title4")}` },
    { title: `${t("section3.data.title5")}` },
    { title: `${t("section3.data.title6")}` },
    { title: `${t("section3.data.title7")}` },
    { title: `${t("section3.data.title8")}` },
    { title: `${t("section3.data.title9")}` }
  ];

  const section4data = [
    { title: `${t("section4.data.title1")}` },
    { title: `${t("section4.data.title2")}` },
    { title: `${t("section4.data.title3")}` },
    { title: `${t("section4.data.title4")}` },
    { title: `${t("section4.data.title5")}` },
    { title: `${t("section4.data.title6")}` },
    { title: `${t("section4.data.title7")}` },
    { title: `${t("section4.data.title8")}` },
    { title: `${t("section4.data.title9")}` },
    { title: `${t("section4.data.title10")}` }
  ];

  const section5data = [
    { title: `${t("section5.data.title1")}` },
    { title: `${t("section5.data.title2")}` },
    { title: `${t("section5.data.title3")}` },
    { title: `${t("section5.data.title4")}` },
    { title: `${t("section5.data.title5")}` },
    { title: `${t("section5.data.title6")}` },
    { title: `${t("section5.data.title7")}` },
    { title: `${t("section5.data.title8")}` },
    { title: `${t("section5.data.title9")}` },
    { title: `${t("section5.data.title10")}` }
  ];
    
  const section6data = [
    { title: `${t("section6.data.title1")}` },
    { title: `${t("section6.data.title2")}` },
    { title: `${t("section6.data.title3")}` },
    { title: `${t("section6.data.title4")}` },
    { title: `${t("section6.data.title5")}` }
  ];

  return (
    // Фрагмент для группировки элементов без дополнительного DOM узла
    <>
      <div className={isMobile ? styles.mobileContainer : styles.container}>
        <div className={styles.main}>
          <div className={styles.section1}>
            <div className={styles.topText}>
              <h2>{t("section1.title")}</h2>
              <p>{t("section1.subtitle")}</p>
            </div>
            <h2 className={styles.cardTitle}>{t("section1.cardTitle")}</h2>
            <div className={styles.cardContainer}>
              {section1data.map((item, index) => (
                <div className={styles.card} key={index}>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.subtitle}>{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
          <hr style={isMobile ? { marginTop: "35px", background: "#222" } : { marginTop: "55px", background: "#222" }} />
          <div className={styles.section1}>
            <div className={styles.topText}>
              <h2>{t("section2.title")}</h2>
              <p>{t("section2.subtitle")}</p>
            </div>
            <h2 className={styles.cardTitle}>{t("section2.cardTitle")}</h2>
            <div className={styles.cardContainer}>
              {section2data.map((item, index) => (
                <div className={styles.card} key={index}>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.subtitle}>{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
          <hr style={isMobile ? { marginTop: "35px", background: "#222" } : { marginTop: "55px", background: "#222" }} />
          <div className={styles.section1}>
            <div className={styles.topText}>
              <h2>{t("section3.title")}</h2>
              <p>{t("section3.subtitle")}</p>
            </div>
            <h2 className={styles.cardTitle}>{t("section3.cardTitle")}</h2>
            <div className={styles.cardContainer}>
              {section3data.map((item, index) => (
                <div className={styles.card} key={index}>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.subtitle}>{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
          <hr style={isMobile ? { marginTop: "35px", background: "#222" } : { marginTop: "55px", background: "#222" }} />
          <div className={styles.section1}>
            <div className={styles.topText}>
              <h2>{t("section4.title")}</h2>
              <p>{t("section4.subtitle")}</p>
            </div>
            <h2 className={styles.cardTitle}>{t("section4.cardTitle")}</h2>
            <div className={styles.cardContainer}>
              {section4data.map((item, index) => (
                <div className={styles.card} key={index}>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.subtitle}>{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
          <hr style={isMobile ? { marginTop: "35px", background: "#222" } : { marginTop: "55px", background: "#222" }} />
          <div className={styles.section1}>
            <div className={styles.topText}>
              <h2>{t("section5.title")}</h2>
              <p>{t("section5.subtitle")}</p>
            </div>
            <h2 className={styles.cardTitle}>{t("section4.cardTitle")}</h2>
            <div className={styles.cardContainer}>
              {section5data.map((item, index) => (
                <div className={styles.card} key={index}>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.subtitle}>{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
          <hr style={isMobile ? { marginTop: "35px", background: "#222" } : { marginTop: "55px", background: "#222" }} />
          <div className={styles.section1}>
            <div className={styles.topText}>
              <h2>{t("section6.title")}</h2>
              <p>{t("section6.subtitle")}</p>
            </div>
            <h2 className={styles.cardTitle}>{t("section6.cardTitle")}</h2>
            <div className={styles.cardContainer}>
              {section6data.map((item, index) => (
                <div className={styles.card} key={index}>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.subtitle}>{item.subtitle}</p>
                </div>
              ))}
            </div>
            <div style={isMobile ? { height: "35px" } : { height: "55px" }} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
