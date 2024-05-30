import React from "react"; // Импорт React для использования JSX и других функций React
import clsx from "clsx"; // Импорт функции clsx для условного объединения имен классов

import Step from "./Step";

import styles from "./style.module.scss";

// Объявление функционального компонента StepperAnchor с пропсами
const StepperAnchor = ({
  steps, // Массив шагов для отображения
  footerButton, 
  mode, // Режим отображения компонента
  isItemFullWidth, // Флаг, указывающий, должен ли каждый шаг занимать всю ширину
  header = false, // Наличие заголовка (отсутствует)
}) => {
  // Функция определяет, есть ли у какого-либо шага подзаголовок второго уровня.
  const getIsSubtitle2 = () => {
    if (steps?.length) { // Проверяем, есть ли шаги
      return Boolean(steps.find((item) => Boolean(item?.subtitle2))); // Возвращаем true, если есть хотя бы один шаг с subtitle2
    }
    return false;
  };

  // Функция определяет, активен ли шаг на данный момент.
  const getIsActive = (index) => {
    if (steps?.length) { // Проверяем, есть ли шаги
      return (
        (steps[index - 1]?.isDone && steps[index].isDone === false) || // Если предыдущий шаг выполнен, а текущий нет
        (index === 0 && !steps[0].isDone) // Или если это первый шаг и он не выполнен
      );
    }

    return false; // Если шагов нет, false
  };

  // JSX разметка для компонента
  return (
    <div className={styles.stepper}>
      <div className={clsx(!isItemFullWidth && styles.stepContainer)}>
        {steps?.length &&
          steps.map((step, index) => ( // Отображение каждого шага, используя компонент Step
            <Step
              key={step.id} // Уникальный ключ для React списка
              mode={mode} // Режим, передается в Step
              title={step.title} // Флаг ширины шага
              isItemFullWidth={isItemFullWidth} 
              isDone={step.isDone} // Статус завершения шага
              isActive={getIsActive(index)}
              isLast={steps.length - 1 === index} // Проверка, последний ли это шаг
              isSubtitle2={getIsSubtitle2()} // Есть ли подзаголовок второго уровня
              subtitle1={step.subtitle1}
              subtitle2={step.subtitle2}
            />
          ))}
      </div>
    </div>
  );
};

// Экспорт компонента StepperAnchor по умолчанию
export default StepperAnchor;
