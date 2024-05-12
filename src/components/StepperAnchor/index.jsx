import React from "react";
import clsx from "clsx";

import Step from "./Step";

import styles from "./style.module.scss";

const StepperAnchor = ({
  steps,
  footerButton,
  mode,
  isItemFullWidth,
  header = false,
}) => {
  const getIsSubtitle2 = () => {
    if (steps?.length) {
      return Boolean(steps.find((item) => Boolean(item?.subtitle2)));
    }
    return false;
  };

  const getIsActive = (index) => {
    if (steps?.length) {
      return (
        (steps[index - 1]?.isDone && steps[index].isDone === false) ||
        (index === 0 && !steps[0].isDone)
      );
    }

    return false;
  };

  return (
    <div className={styles.stepper}>
      <div className={clsx(!isItemFullWidth && styles.stepContainer)}>
        {steps?.length &&
          steps.map((step, index) => (
            <Step
              key={step.id}
              mode={mode}
              title={step.title}
              isItemFullWidth={isItemFullWidth}
              isDone={step.isDone}
              isActive={getIsActive(index)}
              isLast={steps.length - 1 === index}
              isSubtitle2={getIsSubtitle2()}
              subtitle1={step.subtitle1}
              subtitle2={step.subtitle2}
            />
          ))}
      </div>
    </div>
  );
};

export default StepperAnchor;
