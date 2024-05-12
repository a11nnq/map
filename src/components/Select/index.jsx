import React from 'react';
import clsx from 'clsx';

import caretUp from '../../assets/images/caret_up.svg';
import caretDown from '../../assets/images/caret_down.svg';
import styles from './style.module.scss';

export const Select = ({  
  label = '',
  options,
  defaultValue,
  onChange,
  className,
}) => {
  const [value, setValue] = React.useState(defaultValue);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    onChange?.(selectedValue);
    setValue(selectedValue);
    closeDropdown();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

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
          {options.map(option => (
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
