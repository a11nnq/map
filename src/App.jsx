import React from "react"; // Импорт React для использования JSX и функциональностей React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Импорт компонентов BrowserRouter (переименованного в Router), Routes и Route для маршрутизации внутри приложения
import { I18nextProvider } from 'react-i18next'; // Импорт I18nextProvider для интеграции i18next с React и обеспечения доступности i18n контекста в компонентах

// Импорт объекта i18n для мультиязычной поддержки
import i18n from "./utils/i18n";
import { Layout } from "./routes/Layout/Layout";
import { Main } from "./routes/Main/Main";
import { Contacts } from "./routes/Contacts/Contacts";
import { Admission } from "./routes/Admission/Admission";
import { Academics } from "./routes/Academics";
import { CampusNavigation } from "./routes/CampusNavigation/CampusNavigation";

// Определение основной функции App, которая будет корнем приложения
function App() {
  return (
    // Внешний контейнер для всего приложения
    <div>
      <I18nextProvider i18n={i18n}> 
        <Router basename="/map">
          <Layout>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/contact-us" element={<Contacts />} />
              <Route path="/admissions" element={<Admission />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/campus-navigation" element={<CampusNavigation />} />
            </Routes>
          </Layout>
        </Router>
      </I18nextProvider>
    </div>
  );
}

export default App; // Экспорт функции App для использования в индексном файле и монтирования в DOM
