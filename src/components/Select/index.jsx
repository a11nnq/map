import React from 'react'; // Импорт React для использования JSX и хуков
import clsx from 'clsx'; // Импорт функции clsx для условного объединения имен классов

import caretUp from '../../assets/images/caret_up.svg';
import caretDown from '../../assets/images/caret_down.svg';
import styles from './style.module.scss';

// Определение функционального компонента Select с пропсами и значениями по умолчанию
export const Select = ({  
  label = '', // Значение по умолчанию для метки
  options, // Список опций для выбора
  defaultValue, // Значение по умолчанию выбранного элемента
  onChange, // Функция обратного вызова при изменении выбора
  className, // Дополнительный класс для стилизации
}) => {
  const [value, setValue] = React.useState(defaultValue); // Хранение текущего выбранного значения с помощью хука useState
  const [isOpen, setIsOpen] = React.useState(false); // Хранение состояния открытия/закрытия выпадающего списка

  // Обработчик изменения выбора
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    onChange?.(selectedValue); // Вызов функции onChange, если она определена
    setValue(selectedValue); // Обновление выбранного значения
    closeDropdown(); // Закрытие выпадающего списка
  };

  // Функция для переключения видимости выпадающего списка
  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Инвертирование состояния isOpen
  };

  // Функция для закрытия выпадающего списка
  const closeDropdown = () => {
    setIsOpen(false);
  };

  // Рендеринг компонента
  return (
    <div className={styles.selectWrapper}>
      <label htmlFor={label}> 
        {label}
      </label>
      <div className={clsx(styles.select, isOpen && styles.open, className)}> 
        <div className={styles.selectedOption} onClick={toggleDropdown}> 
          <img src={options.find(option => option.value === value)?.flag} alt="" /> 
          <span>{options.find(option => option.value === value)?.label}</span> 
          <img src={isOpen ? caretUp : caretDown} alt="" className={styles.caretIcon} /> 
        </div>
        <ul className={styles.dropdownContent}> 
          {options.map(option => ( // Итерация по массиву опций
            <li key={option.value} onClick={() => handleChange({ target: { value: option.value } })}> 
              <img src={option.flag} alt={option.label} /> 
              <span>{option.label}</span> 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
