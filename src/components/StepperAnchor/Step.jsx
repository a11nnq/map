import React from "react";
import clsx from "clsx";

import {
  blueRadioButtonIcon,
  checkCircleFillIcon,
} from "../../assets/images/index";

import styles from "./step.module.scss";

import useIsMobile from "../../utils/useIsMobile";

const Step = ({
  mode = "blue",
  title,
  subtitle1,
  subtitle2,
  isItemFullWidth = false,
  isDone,
  isLast,
  isActive,
  isSubtitle2,
}) => {
  const isMobile = useIsMobile();

  const activeBgClassName = {
    green: styles.bgSuccessLightGreen,
    blue: styles.bgPrimaryLightBlue,
  };

  const progressLine = () => {
    if (!isDone) {
      return styles.bgAlphaBlack15;
    }

    return styles.bgSuccessGreen;
  };

  const progressIcon = () => {
    if (isDone) {
      return checkCircleFillIcon;
    }

    if (isActive && mode === "blue") {
      return blueRadioButtonIcon;
    }

    if (isActive && mode === "green") {
      return checkCircleFillIcon;
    }

    return blueRadioButtonIcon;
  };

  return (
    <div className={isMobile ? styles.mobileContainer : styles.desktopContainer}>
      <div
        className={clsx(
          styles.container,
          isSubtitle2 ? styles.subtitle2Height : styles.subtitle1Height,
          isActive && activeBgClassName[mode],
          !isItemFullWidth && styles.rounded
        )}
      >
        <div
          className={clsx(
            styles.container2,
            !isLast && isSubtitle2 && styles.subtitle2Margin,
            !isLast && !isSubtitle2 && styles.subtitle1Margin,
            isItemFullWidth ? styles.fullWidthMargin : styles.normalMargin
          )}
        >
          <div className={styles.iconContainer}>
            <img
              src={progressIcon()}
              alt="progressIcon"
              className={styles.progressIcon}
            />
          </div>
          {!isLast && (
            <div className={clsx(styles.progressLine, progressLine())} />
          )}
        </div>
        <div className={styles.texts}>
          <div
            className={clsx(
              isItemFullWidth ? styles.fullWidth : styles.normalWidth
            )}
          >
            <p
              className={clsx(
                styles.text2,
                !isDone && !isActive && styles.textNeutralDarkGrey,
                isDone && isActive && styles.neutralBlack,
                mode === "green" && styles.textPrimaryBlue
              )}
            >
              {subtitle1}
            </p>
            <p
              className={clsx(
                styles.text1,
                !isDone && !isActive && styles.textNeutralDarkGrey,
                isDone && isActive && styles.neutralBlack
              )}
            >
              {title}
            </p>
            {subtitle2 && (
              <p
                className={clsx(
                  !isDone && !isActive && styles.textNeutralDarkGrey,
                  isDone && isActive && styles.neutralBlack
                )}
              >
                {subtitle2}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;
