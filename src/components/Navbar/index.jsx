import React, { useState } from "react";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Languages } from "../Languages";
import { Sidebar } from "../Sidebar/Sidebar";

import { logoDesktop, sidebarIcon } from "../../assets/images/index";

import styles from "./style.module.scss";

import useIsMobile from "../../utils/useIsMobile";

export const Navbar = () => {
  const location = useLocation();
  const { t } = useTranslation("navbar");
  const isMobile = useIsMobile();

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return isMobile ? (
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
