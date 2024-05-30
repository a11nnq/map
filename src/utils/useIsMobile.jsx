import { useState, useEffect } from 'react'; // Импорт хуков useState и useEffect из библиотеки React.

// Определение пользовательского хука useIsMobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);  // Использование useState для создания состояния isMobile с начальным значением false

  // Использование useEffect для выполнения логики определения мобильного устройства при монтировании компонента
  useEffect(() => {
    // Определение userAgent: если объект navigator не определен (например, при рендеринге на сервере), userAgent будет пустой строкой
    const userAgent =
      typeof navigator === 'undefined' ? '' : navigator.userAgent;
    // Проверка userAgent на соответствие с регулярным выражением, указывающим на мобильные устройства
      const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
      ),
    );
    setIsMobile(mobile); // Установка состояния isMobile в true или false в зависимости от результата проверки
  }, []);

  // Возвращение текущего значения isMobile
  return isMobile;
};

export default useIsMobile; // Экспорт хука useIsMobile для использования в других компонентах
