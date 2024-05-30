// // TypingAnimation.jsx

// import React, { useState, useEffect } from 'react';
// import './typing.module.scss';

// const TypingAnimation = ({ text, speed }) => {
//   const [displayText, setDisplayText] = useState('');
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const typingInterval = setInterval(() => {
//       if (index < text.length) {
//         setDisplayText((prevText) => prevText + text.charAt(index));
//         setIndex((prevIndex) => prevIndex + 1);
//       } else {
//         clearInterval(typingInterval);
//       }
//     }, speed);

//     return () => clearInterval(typingInterval);
//   }, [text, speed, index]);

//   return <div className="typing-animation">{displayText}</div>;
// };

// export default TypingAnimation;



import React, { useState, useEffect } from 'react'; // Импортируем React, хуки useState и useEffect из библиотеки React.
import { useTranslation } from 'react-i18next'; // Импортируем хук useTranslation из библиотеки react-i18next для интернационализации.
import './typing.module.scss';

// Определение компонента TypingAnimation, который принимает 'text' и 'speed' в качестве пропсов.
const TypingAnimation = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState(''); // useState для управления состоянием отображаемого текста.
  const [index, setIndex] = useState(0);   // useState для управления индексом следующего символа для отображения в тексте.
  const { i18n } = useTranslation();   // Деструктуризация для получения объекта i18n из хука useTranslation.
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);   // useState для управления текущим языком, установленным в i18n.

  // useEffect для обновления текущего языка, когда он изменяется в i18n.
  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  // useEffect для сброса displayText и index при изменении currentLanguage.
  useEffect(() => {
    setDisplayText('');
    setIndex(0);
  }, [currentLanguage]);

  // useEffect для обработки логики анимации печати.
  useEffect(() => {
    const typingInterval = setInterval(() => {    // Установка интервала для обновления отображаемого текста с заданной скоростью 'speed'.
      if (index < text.length) { // Проверка, меньше ли текущий индекс длины текста.
        setDisplayText((prevText) => prevText + text.charAt(index)); // Обновление displayText, добавляя следующий символ из 'text' по текущему 'index'.
        setIndex((prevIndex) => prevIndex + 1); // Увеличение индекса, чтобы указывать на следующий символ.
      } else {
        clearInterval(typingInterval); // Очистка интервала, когда все символы отображены.
      }
    }, speed);

    return () => clearInterval(typingInterval); // Функция очистки для очистки интервала, когда компонент размонтируется или зависимости изменяются.
  }, [text, speed, index]);

  // Возвращение JSX разметки компонента для отображения текущего текста внутри div.
  return <div className="typing-animation">{displayText}</div>;
};

export default TypingAnimation; // Экспорт TypingAnimation как экспорт по умолчанию.



