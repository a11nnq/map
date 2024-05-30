import React from "react"; // Импорт React для использования JSX и React-функций
import { useNavigate } from "react-router-dom"; // Импорт хука useNavigate для программной навигации между страницами
import { useTranslation } from "react-i18next"; // Импорт хука useTranslation для мультиязычной поддержки

import TypingAnimation from "../../utils/Typing/typing";
import { Footer } from "../../components/Footer";

import {
  uni1,
  uni2,
  settings,
  person,
  paint,
  lang,
  book,
  science,
  studentConsult,
  blueCheck,
} from "../../assets/images/index";

import useIsMobile from "../../utils/useIsMobile"; // Импорт пользовательского хука для определения, отображается ли контент на мобильном устройстве

import styles from "./main.module.scss";

// Определение и экспорт функционального компонента Main
export const Main = () => {
  const { t } = useTranslation("main"); // Использование хука useTranslation для локализации текстов
  const navigate = useNavigate(); // Использование хука useNavigate для программной навигации
  const isMobile = useIsMobile(); // Использование хука useIsMobile для проверки типа устройства

  // Данные для карточек первого блока, содержащие изображения и тексты
  const cardData = [
    {
      imgSrc: settings, // Путь к изображению 
      altText: "settings", // Альтернативный текст для изображения
      title: `${t("settingsTitle")}`, // Заголовок
      subtitle: `${t("settingsSubtitle")}`, // Подзаголовок
    },
    {
      imgSrc: person,
      altText: "person",
      title: `${t("personTitle")}`,
      subtitle: `${t("personSubtitle")}`,
    },
    {
      imgSrc: paint,
      altText: "paint",
      title: `${t("paintTitle")}`,
      subtitle: `${t("paintSubtitle")}`,
    },
    {
      imgSrc: lang,
      altText: "lang",
      title: `${t("langTitle")}`,
      subtitle: `${t("langSubtitle")}`,
    },
    {
      imgSrc: book,
      altText: "book",
      title: `${t("bookTitle")}`,
      subtitle: `${t("bookSubtitle")}`,
    },
    {
      imgSrc: science,
      altText: "science",
      title: `${t("scienceTitle")}`,
      subtitle: `${t("scienceSubtitle")}`,
    },
  ];

  const cardData2 = [
    {
      title: `${t("cardData2Title1")}`,
      subtitle: `${t("cardData2Subtitle1")}`,
    },
    {
      title: `${t("cardData2Title2")}`,
      subtitle: `${t("cardData2Subtitle2")}`,
    },
    {
      title: `${t("cardData2Title3")}`,
      subtitle: `${t("cardData2Subtitle3")}`,
    },
    {
      title: `${t("cardData2Title4")}`,
      subtitle: `${t("cardData2Subtitle4")}`,
    },
    {
      title: `${t("cardData2Title5")}`,
      subtitle: `${t("cardData2Subtitle5")}`,
    },
    {
      title: `${t("cardData2Title6")}`,
      subtitle: `${t("cardData2Subtitle6")}`,
    },
    {
      title: `${t("cardData2Title7")}`,
      subtitle: `${t("cardData2Subtitle7")}`,
    },
    {
      title: `${t("cardData2Title8")}`,
      subtitle: `${t("cardData2Subtitle8")}`,
    },
  ];

  const mainTextData = [
    { text: `${t("mainText1")}` },
    { text: `${t("mainText2")}` },
    { text: `${t("mainText3")}` },
    { text: `${t("mainText4")}` },
    { text: `${t("mainText5")}` },
  ];

  return  (
    // Контейнер с адаптивными стилями
    <div className={isMobile ? styles.mobileContainer : styles.container}>
      <div className={styles.section1}>
        <div className={styles.contents}>
          <h2>
            <TypingAnimation text={t("section1.title")} speed={100} />
          </h2>
          <p>{t("section1.description")}</p>
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.mainContent}>
          <div className={styles.topText}>
            <h2>{t("section2.title")}</h2>
            <p>{t("section2.description")}</p>
          </div>
          <div className={styles.secondaryContent}>
            <div className={styles.img1Container}>
              <img src={uni1} alt="uni1" className={styles.img1} />
            </div>
            <div className={styles.cardContainer}>
              {cardData2.map((item, index) => (
                <div className={styles.card} key={index}>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.subtitle}>{item.subtitle}</p>
                </div>
              ))}
            </div>
            <div className={styles.img2Container}>
              <img src={uni2} alt="uni2" className={styles.img2} />
              <p>{t("section2.description")}</p>
              <button
                type="button"
                className={styles.btn1}
                onClick={() => {
                  navigate("/academics");
                }}
              >
                {t("readmore")}
              </button>
            </div>
            
          </div>
        </div>
      </div>
      <div className={styles.section3}>
        <div className={styles.mainContent}>
          <div className={styles.topText}>
            <h2>{t("section3.title")}</h2>
            <p>{t("section3.description")}</p>
          </div>
          <div className={styles.cardContainer}>
            {cardData.map((item, index) => (
              <div className={styles.cardItem} key={index}>
                <img
                  src={item.imgSrc}
                  alt={item.altText}
                  className={styles.cardItemImg}
                />
                <div className={styles.cardItemText}>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.subtitle}>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.section4}>
        <div className={styles.mainContent}>
          <div className={styles.topText}>
            <h2>{t("section4.title")}</h2>
            <p>{t("section4.description")}</p>
          </div>
          <div className={styles.secondaryContent}>
            <img src={studentConsult} alt="students" className={styles.img1} />
            <div className={styles.textContent}>
              {mainTextData.map((item, index) => (
                <div className={styles.mainText} key={index}>
                  <img
                    src={blueCheck}
                    alt="blueCheck"
                    className={styles.checkImg}
                  />
                  <p className={styles.subtext}>{item.text}</p>
                </div>
              ))}
              <button
                type="button"
                className={styles.btn}
                onClick={() => {
                  navigate("/admissions");
                }}
              >
                {t("seeAll")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};
