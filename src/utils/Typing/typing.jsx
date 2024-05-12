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



import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './typing.module.scss';

const TypingAnimation = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    setDisplayText('');
    setIndex(0);
  }, [currentLanguage]);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed, index]);

  return <div className="typing-animation">{displayText}</div>;
};

export default TypingAnimation;


