import React from "react";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./sidebar.module.scss";

export const Sidebar = () => {
  const location = useLocation();
  const { t } = useTranslation("navbar");

  return (
    <div className={styles.sidebarMobile}>
      <div className={styles.open}>
        <div className={styles.sidebar}>
          <div style={{ marginTop: "15px" }} />
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
        </div>
      </div>
    </div>
  );
};
