import React from "react"; // Импорт React для использования JSX и хуков
import { useTranslation } from "react-i18next"; // Импорт хука useTranslation для мультиязычной поддержки

import { Footer } from "../../components/Footer";

import { circle } from "../../assets/images";

import useIsMobile from "../../utils/useIsMobile";

import styles from "./contacts.module.scss";

// Определение и экспорт функционального компонента Contacts
export const Contacts = () => {
  const { t } = useTranslation("contacts"); // Использование хука useTranslation для получения функции t, которая будет использоваться для локализации строк
  const isMobile = useIsMobile(); // Определение, отображается ли компонент на мобильном устройстве

  // JSX разметка для компонента
  return (
    // Родительский контейнер с адаптивными стилями
    <div className={isMobile ? styles.mobileContainer : styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.leftContent}>
          <div className={styles.textContent}>
            <p className={styles.title}>{t("contact.title")}</p>
            <p className={styles.subtitle}>{t("contact.subtitle")}</p>
            <div className={styles.subtext}>
              <p className={styles.title2}>{t("contact.contactInfo")}</p>
              <div className={styles.subtextImg}>
                <img src={circle} alt="circle" className={styles.img} />
                <p className={styles.subtext}>
                  {t("contact.phoneNumber")}: +7 (727) 292 60 25
                </p>
              </div>
              <div className={styles.subtextImg}>
                <img src={circle} alt="circle" className={styles.img} />
                <p className={styles.subtext}>
                  {t("contact.email")}: info@satbayev.university
                </p>
              </div>
              <div className={styles.subtextImg}>
                <img src={circle} alt="circle" className={styles.img} />
                <p className={styles.subtext}>{t("contact.address")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.mainContent}>
            <label
              htmlFor="fullname"
              title={t("contact.fullNameTitle")}
              className={styles.label1}
            >
              <span className={styles.title}>{t("contact.fullName")}</span>
              <input
                id="fullname"
                type="text"
                className={styles.input1}
                placeholder={t("contact.fullNamePlaceholder")}
              />
            </label>
            <label
              htmlFor="email"
              title={t("contact.emailTitle")}
              className={styles.label1}
            >
              <span className={styles.title}>{t("contact.email")}</span>
              <input
                id="email"
                type="text"
                className={styles.input1}
                placeholder={t("contact.emailPlaceholder")}
              />
            </label>
            <label
              htmlFor="message"
              title={t("contact.messageTitle")}
              className={styles.label1}
            >
              <span className={styles.title}>{t("contact.message")}</span>
              <input
                id="message"
                type="text"
                className={styles.input2}
                placeholder={t("contact.messagePlaceholder")}
              />
            </label>
            <button type="button" className={styles.btn}>
              {t("contact.send")}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
