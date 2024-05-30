import React from "react"; // Импорт React для использования JSX и React функций

import { Navbar } from "../../components/Navbar";

import useIsMobile from "../../utils/useIsMobile"; // Импорт пользовательского хука useIsMobile для определения, используется ли мобильное устройство

import styles from "./layout.module.scss";

// Определение функционального компонента Layout с принимаемым аргументом children (дочерние элементы)
export const Layout = ({ children }) => {
  const isMobile = useIsMobile(); // Использование хука useIsMobile для проверки, отображается ли контент на мобильном устройстве


  return isMobile ? (
    // Если используется мобильное устройство, выводится следующая разметка
    <div className={styles.mobilecontainer}>
      <div className={styles.navbarContainer}>
        <Navbar />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  ) : (
    // Если используется не мобильное устройство, выводится следующая разметка
    <div className={styles.container}>
      <div className={styles.navbarContainer}>
        <Navbar />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );  
};
