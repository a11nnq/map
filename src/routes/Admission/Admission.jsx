import React from "react";
import { useTranslation } from "react-i18next";

import StepperAnchor from "../../components/StepperAnchor";
import { Footer } from "../../components/Footer/index";

import { calendar } from "../../assets/images/index";

import useIsMobile from "../../utils/useIsMobile";

import styles from "./admission.module.scss";

export const Admission = () => {
  const { t } = useTranslation("admission");
  const isMobile = useIsMobile();

  const steps = [
    {
      id: 1,
      title: `${t("title1")}`,
      isDone: false,
      subtitle2: `${t("subtitle1")}`,
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

  return (
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
