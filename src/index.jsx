import React from "react"; // Импорт библиотеки React для использования JSX и других React функций.
import ReactDOM from "react-dom/client"; // Импорт ReactDOM для работы с DOM в браузере, используется новый API для корневого контейнера.
import "./index.css";
import App from "./App"; // Импорт главного компонента App, который служит корневым компонентом для всего приложения.

// Создание корневого узла React для управления содержимым элемента DOM в ID root,который в public/index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( //функция инициализации рендеринга приложения React.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
